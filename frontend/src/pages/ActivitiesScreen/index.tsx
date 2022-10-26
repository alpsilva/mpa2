import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";

function timeFormat(seconds : number) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " dias, " : " dias, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " horas, " : " horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minutos, " : " minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

export default function ActivitiesScreen() {
  const [pageSize, setPageSize] = useState<number>(20);

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns: GridColDef[] = [
    {
      field: "atividade",
      headerName: "Nome das Atividades",
      flex: 15,
      description: "Identificação das atividades",
    },
    {
      field: "quantidadeAtividades",
      headerName: "Quantidade de Atividades",
      flex: 10,
      description: "A quantidade de atividades",
    },
    {
      field: "duracaoMinima",
      headerName: "Duração Mínima",
      flex: 15,
      description: "O mínimo de tempo que uma atividade durou.",
    },
    {
      field: "duracaoMaxima",
      headerName: "Duração Máxima",
      flex: 15,
      description: "O máximo de tempo que uma atividade durou.",
    },
    {
      field: "duracaoMedia",
      headerName: "Duração Média",
      flex: 15,
      description: "A média de tempo que uma atividade durou.",
    },
  ];

  async function getActivities() {
    setLoading(true);
    const response = await axios.get('//localhost:8081/bob/tables/atividade');
    const { data } = response;

    const newData = data.map((element : any) => ({
      atividade: element.activity,
      quantidadeAtividades: element.quantity,
      duracaoMinima: timeFormat(element.minDuration),
      duracaoMaxima: timeFormat(element.maxDuration),
      duracaoMedia: timeFormat(element.avgDuration)
    }));
    setRows(newData);
    setLoading(false);
  }

  useEffect(()=>{
    getActivities();
  },[]);

  return (
    <Box sx={{ width: "100%", height: "100vh", backgroundColor: "#BCCADA", display: 'flex' }}>
      <Box sx={{ width: "25vw", height: "100vh" }}>
        <Sidebar />
      </Box>
      <Box
        sx={{
          height: "100vh",
          width: "75vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f2f0f0"
        }}
      >
        <DataGrid
          getRowId={(row) => row.atividade}
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 20, 40]}
          loading={loading}
        />
      </Box>
    </Box>
  );
}

import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";

export default function ActivitiesScreen() {
  const [pageSize, setPageSize] = useState<number>(20);

  const [rows, setRows] = useState([]);

  const columns: GridColDef[] = [
    {
      field: "quantidadeAtividades",
      headerName: "Quantidade de Atividades",
      flex: 15,
      description: "A quantidade de atividades",
    },
    {
      field: "frequenciaMinima",
      headerName: "Frequência Mínima",
      flex: 10,
      description: "O número mínimo de vezes que uma atividade se repetiu.",
    },
    {
      field: "frequenciaMaxima",
      headerName: "Frequência Máxima",
      flex: 10,
      description: "O número máximo de vezes que uma atividade se repetiu.",
    },
    {
      field: "duracaoMinima",
      headerName: "Duração Mínima",
      flex: 10,
      description: "O mínimo de tempo que uma atividade durou.",
    },
    {
      field: "duracaoMaxima",
      headerName: "Duração Máxima",
      flex: 10,
      description: "O máximo de tempo que uma atividade durou.",
    },
  ];

  async function getActivities() {
    const response = await axios.get('//localhost:8081/bob/tables/atividades');
    const { data } = response;

    const newData = data.map((element : any) => ({
      quantidadeAtividades: element.quantidadeAtividades,
      frequenciaMinima: element.frequenciaMinima,
      frequenciaMaxima: element.frequenciaMaxima,
      duracaoMinima: element.duracaoMinima,
      duracaoMaxima: element.duracaoMaxima,
    }));
    setRows(newData);
  }

  useEffect(()=>{
    getActivities();
  },[]);

  return (
    <Box sx={{ width: "100%", height: "100vh", backgroundColor: "#BCCADA" }}>
      <Box sx={{ width: "30vh", height: "100vh" }}>
        <Sidebar />
      </Box>
      <Box
        sx={{
          height: "50vh",
          width: "50vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 20, 40]}
          loading={true}
        />
      </Box>
    </Box>
  );
}

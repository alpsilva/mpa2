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
      description: "O número mínimo de vezes que a atividade se repetiu.",
    },
    {
      field: "frequenciaMaxima",
      headerName: "Frequência Máxima",
      flex: 10,
      description: "O número máximo de vezes que a atividade se repetiu.",
    },
    {
      field: "frequenciaMedia",
      headerName: "Frequência Media",
      flex: 10,
      description: "O número médio de vezes que a atividade se repetiu.",
    },
    {
      field: "frequenciaMediana",
      headerName: "Frequência Mediana",
      flex: 10,
      description: "O número mediano de vezes que a atividade se repetiu.",
    },
    {
      field: "duracaoMinima",
      headerName: "Duração Mínima",
      flex: 10,
      description: "O mínimo de tempo que a atividade durou.",
    },
    {
      field: "duracaoMaxima",
      headerName: "Duração Máxima",
      flex: 10,
      description: "O máximo de tempo que a atividade durou.",
    },
    {
      field: "duracaoMediana",
      headerName: "Mediana das Durações",
      flex: 10,
      description: "A mediana de tempo que a atividade durou.",
    },
    {
      field: "duracaoMedia",
      headerName: "Duração Média",
      flex: 10,
      description: "A média de tempo que a atividade durou.",
    },
  ];

  async function getActivities() {
    const response = await axios.get('//localhost:8081/bob/tables/atividades');
    const { data } = response;

    const newData = data.map((element : any) => ({
      quantidadeAtividades: element.totalQuant,
      frequenciaMinima: element.minQuant,
      frequenciaMaxima: element.maxQuant,
      frequenciaMediana: element.medianaQuant,
      frequenciaMedia: element.avgQuant,
      duracaoMinima: element.minTempo,
      duracaoMaxima: element.maxTempo,
      duracaoMediana: element.medianaTempo,
      duracaoMedia: element.avgTempo,
    }));
    setRows(newData);
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

import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function ActivitiesScreen() {
  const [pageSize, setPageSize] = useState<number>(20);
  // const [rows, setRows] = useState([{
  //   nomeAtividade: '',
  //   recursoExecutor: '',
  //   dataInicio: '',
  //   dataFinal: '',
  //   duracao: 0
  // }]);

  const rows = [
    {
      nomeAtividade: "Sei la",
      recursoExecutor: "Ricardo",
      dataInicio: "01/01/1800",
      dataFinal: "02/02/2022",
      duracao: 10000,
    },
  ];

  const columns: GridColDef[] = [
    {
      field: "nomeAtividade",
      headerName: "Nome da Atividade",
      flex: 15,
      description: "Nome da Atividade",
    },
    {
      field: "recursoExecutor",
      headerName: "Recurso Executor",
      flex: 10,
      description: "Recurso que executou a atividade",
    },
    {
      field: "dataInicio",
      headerName: "Data Inicial",
      flex: 10,
      description: "Data inicial da ativiade",
    },
    {
      field: "dataFinal",
      headerName: "Data de Término",
      flex: 10,
      description: "Data de término da ativiade",
    },
    {
      field: "duracao",
      headerName: "Duração total",
      flex: 8,
      valueFormatter(params) {
        return `${params.value} segundos`;
      },
      description: "Duração total da ativiade em segundos",
    },
  ];

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#BCCADA", }}>
      <Box sx={{ width: "30vh", height: "100vh" }}>
        <Sidebar />
      </Box>
      <Box sx={{ height: '100vh', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
        <DataGrid rows={rows} columns={columns} pageSize={pageSize} onPageSizeChange={(newPageSize) => setPageSize(newPageSize)} rowsPerPageOptions={[10, 20, 40]} loading={true}  />
      </Box>
    </div>
  );
}

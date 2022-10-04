import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DemandsScreen() {
    async function getDemands() {
        const response = await (await axios.get('//localhost:8081/bob/tables/demanda'));
        const { data } = response;

        const newData = data.map((element) => ({
            case_id: element.case_id,
            cliente: element.cliente,
            atividades: Object.keys(element.atividades).length,
            duracao_total: element.duracao_total
        }));
        setRows(newData);
    }

    useEffect(()=> {
        getDemands();
    }, []);

  const [rows, setRows] = useState([{
    case_id: "",
    cliente: "",
    atividades: 0,
    duracao_total: 0
  }]);
  return (
    <Box
      sx={{
        backgroundColor: "#BCCADA",
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <Box sx={{ width: "30%", height: "100%" }}>
        <Sidebar />
      </Box>
      <Box
        sx={{
          width: "70%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ paddingLeft: "10px", height: "10%" }}>
          <h1>Demandas</h1>
        </Box>
        <Box sx={{ margin: "0 10px" }}>
          <Accordion sx={{ margin: "10px 20px" }}>
            <AccordionSummary>
              <Typography>Demandas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Atividades:</Typography>
              <Box>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>case_id</TableCell>
                        <TableCell align="right">Cliente</TableCell>
                        <TableCell align="right">Atividades</TableCell>
                        <TableCell align="right">Duração Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.case_id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.case_id}
                          </TableCell>
                          <TableCell align="right">{row.cliente}</TableCell>
                          <TableCell align="right">{row.atividades}</TableCell>
                          <TableCell align="right">{row.duracao_total}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </AccordionDetails>
          </Accordion>
          {/* <Accordion sx={{ margin: "10px 20px" }}>
            <AccordionSummary>
              <Typography>Demanda 2</Typography>
              <Typography>Cliente 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Atividades:</Typography>
              <Box>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell align="right">Primeira ocorrência</TableCell>
                        <TableCell align="right">Quantidade</TableCell>
                        <TableCell align="right">Tempo Total</TableCell>
                        <TableCell align="right">Tempo médio</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.first}</TableCell>
                          <TableCell align="right">{row.quantity}</TableCell>
                          <TableCell align="right">{row.total}</TableCell>
                          <TableCell align="right">{row.mean}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </AccordionDetails>
          </Accordion> */}
        </Box>
      </Box>
    </Box>
  );
}

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
        const response = await axios.get('//localhost:8081/bob/tables/demanda');
        const { data } = response;
        console.log("salve moçada")

        const newData = data.map((element) => ({
            case_id: element.case_id,
            cliente: element.cliente,
            atividades: element.atividades.map((atividade) => ({
                nome_atividade: atividade.nome,
                primeira_ocorrencia: atividade.primeira_ocorrencia,
                quantidade: atividade.quantidade,
                tempo: atividade.tempo,
                media: atividade.media
            })),
            duracao_total: element.duracao_total
        }));
        setRows(newData);

        console.log(newData)
        console.log(newData.atividades)
    }

    useEffect(()=> {
        getDemands();
    }, []);

  const [rows, setRows] = useState([]);
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
        {/*<Box sx={{ margin: "0 10px" }}>*/}
        {/*  <Accordion sx={{ margin: "10px 20px" }}>*/}
        {/*    <AccordionSummary>*/}
        {/*      <Typography>Demandas</Typography>*/}
        {/*    </AccordionSummary>*/}
        {/*    <AccordionDetails>*/}
        {/*      <Typography>Atividades:</Typography>*/}
        {/*      <Box>*/}
        {/*        <TableContainer component={Paper}>*/}
        {/*          <Table*/}
        {/*            sx={{ minWidth: 650 }}*/}
        {/*            size="small"*/}
        {/*            aria-label="a dense table"*/}
        {/*          >*/}
        {/*            <TableHead>*/}
        {/*              <TableRow>*/}
        {/*                <TableCell>case_id</TableCell>*/}
        {/*                <TableCell align="right">Cliente</TableCell>*/}
        {/*                <TableCell align="right">Atividades</TableCell>*/}
        {/*                <TableCell align="right">Duração Total</TableCell>*/}
        {/*              </TableRow>*/}
        {/*            </TableHead>*/}
        {/*            <TableBody>*/}
        {/*              {rows.map((row) => (*/}
        {/*                <TableRow*/}
        {/*                  key={row.case_id}*/}
        {/*                  sx={{*/}
        {/*                    "&:last-child td, &:last-child th": { border: 0 },*/}
        {/*                  }}*/}
        {/*                >*/}
        {/*                  <TableCell component="th" scope="row">*/}
        {/*                    {row.case_id}*/}
        {/*                  </TableCell>*/}
        {/*                  <TableCell align="right">{row.cliente}</TableCell>*/}
        {/*                  <TableCell align="right">{row.atividades}</TableCell>*/}
        {/*                  <TableCell align="right">{row.duracao_total}</TableCell>*/}
        {/*                </TableRow>*/}
        {/*              ))}*/}
        {/*            </TableBody>*/}
        {/*          </Table>*/}
        {/*        </TableContainer>*/}
        {/*      </Box>*/}
        {/*    </AccordionDetails>*/}
        {/*  Accordion*/}

          {rows.map((row) => (
              <Accordion sx={{ margin: "10px 20px" }}>
                  <AccordionSummary>
                      <Typography>Caso: {row.case_id}</Typography>
                      <Typography>Cliente: {row.cliente}</Typography>
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
                                      {row.atividades.map((atividade) => (
                                          <TableRow
                                              key={atividade.nome}
                                              sx={{
                                                  "&:last-child td, &:last-child th": { border: 0 },
                                              }}
                                          >
                                              <TableCell component="th" scope="row">
                                                  {atividade.nome_atividade}
                                              </TableCell>
                                              <TableCell align="right">{atividade.primeira_ocorrencia}</TableCell>
                                              <TableCell align="right">{atividade.quantidade}</TableCell>
                                              <TableCell align="right">{atividade.tempo}</TableCell>
                                              <TableCell align="right">{atividade.media}</TableCell>
                                          </TableRow>
                                      ))}
                                  </TableBody>
                              </Table>
                          </TableContainer>
                      </Box>
                  </AccordionDetails>
              </Accordion>
              )
          )}

        </Box>
      {/*</Box>*/}
    </Box>
  );
}

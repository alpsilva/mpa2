import Sidebar from "../../Components/Sidebar/Sidebar";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TableRow,
    Typography
} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

function createData(name, first, quantity, total, mean) {
    return { name, first, quantity, total, mean };
}

const rows = [
    createData('Estimar_Tamanho', "10/06/2022 19:30", 6.0, 24, 4.0),
    createData('Corrigir_Erros', "10/06/2022 19:30", 9.0, 37, 4.3),
    createData('Analise_Risco_Produto', "10/06/2022 19:30", 16.0, 24, 6.0),
    createData('Projetar_Modelo_Dados', "10/06/2022 19:30", 3.7, 67, 4.3),
    createData('Fisicalizar_Modelo_Dados', "10/06/2022 19:30", 16.0, 49, 3.9),
];


export default function DemandsScreen() {


  return (
      <Box
          sx={{
              backgroundColor: "#BCCADA",
              height: "100vh",
              width: "100vw",
              display: "flex",
          }}
      >

          <Box sx={{width: '30%', height: '100%'}}>
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
              <Box sx={{paddingLeft: "10px", height: "10%"}}>
                  <h1 >Demandas</h1>
              </Box>
              <Box sx={{ margin: "0 10px" }}>
                  <Accordion sx={{margin: "10px 20px"}}>
                      <AccordionSummary
                      >
                          <Typography>Demanda 1</Typography>
                          <Typography sx={{ marginLeft: "auto"}}>Cliente 1</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography>Atividades:</Typography>
                          <Box>
                              <TableContainer component={Paper}>
                                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
                                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                  </Accordion>
                  <Accordion sx={{margin: "10px 20px"}}>
                      <AccordionSummary
                      >
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
                                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                  </Accordion>
              </Box>
          </Box>
      </Box>

  );
}

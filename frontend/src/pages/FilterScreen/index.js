import { useState } from 'react';
import { useLocation } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DFG from "../../Components/DFG/DFG";
// import { cards } from "../../Components/Sidebar/Data";
import StatisticsTable from "../../Components/StatisticsComponent";
import DetailsTable from "../../Components/DetailsComponent";
import ExibitionTable from "../../Components/ExibitionComponent";
import DemandsTable from "../../Components/DemandsComponent";
import ClientsTable from "../../Components/ClientsComponent";
import DatesTable from "../../Components/ClientsComponent";
import { Box } from "@mui/material";
import mock from "../../mock.json";

function SVGConditional(exibicao, freqSVG, perfSVG) {
  if (exibicao === "frequencia") {
    return <DFG DFGProps={freqSVG} />;
  }
  return <DFG DFGProps={perfSVG} />;
}
export default function FilterScreen() {
  const location = useLocation();
  const [exibicao, setExibicao] = useState(location.state.props.filters.exibicao.slice())
  const data = location.state.props;
  const freqSVG = data.freq_svg;
  const perfSVG = data.perf_svg;

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
        <Sidebar>
          <DemandsTable />
          <ClientsTable />
          <DatesTable />
        </Sidebar>
        {/* <Sidebar cards={cards} /> */}
      </Box>
      <Box
        sx={{
          width: "70%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "25%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ExibitionTable exibitionProps={exibicao} setExibicao={setExibicao} />
          <DetailsTable detailsTableProps={mock.detalhes} />
          <StatisticsTable statisticsProp={data.stats} />
        </Box>
        <Box sx={{ height: "75%", display: "flex" }}>
          {SVGConditional(exibicao, freqSVG, perfSVG)}
          <a href={perfSVG} download>
            <button>Download Perfomace</button>
          </a>
          <a href={freqSVG} download>
            <button>Download Frequência</button>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

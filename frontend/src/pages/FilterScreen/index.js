import {useState, useEffect, useRef, useCallback} from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../Components/Sidebar/Sidebar";
import DFG from "../../Components/DFG/DFG";
// import { cards } from "../../Components/Sidebar/Data";
import StatisticsTable from "../../Components/StatisticsComponent";
import DetailsTable from "../../Components/DetailsComponent";
import ExibitionTable from "../../Components/ExibitionComponent";
import DemandsTable from "../../Components/DemandsComponent";
import ClientsTable from "../../Components/ClientsComponent";
import DatesTable from "../../Components/DatesComponent";
import { Box } from "@mui/material";
import mock from "../../mock.json";
import axios from 'axios';
import SVG from "react-inlinesvg";


function SVGConditional(exibicao, freqSVG, perfSVG) {
  if (exibicao === "frequencia") {
    return <SVG src={freqSVG} />;
  }
  return <SVG src={perfSVG} />;
}

function downloadBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
}
export default function FilterScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  const [exibicao, setExibicao] = useState(location.state.props.filters.exibicao.slice())
  const [client, setClient] = useState("cliente1")
  const [demand, setDemand] = useState("novoSistema")
  const [startDate, setStartDate] = useState("auto")
  const [endDate, setEndDate] = useState("auto")
  const isFirstRender = useRef(true);

  const filters = useRef(
    {
      client: "cliente1",
      demand: "novoSistema",
      startDate: "auto",
      endDate: "auto"
    })

  const data = location.state.props;
  const freqSVG = data.freq_svg;
  const perfSVG = data.perf_svg;

  const svgRef = useRef();

  const downloadSVG = useCallback(() => {
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    downloadBlob(blob, `myimage.svg`);
  }, []);

  useEffect(() => {
    const filterByClient = async () => {
      await axios.post('//localhost:8081/bob/filter/client', {input: client})
      .then((response) => {
          console.log("response", response)
          navigate('/Filter', {state:{props: response.data}});
      })
      .catch((e) => {
          console.log("Deu ruim, hein!\n\n")
      })
    }

    const filterByDemand = async () => {
      await axios.post('//localhost:8081/bob/filter/demanda', {input: demand})
      .then((response) => {
          console.log("response", response)
          navigate('/Filter', {state:{props: response.data}});
      })
      .catch((e) => {
          console.log("Deu ruim, hein!\n\n")
      })
    }

    const filterByDate = async () => {
      await axios.post('//localhost:8081/bob/filter/data', {dataInicial: startDate, dataFinal: endDate})
      .then((response) => {
        console.log("response", response)
          // navigate('/Filter', {state:{props: response.data}});
      })
      .catch((e) => {
          console.log("Deu ruim, hein!\n\n")
      })
    }

    const updateFilters = () => {
      filters.current = {
        client: client,
        demand: demand,
        startDate: startDate,
        endDate: endDate
      }
    }

    if(!isFirstRender.current) {
      if(filters.current.client !== client) {
        updateFilters()
        filterByClient()
      } else if (filters.current.demand !== demand) {
        updateFilters()
        filterByDemand()
      } else {
        updateFilters()
        filterByDate()
      }
    } else {
      isFirstRender.current = false;
    }
  }, [client, demand, startDate, endDate, navigate]);

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
          <DemandsTable setDemand={setDemand}/>
          <ClientsTable setClient={setClient}/>
          <DatesTable setStartDate={setStartDate} setEndDate={setEndDate}/>
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
          <div><button onClick={downloadSVG}>Download Perfomace</button></div>
        </Box>
        <Box sx={{ height: "75%", display: "flex" }}>
          <div ref={svgRef}>
            {exibicao === "frequencia" && <SVG width={1280} height={700} src={freqSVG}/>}
            {exibicao !== "frequencia" && <SVG width={1280} height={700} src={perfSVG}/>}
          </div>
          
          
          
        </Box>
        
      </Box>
     
    </Box>
    
  );
}

import { Box, Typography } from "@mui/material";
import './style.css'

function timeFormat(seconds) {
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

const StatisticsTable = ({ statisticsProp }) => {
  const { demandas, atividades, duracao, media } = statisticsProp;
  return (
    <Box sx={{width: "35%"}}>
      <Box className="wrapper"
    >
      <Typography variant="p" color="#FBFBFF"> Quantidade de demandas: {demandas}
      </Typography>
      <Typography variant="p" color="#FBFBFF"> Quantidade de atividades: {atividades}
      </Typography>
      <Typography variant="p" color="#FBFBFF"> Duração média das demandas: {timeFormat(duracao)}
      </Typography>
      <Typography variant="p" color="#FBFBFF"> Média de atividades por demanda {media}
      </Typography>
    </Box>
    <Box sx={{backgroundColor: "#131E2F", height: '12%', width: '45%', paddingLeft: '1em', borderRadius:'0 0 15px 15px'}}>
        <Typography variant='p' color='#FBFBFF' >
          Estatísticas
        </Typography>
    </Box>
    </Box>
  );
};

export default StatisticsTable;

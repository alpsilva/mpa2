import React from "react";
import { Box, Typography } from "@mui/material";
import './style.css'

const StatisticsTable = ({ statisticsProp }) => {
  const { demands, variants, activities, duration, mean } = statisticsProp;
  return (
    <Box sx={{width: "35%"}}>
      <Box className="wrapper"
    >
      <Typography variant="p" color="#FBFBFF"> Quantidade de demandas: {demands}
      </Typography>
      <Typography variant="p" color="#FBFBFF"> Quantidade de variantes: {variants}
      </Typography>
      <Typography variant="p" color="#FBFBFF"> Quantidade de atividades: {activities}
      </Typography>
      <Typography variant="p" color="#FBFBFF"> Duração média das demandas: {duration}
      </Typography>
      <Typography variant="p" color="#FBFBFF"> Duração média das demandas: {mean}
      </Typography>
    </Box>
    <Box sx={{backgroundColor: "#131E2F", height: '12%', width: '45%', paddingLeft: '1em', borderRadius:'0 0 15px 15px'}}>
        <Typography variant='p' color='#FBFBFF' >
          Estatísticas:
        </Typography>
    </Box>
    </Box>
  );
};

export default StatisticsTable;

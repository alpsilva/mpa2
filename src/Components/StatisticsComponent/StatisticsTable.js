import React from "react";
import { Box, Typography } from "@mui/material";
import { Wrapper } from "./style";

const StatisticsTable = ({ statisticsProp }) => {
  const { demands, variants, activities, duration, mean } = statisticsProp;
  return (
    <Wrapper>
      <Box
        sx={{
          width: "250px",
          height: "150px",
          backgroundColor: "#131E2F",
          boxSizing: "border-box",
          paddingX: "20px",
        }}
      >
        <Typography
          variant="p"
          color="#FBFBFF"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <p>Quantidade de demandas:</p>
          <p>{demands}</p>
        </Typography>
        <Typography variant="p" color="#FBFBFF">
          <p>Quantidade de variantes:</p>
          <p>{variants}</p>
        </Typography>
        <Typography variant="p" color="#FBFBFF">
          <p>Quantidade de atividades:</p>
          <p>{activities}</p>
        </Typography>
        <Typography variant="p" color="#FBFBFF">
          <p>Duração média das demandas:</p>
          <p>{duration}</p>
        </Typography>
        <Typography variant="p" color="#FBFBFF">
          <p>Duração média das demandas:</p>
          <p>{mean}</p>
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default StatisticsTable;

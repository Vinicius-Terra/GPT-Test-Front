import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Ambient, Top, Line, NavBox } from "./style";
import { Box, Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import NavMenu from "../NavMenu/index.js";

export default function HomePage() {
  return (
    <Ambient>
      <Top>
        <h2>Wirb</h2> 
        <Avatar/>
      </Top>
      <Line/>
      <NavBox><NavMenu/></NavBox>
    </Ambient>
  );
}

function LoadingFeed() {
  return (
    <Box sx={{ marginTop: "50px" }}>
      <ThreeCircles
        height="100px"
        width="100px"
        outerCircleColor="#3F61D7"
        innerCircleColor="#6C8AE7"
        middleCircleColor="#8BA7F3"
      />
    </Box>
  );
}
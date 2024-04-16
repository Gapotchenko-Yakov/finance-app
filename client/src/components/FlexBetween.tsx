import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

type Props = object;

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;

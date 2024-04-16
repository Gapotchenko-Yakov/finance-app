import { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

type Props = object;

const Navbar = (props: Props) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    ></Box>
  );
};

export default Navbar;

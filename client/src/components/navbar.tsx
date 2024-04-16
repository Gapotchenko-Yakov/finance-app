import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { Pix as PixIcon } from "@mui/icons-material";

type Props = object;

type NavigationOptions = "dashboard" | "predictions";

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState<NavigationOptions>("dashboard");

  return (
    <FlexBetween
      sx={{ mb: "0.25rem", p: "0.5rem 0rem", color: palette.grey[300] }}
    >
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize={16}>
          Finanseer
        </Typography>
      </FlexBetween>
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Button
            component={RouterLink}
            to="/"
            onClick={() => setSelected("dashboard")}
            sx={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
            }}
          >
            Dashboard
          </Button>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Button
            component={RouterLink}
            to="/predictions"
            onClick={() => setSelected("predictions")}
            sx={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
            }}
          >
            Predictions
          </Button>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;

import { useMemo } from "react";
import { themeSettings } from "./theme";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/navbar";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" p="1rem 2rem 4rem 2rem">
            <Routes>
              <Route path="/" element={<div>Dashboard Page</div>} />
              <Route path="/prediction" element={<div>Prediction Page</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

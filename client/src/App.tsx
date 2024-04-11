import { useMemo } from "react";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        App
      </ThemeProvider>
    </div>
  );
}

export default App;

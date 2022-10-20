import "./App.css";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import { LessonList } from "./lessons/index";
import HomePage from "./home_page/HomePage";
import { useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../domain/Theme";
import { createTheme, PaletteMode } from "@mui/material";
import { Colorcontext } from "../domain/ColorContext";
import Paper from "@mui/material/Paper";
import { UserList } from "./users";

function App() {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(mode === "light" ? lightTheme : darkTheme), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Paper className="app" elevation={0}>
        <Colorcontext.Provider value={colorMode}>
          <Header />
        </Colorcontext.Provider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Lessons" element={<LessonList />} />
          <Route path="/Users" element={<UserList />} />
          <Route path="/SignIn" element={<></>} />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

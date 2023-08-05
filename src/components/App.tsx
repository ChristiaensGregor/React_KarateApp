import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../domain/Theme";
import { createTheme, PaletteMode } from "@mui/material";
import { Colorcontext } from "../domain/ColorContext";
import Paper from "@mui/material/Paper";
import Header from "./header/Header";
import HomePage from "./home_page/HomePage";
import Login from "./login/Login";
import { LessonList } from "./lessons/index";
import Register from "./register/Register";
import { RouteGuard } from "../domain/RouteGuard";

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
          <Route element={<RouteGuard />}>
            <Route path="/Lessons" element={<LessonList />} />
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import React, { useMemo, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, PaletteMode } from "@mui/material";
import Paper from "@mui/material/Paper";
import { darkTheme, lightTheme } from "../domain/Theme.tsx";
import { Colorcontext } from "../domain/ColorContext.tsx";
import Header from "./header/Header.tsx";
import HomePage from "./home_page/HomePage.tsx";
import Login from "./login/Login.tsx";
import LessonList from "./lessons/lesson_list/LessonList.tsx";
import Register from "./register/Register.tsx";
import RouteGuard from "../domain/RouteGuard.tsx";

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
      <Paper
        className="app"
        elevation={0}
      >
        <Colorcontext.Provider value={colorMode}>
          <Header />
        </Colorcontext.Provider>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route element={<RouteGuard />}>
            <Route
              path="/Lessons"
              element={<LessonList />}
            />
          </Route>
          <Route
            path="/Login"
            element={<Login />}
          />
          <Route
            path="/Register"
            element={<Register />}
          />
          <Route
            path="/*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

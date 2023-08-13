import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "./FireBaseConfig.tsx";

const useAuth = (): boolean => auth !== null && auth.currentUser !== null;

export default function RouteGuard() {
  // Optionally return the <Login/> Component directly but then the url will not match.
  return useAuth() ? <Outlet /> : <Navigate to="/Login" />;
}

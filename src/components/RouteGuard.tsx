import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../domain/FireBaseConfig";

const useAuth = (): boolean => {
  return auth !== null && auth.currentUser !== null;
};

export const RouteGuard = () => {
  //Optionally return the <Login/> Component directly but then the url will not match.
  return useAuth() ? <Outlet /> : <Navigate to="/login" />;
};

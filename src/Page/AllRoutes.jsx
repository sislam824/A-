import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AuthForm from "../components/Auth";
import PrivateRoute from "../components/PrivateRoute";
import Dashboard from "./Dashboard";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<AuthForm />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;

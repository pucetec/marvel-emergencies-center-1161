import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Emergencies from "../pages/Emergencies/Emergencies";
import Login from "../pages/Login/Login";
import { useAuth } from "../contexts/AuthContext/AuthContext";



export const AppRouter = () => {
  const { currentUser } = useAuth();
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/emergencies" element={<RequireAuth><Emergencies /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
  );
}
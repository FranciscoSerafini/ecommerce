import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Navigation/Nav";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home";
import LoginForm from "./Login/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState(null);

  //// Función para manejar el inicio de sesión
  //const handleLogin = async ({ email, password }) => {
  //  try {
  //    const response = await fetch("http://localhost:3333/api/user/login", {
  //      method: "POST",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify({ email, password }),
  //    });
  //    if (!response.ok) {
  //      throw new Error("Login failed");
  //    }
  //    const data = await response.json();
  //    // Guardar token en localStorage o en el estado
  //    localStorage.setItem("token", data.token);
  //    setUser(data); // Guardar información del usuario
  //    setIsLoggedIn(true); // Establecer el estado de inicio de sesión
  //  } catch (error) {
  //    console.error("Login error:", error.message);
  //    // Manejo de errores de inicio de sesión
  //  }
  //};


  // Verificar el token al cargar la aplicación
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Aquí podrías verificar el token con el backend si es necesario
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

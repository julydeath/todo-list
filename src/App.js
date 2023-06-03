import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TodoInput from "./components/TodoInput";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./components/auth/UserAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import { useUserAuth } from "./components/auth/UserAuth";

function App() {
  const { user } = useUserAuth();
  return (
    <div>
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/todo"
            element={
              <ProtectedRoute user={user}>
                <TodoInput />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;

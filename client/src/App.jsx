import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/UsersPage/LoginPage";
import Register from "./pages/UsersPage/RegisterPage";
import Tasks from "./pages/TasksPage/Tasks";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/tasks"
            element={isAuthenticated ? <Tasks /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/tasks" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

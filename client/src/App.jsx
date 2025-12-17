import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AuthContext from "./context/authContext";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <Routes>
          <Route path="/" element={<Navigate to="/admin-dashboard" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard/*" element={
            <PrivateRoutes>
              <AdminDashboard />
            </PrivateRoutes>
          } />
        </Routes>
      </AuthContext>
    </BrowserRouter>
  );
}

export default App;

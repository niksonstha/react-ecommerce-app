import { Box } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./private/ProtectedRoute";

function App() {
  const location = useLocation();

  return (
    <Box>
      {!["/login", "/register"].includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomeScreen />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;

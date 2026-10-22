import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Ideas from "./pages/Ideas/Ideas";
import AI from "./pages/AI/AI";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import DesignSystem from "./pages/DesignSystem/DesignSystem";
import AdsDemoPage from "./pages/AdsDemo/AdsDemoPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/ideias" element={<Ideas />} />
        <Route path="/ia" element={<AI />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/configuracoes" element={<Settings />} />
        <Route path="/ads-demo" element={<AdsDemoPage />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

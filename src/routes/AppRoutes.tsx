import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import RegisterPartners from "../pages/Register/RegisterPartners";
import RegisterProcesses from "../pages/Register/RegisterProcesses";
import RegisterVans from "../pages/Register/RegisterVans";
import MenuLayout from "../shared/layouts/MenuLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route path="/cadastro" element={<Register />}>
          <Route path="vans" element={<RegisterVans />} />
          <Route path="parceiros" element={<RegisterPartners />} />
          <Route path="processos" element={<RegisterProcesses />} />
        </Route>
      </Route>
    </Routes>
  );
}

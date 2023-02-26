import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Partners from "../pages/Partners";
import Processes from "../pages/Processes";
import NewPartner from "../pages/Partners/NewPartner";
import MenuLayout from "../shared/layouts/MenuLayout";
import PageLayout from "../shared/layouts/PageLayout";
import NewProcess from "../pages/Processes/NewProcess";
import Login from "../pages/Login";
import AzureRedirect from "../pages/AzureRedirect";
import Van from "../pages/Van";
import NewVan from "../pages/Van/NewVan";
import EditPartner from "../pages/Partners/EditPartner";

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<MenuLayout />}> */}
      <Route path="/login" element={<Login />} />
      <Route element={<MenuLayout />}>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="parceiros/*" element={<Partners />} />
          <Route path="parceiros/:id" element={<EditPartner />} />
          <Route path="parceiros/novoparceiro" element={<NewPartner />} />
          <Route path="processos/*" element={<Processes />} />
          <Route path="processos/novoprocesso" element={<NewProcess />} />
          <Route path="van/*" element={<Van />} />
          <Route path="van/novavan" element={<NewVan />} />
        </Route>
      </Route>
    </Routes>
  );
}

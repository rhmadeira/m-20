import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Partners from "../pages/Partners";
import Processes from "../pages/Processes";
import NewPartner from "../pages/Partners/NewPartner";
import MenuLayout from "../shared/layouts/MenuLayout";
import PageLayout from "../shared/layouts/PageLayout";
import NewProcess from "../pages/Processes/NewProcess";
import Van from "../pages/Van";
import NewVan from "../pages/Van/NewVan";
import EditPartner from "../pages/Partners/EditPartner";
import { useContext } from "react";
import { AuthContext } from "../shared/context/AuthContext";
import LoginCallback from "../pages/LoginCallback";
import EditProcess from "../pages/Processes/EditProcess";

export default function AppRoutes() {
  const { token, permissions } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/login-callback" element={<LoginCallback />} />
      {token && permissions.length > 0 && (
        <Route element={<MenuLayout />}>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="parceiros/*" element={<Partners />} />
            <Route path="parceiros/:id" element={<EditPartner />} />
            <Route path="parceiros/novoparceiro" element={<NewPartner />} />
            <Route path="processos/*" element={<Processes />} />
            <Route path="processos/:id" element={<EditProcess />} />
            <Route path="processos/novoprocesso/:id" element={<NewProcess />} />
            <Route path="van/*" element={<Van />} />
          </Route>
        </Route>
      )}
    </Routes>
  );
}

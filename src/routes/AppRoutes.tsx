import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Partners from "../pages/Partners";
import Processes from "../pages/Processes";
import NewPartner from "../pages/Partners/NewPartner";
import Vans from "../pages/Vans";
import MenuLayout from "../shared/layouts/MenuLayout";
import PageLayout from "../shared/layouts/PageLayout";
import NewProcess from "../pages/Processes/NewProcess";
import NewVans from "../pages/Vans/NewVans";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="parceiros/*" element={<Partners />} />
          <Route path="parceiros/novoparceiro" element={<NewPartner />} />
          <Route path="processos/*" element={<Processes />} />
          <Route path="processos/novoprocesso" element={<NewProcess />} />
          <Route path="vans/*" element={<Vans />} />
          <Route path="vans/novavans" element={<NewVans />} />
        </Route>
      </Route>
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MenuLayout from "../shared/layouts/MenuLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

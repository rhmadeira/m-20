import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PageLayout from "../../shared/layouts/PageLayout";

export default function Register() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}

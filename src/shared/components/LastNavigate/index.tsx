import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Icon, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LastNavigate() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs translate="yes" aria-label="breadcrumb">
        <Link
          underline="hover"
          fontSize={smDown ? theme.spacing(1.5) : theme.spacing(2)}
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <Icon sx={{ mr: 0.5 }} fontSize="inherit">
            home
          </Icon>
          Menu rápido
        </Link>
      </Breadcrumbs>
    </div>
  );
}

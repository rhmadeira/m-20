import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Icon, useMediaQuery, useTheme } from "@mui/material";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function LastNavigate() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
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
          Home
        </Link>
      </Breadcrumbs>
    </div>
  );
}

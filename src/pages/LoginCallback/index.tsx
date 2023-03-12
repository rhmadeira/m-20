import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import JwtDecode from "jwt-decode";

import "./styles.css";
import { Box, Grid, Typography } from "@mui/material";
import { Cached } from "@mui/icons-material";
import { AuthContext } from "../../shared/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogoGrande } from "../../shared/components/Logo";

const STORE = {
  jwt: "jwtSecurityToken",
  permissions: "permissions",
  name: "name",
  unique_name: "unique_name",
} as const;

const LoginCallback: React.FC = () => {
  const { setToken, setPermissions } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    var urlReturn = queryParams.get("url_return") as string;
    var accessToken = queryParams.get("access_token");

    if (accessToken) {
      const { permission, name, unique_name } = JwtDecode<any>(
        `Bearer ${accessToken}`
      );

      localStorage.setItem(STORE.jwt, accessToken);
      localStorage.setItem(STORE.permissions, JSON.stringify(permission));
      localStorage.setItem(STORE.name, name);
      localStorage.setItem(STORE.unique_name, unique_name);

      setToken(accessToken);
      setPermissions(permission);

      setTimeout(() => (urlReturn ? navigate(urlReturn) : navigate("/")), 1000);
    }
  }, []);

  return (
    <Box
      component="form"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      zIndex="tooltip"
    >
      <Box width="400px">
        <Box padding="30px" margin="0">
          <Box>
            <LogoGrande className="containerLogo" width="100" height="50" />
          </Box>
          <Box display="flex" gap={3}>
            <Grid className="icon_container">
              <Cached fontSize="large" className="icon_loop" />
            </Grid>
            <Typography variant="h6">Estamos te redirecionando.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginCallback;

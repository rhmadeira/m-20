import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./SideBar";
import { useDrawerContext } from "../../context/ContextDrawer";
import Logo from "../../../assets/vectorSec.svg";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Tooltip } from "@mui/material";

export default function Bar() {
  const { toggleDrawerOpen } = useDrawerContext();
  const authContext = useContext(AuthContext);
  function logout(): void {
    setTimeout(() => {
      localStorage.clear();
      authContext.setToken("");
      authContext.setPermissions("");

      const baseUrl = import.meta.env.VITE_API_IDENTITY_BASE_URL;
      window.location.href = `${baseUrl}/login?url_callback=${origin}/login-callback`;
    }, 1000);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={1}>
        <Toolbar>
          <Box
            display="flex"
            width="100%"
            margin="0 auto"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Tooltip title="Menu">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Box component={Link} to="/">
                <img src={Logo} width={40} alt="" />
              </Box>
            </Box>
            <Tooltip title="Sair">
              <IconButton onClick={logout}>
                <Icon>logout</Icon>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar />
    </Box>
  );
}

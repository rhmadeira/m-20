import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./SideBar";
import { useDrawerContext } from "../../context/ContextDrawer";
import Logo from "../../../assets/millenium.svg";
import Icon from "@mui/material/Icon";

export default function Bar() {
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={1}>
        <Toolbar>
          <Box
            display="flex"
            width="1200px"
            margin="0 auto"
            alignItems="center"
            justifyContent="space-between"
          >
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
            <Box sx={{ flexGrow: 1 }}>
              <img src={Logo} width={128} alt="" />
            </Box>
            <IconButton>
              <Icon>logout</Icon>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar />
    </Box>
  );
}

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import LastNavigate from "../../components/LastNavigate";

export default function PageLayout() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      height="100vh"
      component="main"
      bgcolor={theme.palette.secondary.light}
      boxSizing="border-box"
      paddingTop={smDown ? theme.spacing(7) : theme.spacing(8)}
      overflow="auto"
    >
      <Box overflow="auto" flex="1" padding={smDown ? "10px" : "10px 20px"}>
        <Outlet />
      </Box>
    </Box>
  );
}

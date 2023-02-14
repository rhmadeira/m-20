import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import LastNavigate from "../../components/LastNavigate";

export default function PageLayout() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      height="100%"
      maxWidth="1200px"
      margin="0 auto"
      component="main"
      bgcolor={theme.palette.secondary.light}
      boxSizing="border-box"
      paddingTop={smDown ? theme.spacing(7) : theme.spacing(8)}
      overflow="auto"
    >
      <Box overflow="auto" flex="1" height="100%">
        <Box
          display="flex"
          alignItems="center"
          height={theme.spacing(4)}
          bgcolor="#ffffff"
        >
          <Box marginLeft={smDown ? theme.spacing(2) : theme.spacing(3)}>
            <LastNavigate />
          </Box>
        </Box>
        <Box overflow="auto" flex="1" height="100%" padding={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

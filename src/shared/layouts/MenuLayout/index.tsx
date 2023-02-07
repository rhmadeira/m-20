import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Bar from "../../components/Bar";

export default function DefaultLayout() {
  const theme = useTheme();
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      bgcolor={theme.palette.background.default}
      boxSizing="border-box"
    >
      <Bar />
      <Box height="100vh">
        <Outlet />
      </Box>
    </Box>
  );
}

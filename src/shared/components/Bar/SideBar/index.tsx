import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { useDrawerContext } from "../../../context/ContextDrawer";
import { OptionsLink } from "./OptionsLink";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  isOpenSideBar?: boolean;
  setIsOpenSidebar?: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpenSideBar, setIsOpenSidebar }: IProps) {
  const theme = useTheme();
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <div>
      <React.Fragment>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawerOpen}>
          <Box
            width={theme.spacing(24)}
            height="100%"
            display="flex"
            flexDirection="column"
            bgcolor={theme.palette.primary.dark}
            color={theme.palette.secondary.contrastText}
          >
            <Box display="flex" flexDirection="column" flex={1}>
              <Box marginLeft={2} marginTop={6}>
                <Typography variant="h6">Cadastros</Typography>
              </Box>
              <Box>
                <OptionsLink
                  label="Parceiros"
                  icon="people"
                  to="cadastro/parceiros"
                />
                <OptionsLink
                  label="Vans"
                  icon="assignment"
                  to="cadastro/vans"
                />
                <OptionsLink
                  label="Processos"
                  icon="account_tree"
                  to="cadastro/processos"
                />
              </Box>
              <Divider />
            </Box>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

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
  const admin = true;

  return (
    <div>
      <React.Fragment>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawerOpen}>
          <Box
            width={theme.spacing(35)}
            height="100%"
            display="flex"
            flexDirection="column"
            bgcolor={theme.palette.primary.dark}
            color={theme.palette.secondary.contrastText}
          >
            <Box display="flex" flexDirection="column" flex={1}>
              <Box marginLeft={2} marginTop={6}>
                <Typography variant="body1">
                  CONSULTA{" "}
                  <span style={{ display: admin ? "inline" : "none" }}>
                    {" "}
                    / CADASTRO
                  </span>
                </Typography>
              </Box>
              <Box>
                <OptionsLink
                  label="Parceiros | Processos"
                  icon="people"
                  to="parceiros"
                />
                <OptionsLink label="Van" icon="assignment" to="van" />
                <OptionsLink label="Retorno" icon="call_split" to="retorno" />
              </Box>
              <Divider />

              <Box marginLeft={2} marginTop={2}>
                <Typography variant="body1">CONFIGURAÇÕES:</Typography>
              </Box>
              <Box>
                <OptionsLink
                  label="Quant. Max. Produtos"
                  icon="inventory"
                  to="/"
                />
                <OptionsLink
                  label="Prazo fixo por Clientes"
                  icon="pending_actions"
                  to="/"
                />
              </Box>
            </Box>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { useDrawerContext } from "../../../context/ContextDrawer";
import { OptionsLink } from "./OptionsLink";
import { useTheme } from "@mui/material";

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
            width={theme.spacing(28)}
            height="100%"
            display="flex"
            flexDirection="column"
            bgcolor={theme.palette.primary.dark}
            color={theme.palette.secondary.contrastText}
          >
            <Box flex={1}>
              <OptionsLink label="Parceiros" icon="person" to="parceiros" />
            </Box>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

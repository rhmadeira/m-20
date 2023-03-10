import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useDrawerContext } from "../../../../context/ContextDrawer";

interface IOptionsDrawerProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  onClick?: () => void | undefined;
}

export function OptionsLink({ to, icon, label, onClick }: IOptionsDrawerProps) {
  const navigate = useNavigate();
  const { toggleDrawerOpen } = useDrawerContext();

  const resolverPath = useResolvedPath(to);
  const match = useMatch({ path: resolverPath.pathname, end: false });

  const handleClick = () => {
    onClick?.();
    navigate(to);
    toggleDrawerOpen();
  };
  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon color="primary">{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}

import { Box, useTheme } from "@mui/material";
import Icon from "@mui/material/Icon";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface ICardToolProps {
  title: string;
  icon: string;
  construction?: boolean;
  icon2?: "add" | "search";
  to: string;
  colorBgIcon: "green300" | "green500" | "blue200" | "blue400";
}

export default function CardTool({
  title,
  icon,
  icon2,
  to,
  colorBgIcon,
  construction: construction = false,
}: ICardToolProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  function handleClickCard() {
    navigate(to);
  }
  return (
    <Box
      component={Paper}
      width={200}
      height={110}
      display="flex"
      bgcolor={theme.palette.background.default}
      position="relative"
      border="5px"
      onClick={handleClickCard}
      sx={{
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
          color: "white",
        },
      }}
    >
      <Box
        width="80px"
        height="80px"
        bgcolor={
          colorBgIcon === "green500"
            ? "#007863"
            : colorBgIcon === "green300"
            ? "#4fbfa5"
            : colorBgIcon === "blue200"
            ? "#52a7df"
            : "#086aad"
        }
        position="absolute"
        top="-20px"
        left="10px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        borderRadius="5px"
      >
        <Icon color="primary" fontSize="large">
          {icon}
        </Icon>
      </Box>
      <Box position="absolute" top="70px" left="10px">
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box position="absolute" left="140px" top="10px">
        <Icon fontSize="large">{icon2}</Icon>
      </Box>
      {construction && (
        <Box position="absolute" top="75px" right="10px">
          <Icon color="error">construction</Icon>
        </Box>
      )}
    </Box>
  );
}

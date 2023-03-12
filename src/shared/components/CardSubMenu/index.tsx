import {
  Box,
  Icon,
  Paper,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const OutSide = styled(Box)({
  /* Estilos da div de fora */
  "&:hover > .InSide": {
    /* Mudanças na div de dentro quando a div de fora é hoverada */
  },
});
const inSide = {
  // backgroundColor: "white",
};

interface ICardSubMenu {
  title: string;
  text: string;
  path: string;
  borderColor: string;
  icon?: string;
  construction?: boolean;
}

export default function CardSubMenu({
  title,
  borderColor,
  text,
  path,
  icon,
  construction: construction = false,
}: ICardSubMenu) {
  const navigate = useNavigate();
  function handleClickCard() {
    navigate(path);
  }
  return (
    <Box
      component={Paper}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap={2}
      padding={1}
      width="260px"
      height="140px"
      borderLeft={`4px solid ${borderColor}`}
      onClick={handleClickCard}
      sx={{
        position: "relative",

        cursor: "pointer",
        overflow: "hidden",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          // color: "white",
          transform: "translateY(-5px)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        },

        "&:hover::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // backgroundColor: `${borderColor}`,
          transition: "all 0.5s ease",
          zIndex: 1,
          animation: "grow 0.3s forwards",
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" zIndex={2}>
        <Typography fontWeight="500" fontSize="1.3rem">
          {title}
        </Typography>
        {construction && (
          <Tooltip title="Em construção">
            <Typography>
              <Icon color="error">construction</Icon>
            </Typography>
          </Tooltip>
        )}
      </Box>
      <Box zIndex={2}>{text}</Box>
      {/* <Box alignSelf="end">
        <Icon>call_split</Icon>
      </Box> */}
      <Box
        width="40px"
        height="40px"
        bgcolor={borderColor}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        borderRadius="5px"
        alignSelf="end"
        zIndex={2}
        sx={inSide}
      >
        <Icon color="primary" fontSize="medium">
          {icon}
        </Icon>
      </Box>
    </Box>
  );
}

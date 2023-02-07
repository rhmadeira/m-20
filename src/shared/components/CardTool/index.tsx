import { Box, useTheme } from "@mui/material";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface ICardToolProps {
  title: string;
}

export default function CardTool({ title }: ICardToolProps) {
  const theme = useTheme();
  return (
    <Box
      component={Paper}
      width={120}
      height={120}
      border="2px dashed grey"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor={theme.palette.background.default}
    >
      <Typography variant="h6">{title}</Typography>
      <IconButton size="medium">
        <Icon fontSize="large">add</Icon>
      </IconButton>
    </Box>
  );
}

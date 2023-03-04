import { Box, Button, Theme, useMediaQuery } from "@mui/material";
import Icon from "@mui/material/Icon";

interface IGroupButtonTool {
  showSearch?: boolean;
  textBottomAdd?: string;
  handleButtonNew?: () => void;
  handleButtonRefresh?: () => void;
  handleButtonGenerateSpreadsheet?: () => void;
}

export function GroupButtonTool({
  textBottomAdd = "Buscar",
  handleButtonNew,
  handleButtonRefresh,
  handleButtonGenerateSpreadsheet,
}: IGroupButtonTool) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" gap={1}>
        <Button
          size={mdDown ? "small" : "medium"}
          variant="outlined"
          color="secondary"
          disableElevation
          onClick={handleButtonNew}
          endIcon={<Icon>add</Icon>}
        >
          {textBottomAdd}
        </Button>
        <Button
          size={mdDown ? "small" : "medium"}
          variant="outlined"
          color="secondary"
          disableElevation
          onClick={handleButtonRefresh}
          endIcon={<Icon>refresh</Icon>}
        >
          Atualizar
        </Button>
        <Button
          size={mdDown ? "small" : "medium"}
          variant="outlined"
          color="secondary"
          disableElevation
          onClick={handleButtonGenerateSpreadsheet}
          endIcon={<Icon fontSize="inherit">receipt_long</Icon>}
        >
          planilha
        </Button>
      </Box>
    </Box>
  );
}

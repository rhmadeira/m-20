import { Box, Button, Theme, useMediaQuery } from "@mui/material";
import Icon from "@mui/material/Icon";

interface IGroupButtonTool {
  showSearch?: boolean;
  textBottomAdd?: string;
  showButtonAdd?: boolean;
  showButtonGenerateSpreadsheet?: boolean;
  handleButtonNew?: () => void;
  handleButtonRefresh?: () => void;
  handleButtonGenerateSpreadsheet?: () => void;
}

export function GroupButtonTool({
  textBottomAdd = "add",
  handleButtonNew,
  handleButtonRefresh,
  showButtonAdd = true,
  showButtonGenerateSpreadsheet = false,
  handleButtonGenerateSpreadsheet,
}: IGroupButtonTool) {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" gap={1}>
        {showButtonAdd && (
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
        )}
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
        {showButtonGenerateSpreadsheet && (
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
        )}
      </Box>
    </Box>
  );
}

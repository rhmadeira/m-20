import {
  Box,
  Button,
  Paper,
  TextField,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Icon from "@mui/material/Icon";

interface IListingToolProps {
  textSearch?: string;
  showSearch?: boolean;
  textBottomAdd?: string;
  showBottom?: boolean;
  handleButtonNew?: () => void;
  handleButtonRefresh?: () => void;
  handleButtonGenerateSpreadsheet?: () => void;
  handleButtonSearch?: () => void;
  handleTextSearch?: (text: string) => void;
}

export function ListingTool({
  textSearch = "",
  textBottomAdd = "Buscar",
  handleButtonNew,
  handleButtonRefresh,
  handleButtonGenerateSpreadsheet,
  handleButtonSearch,
  handleTextSearch,
}: IListingToolProps) {
  const theme = useTheme();
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box
      component={Paper}
      display="flex"
      alignItems="center"
      padding={1}
      height={theme.spacing(7)}
    >
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
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        flex={1}
        justifyContent="end"
      >
        <TextField
          size="small"
          variant="standard"
          color="secondary"
          placeholder="Pesquisar"
          value={textSearch}
          onChange={(e) => handleTextSearch?.(e.target.value)}
        />
        <Button
          variant="contained"
          size={mdDown ? "small" : "medium"}
          color="secondary"
          disableElevation
          onClick={handleButtonSearch}
          endIcon={<Icon>search</Icon>}
        >
          Buscar
        </Button>
      </Box>
    </Box>
  );
}

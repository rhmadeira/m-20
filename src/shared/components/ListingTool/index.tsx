import { Box, Button, Paper, TextField, useTheme } from "@mui/material";
import Icon from "@mui/material/Icon";

interface IListingToolProps {
  textSearch?: string;
  showSearch?: boolean;
  handleTextSearch?: (text: string) => void;
  textBottomAdd?: string;
  showBottom?: boolean;
  handleClickBottom?: () => void;
}

export function ListingTool({
  textSearch = "",
  handleTextSearch,
  textBottomAdd = "Buscar",
  handleClickBottom,
}: IListingToolProps) {
  const theme = useTheme();
  return (
    <Box
      component={Paper}
      display="flex"
      alignItems="center"
      padding={1}
      // gap={1}
      // marginX={1}
      // padding={1}
      // paddingX={2}
      height={theme.spacing(5)}
    >
      <Box display="flex" gap={1}>
        <Button
          variant="outlined"
          color="secondary"
          disableElevation
          endIcon={<Icon>add</Icon>}
        >
          {textBottomAdd}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          disableElevation
          endIcon={<Icon>refresh</Icon>}
        >
          Atualizar
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          disableElevation
          endIcon={<Icon>save</Icon>}
        >
          Gerar planilha
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
          variant="outlined"
          color="secondary"
          placeholder="Pesquisar"
          value={textSearch}
          onChange={(e) => handleTextSearch?.(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          endIcon={<Icon>search</Icon>}
        >
          Buscar
        </Button>
      </Box>
    </Box>
  );
}

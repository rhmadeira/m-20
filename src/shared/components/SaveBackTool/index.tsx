import { Box, Button, Icon } from "@mui/material";

interface ISaveBackTool {
  handleBack: () => void;
  handleSave?: () => void;
}

export default function SaveBackTool({
  handleBack,
  handleSave,
}: ISaveBackTool) {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Box>
        <Button
          startIcon={<Icon>arrow_left</Icon>}
          variant="contained"
          color="info"
          onClick={handleBack}
          type="button"
        >
          Voltar
        </Button>
      </Box>
      <Box>
        <Button
          startIcon={<Icon fontSize="small">save</Icon>}
          variant="contained"
          color="secondary"
          type="submit"
          onClick={handleSave}
        >
          Salvar
        </Button>
      </Box>
    </Box>
  );
}

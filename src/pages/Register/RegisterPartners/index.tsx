import { Box, Paper, useTheme } from "@mui/material";
import { ListingTool } from "../../../shared/components/ListingTool";
import PageLayout from "../../../shared/layouts/PageLayout";
import TableColapse from "./TableColapse";
import TablePartners from "./TablePartners";

export default function Partners() {
  const theme = useTheme();
  return (
    <PageLayout>
      <Box display="flex" flexDirection="column" gap={2} padding={3}>
        <ListingTool textBottomAdd="Adicionar parceiro" showSearch />
        <Box component={Paper} padding={3}>
          <TableColapse />
        </Box>
      </Box>
    </PageLayout>
  );
}

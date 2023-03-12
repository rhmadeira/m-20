import { Box } from "@mui/material";

interface IBoxForm {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
}

export default function BoxForm({ children, onSubmit }: IBoxForm) {
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      onSubmit={onSubmit}
      component="form"
      padding={2}
      gap={2}
    >
      {children}
    </Box>
  );
}

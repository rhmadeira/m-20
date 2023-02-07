import { Box, useTheme } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: IProps) {
  const theme = useTheme();

  return (
    <Box height="100%" component="main" padding={2}>
      {children}
    </Box>
  );
}

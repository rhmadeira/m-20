import { Box } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: IProps) {
  return (
    <Box height="100%" component="main">
      {children}
    </Box>
  );
}

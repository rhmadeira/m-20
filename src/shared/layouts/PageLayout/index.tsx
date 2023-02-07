import { Box, useTheme } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: IProps) {
  const theme = useTheme();

  return (
    <Box
      height="100%"
      maxWidth="1200px"
      margin="0 auto"
      component="main"
      bgcolor={theme.palette.secondary.light}
      boxSizing="border-box"
      paddingTop={theme.spacing(3)}
      overflow="auto"
    >
      {children}
    </Box>
  );
}

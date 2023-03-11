import { Box, Typography } from "@mui/material";

export default function CardTest() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "260px",
        height: "140px",
        backgroundColor: "#ccc",
        overflow: "hidden",
        "&:hover::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#0da3537d",
          transition: "all 0.5s ease",
          zIndex: 1,
          animation: "grow 0.3s forwards",
        },
      }}
    >
      <Typography
        sx={{
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
          transition: "transform 0.3s",
          zIndex: 2,
          "&hover": {
            translate: "translateX(-100%)",
          },
        }}
      >
        Div 1
      </Typography>
    </Box>
  );
}

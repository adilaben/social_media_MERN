import { useTheme } from "@emotion/react";
import { Box, Button } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/aadila-bendahou/", "_blank");
  };
  return (
    <Box
      backgroundColor={alt}
      display="flex"
      justifyContent="center"
      padding="1rem"
    >
      2023 &copy;&nbsp; &nbsp;
      <Button style={{ padding: "0" }} onClick={handleClick}>
        Aâdila Bendahou
      </Button>
      .
    </Box>
  );
};

export default Footer;

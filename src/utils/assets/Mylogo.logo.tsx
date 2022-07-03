import Box from "@mui/material/Box";
import React, { useState } from "react";
import Mylogo from "./logotemp.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const AvarileLogo = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const theme = useTheme();
  const { mode } = theme.palette;
  console.log(mode);

  return (
    <>
      <Box
        component={"img"}
        src={Mylogo}
        height={1}
        width={1}
        sx={{
          transition: "1s",
          borderRadius: "0 4px 0 4px",
          boxShadow: hovered ? "2px 2px 0px 2px black" : "1px 1px 0px 1px black",
          filter: `${mode === "light" ? "invert(0%)" : "invert(100%)"}`,
        }}
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onClick={() => {
          navigate("/");
        }}
      />
    </>
  );
};

export default AvarileLogo;

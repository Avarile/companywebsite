import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import gordon from "utils/assets/gordon.jpg";
import boxhill from "utils/assets/boxhill.svg";
import helomsglen from "utils/assets/helomsglen.png";
import laTrobe from "utils/assets/La-trobe.png";
import vicUni from "utils/assets/vicUniversity.png";

const Community = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
          }}
          gutterBottom
          color={"text.primary"}
          fontWeight="700"
          align={"center"}>
          合作院校及律所
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent={"center"}>
        {[gordon, boxhill, laTrobe, helomsglen, vicUni].map((item, i) => (
          <Box maxWidth={90} marginTop={2} marginRight={4} key={i}>
            <Box
              component="img"
              height={"40px"}
              width={1}
              src={item}
              alt="..."
              sx={{
                filter: theme.palette.mode === "dark" ? "brightness(0) invert(0.7)" : "none",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Community;

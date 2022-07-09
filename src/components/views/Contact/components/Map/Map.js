/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

const Map = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box marginBottom={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}>
            欢迎致电我们
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={"text.secondary"}>
            您可以通过电话或者邮件的方式与我们取得联系.
          </Typography>
        </Box>
      </Box>
      <Box marginY={3}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=15Seabird,pointcook,Melbourne&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{
            minHeight: 300,
            borderRadius: 8,
            filter: theme.palette.mode === "dark" ? "grayscale(0.5) opacity(0.7)" : "none",
          }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant={"body1"} gutterBottom sx={{ fontWeight: "medium" }}>
            Call us:
          </Typography>
          <Typography variant={"subtitle1"}>+61 481877127</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant={"body1"} gutterBottom sx={{ fontWeight: "medium" }}>
            Email us:
          </Typography>
          <Typography variant={"subtitle1"}>Avarile@gmail.com</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"body1"} gutterBottom sx={{ fontWeight: "medium" }}>
            Address: 15. Seabird Dr. PointCook. Melbourne. Victoria. Australia
          </Typography>
          <Typography variant={"subtitle1"}></Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Map;

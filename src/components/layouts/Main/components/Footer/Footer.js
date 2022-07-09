import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={1} flexDirection={{ xs: "column", sm: "row" }}>
          <Box display={"flex"} component="p" width={400}>
            {/* <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                  : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
              }
              height={1}
              width={1}
            /> */}
            <Typography height={1} width={1} color={"text.primary"} sx={{ textDecoration: "none", fontWeight: "700" }}></Typography>
          </Box>
          <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
            <Box marginTop={1}>
              <Link underline="none" component="a" href="/contact-Us" color="text.primary" variant={"subtitle2"}>
                新澳融信信息平台 -Nexus- Australia
              </Link>

              <Box marginTop={1} color={"text.primary"} fontSize={"15px"}>
                Address: 15. Seabird drive. Point Cook. Melbourne
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align={"center"} variant={"subtitle1"} color="text.secondary" gutterBottom>
          &copy; 2022 -Nexus- Australia Immigration Ltd. Alrights reserved
        </Typography>
        {/* <Typography align={"center"} variant={"caption"} color="text.secondary" component={"p"}>
         
        </Typography> */}
      </Grid>
    </Grid>
  );
};

export default Footer;

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import SchoolIcon from "@mui/icons-material/School";
import { useTheme } from "@mui/material/styles";

const Locations = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={"center"} xs={12} md={6}>
          <Box>
            <Box marginBottom={2}>
              <Typography variant={"p"} sx={{ fontWeight: 400 }} gutterBottom>
                是澳大利亚唯一全方位留学和移民服务机构。由澳大利亚持牌留学顾问、澳大利亚注册移民代理、澳大利亚联邦最高法院律师、澳大利亚太平绅士和澳大利亚官方三级翻译等专业人士组成。我们自2015年成立至今，在教育，移民，法律以及本地配套服务方面以专业和权威著称，为数万名澳大利亚境内外人士提供了卓越的服务。
              </Typography>

              <Typography color="text.secondary" sx={{ marginTop: "15px" }}>
                我们的留学顾问均已定居澳洲多年，熟悉澳大利亚的各院校招生细则以及选择技巧，与澳大利亚境内各知名大学一直保持着密切的联系，长期与各高校招生部共同工作，深刻了解澳大利亚高等学府的入学条件和要求。
              </Typography>
            </Box>
            <Grid container spacing={1}>
              {["La Trobe", "Monash Institute", "Gordon University", "Victoria University", "Korgan University", "Boxhill Institute"].map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Box component={ListItem} disableGutters width={"auto"} padding={0}>
                    <Box component={ListItemAvatar} minWidth={"auto !important"} marginRight={2}>
                      <Box component={Avatar} bgcolor={mode === "light" ? "black" : "white"} width={20} height={20}>
                        <SchoolIcon />
                      </Box>
                    </Box>
                    <ListItemText primary={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height={1} width={1} display={"flex"} flexDirection={"column"}>
            <Box
              component={"img"}
              src={"https://assets.maccarianagency.com/backgrounds/img1.jpg"}
              alt="..."
              width={160}
              height={160}
              marginLeft={"calc(60% - 160px)"}
              zIndex={3}
              borderRadius={"100%"}
              boxShadow={4}
              data-aos={"fade-up"}
              sx={{
                objectFit: "cover",
                filter: theme.palette.mode === "dark" ? "brightness(0.5)" : "none",
              }}
            />
            <Box
              component={"img"}
              width={200}
              height={200}
              src={"https://assets.maccarianagency.com/backgrounds/img2.jpg"}
              alt="..."
              marginTop={"-8%"}
              zIndex={2}
              borderRadius={"100%"}
              boxShadow={4}
              data-aos={"fade-up"}
              sx={{
                objectFit: "cover",
                filter: theme.palette.mode === "dark" ? "brightness(0.5)" : "none",
              }}
            />
            <Box
              component={"img"}
              width={300}
              height={300}
              src={"https://assets.maccarianagency.com/backgrounds/img4.jpg"}
              alt="..."
              marginTop={"-20%"}
              marginLeft={"calc(100% - 300px)"}
              zIndex={1}
              borderRadius={"100%"}
              boxShadow={4}
              data-aos={"fade-up"}
              sx={{
                objectFit: "cover",
                filter: theme.palette.mode === "dark" ? "brightness(0.5)" : "none",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Locations;

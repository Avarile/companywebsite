import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import Main from "components/layouts/Main";
import Container from "components/Container";
import { BlogContent, HeroFullPic, Contact } from "components/views";

import heroBcg from "utils/assets/Beautiful/MelbourneCity.webp";

const HeroData = {
  backgroundImg: heroBcg,
  mainTitle: "勤工简学签证",
  subTitle: "申请要求和流程详解",
};

const WorkStudyVisa = () => {
  const theme = useTheme();
  const [openBottombar, setOpenBottombar] = useState(false);

  const handleBottombarOpen = () => {
    setOpenBottombar(true);
  };

  const handleBottombarClose = () => {
    setOpenBottombar(false);
  };

  return (
    <Main colorInvert={true}>
      <HeroFullPic {...HeroData} />
      {/* @ts-ignore */}
      <Box bgcolor={theme.palette?.alternate?.main}></Box>
      <Container>
        <BlogContent />
      </Container>
      <Divider />

      {/* @ts-ignore */}
      <Box bgcolor={theme.palette?.alternate?.main}></Box>

      {/* @ts-ignore */}
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          background: "transparent",
          boxShadow: "none",
        }}>
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            margin: "0 auto",
            padding: theme.spacing(0, 2),
          }}>
          <IconButton
            sx={{
              position: "absolute",
              right: theme.spacing(3),
              left: "auto",
              top: theme.spacing(-3),
              background: theme.palette.primary.main,
              width: 55,
              height: 55,
              boxShadow: 4,
              "&:hover": {
                background: theme.palette.primary.dark,
              },
            }}
            onClick={handleBottombarOpen}>
            <Box component={"svg"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24} color={theme.palette.common.white}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </Box>
          </IconButton>
          <Drawer anchor="bottom" open={openBottombar} onClose={handleBottombarClose}>
            <Container display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <IconButton
                sx={{
                  width: 48,
                  height: 48,
                  boxShadow: 4,
                  marginBottom: theme.spacing(4),
                }}
                onClick={handleBottombarClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </IconButton>
              <Contact />
            </Container>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Main>
  );
};

export default WorkStudyVisa;

import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Container from "components/Container";

const mock = [
  {
    title: 1000,
    subtitle: "1000 + 客户已经成功取得签证.",
    suffix: "+",
  },
  {
    title: 6,
    subtitle: "6年专业留学移民经验.",
    suffix: "+",
  },
  {
    title: 99,
    subtitle: "我们达到了99%以上的客户满意率.",
    suffix: "%",
  },
];

const MapHero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const LeftSide = () => {
    const [viewPortEntered, setViewPortEntered] = useState(false);
    const setViewPortVisibility = (isVisible) => {
      if (viewPortEntered) {
        return;
      }

      setViewPortEntered(isVisible);
    };

    return (
      <Box data-aos={isMd ? "fade-right" : "fade-up"}>
        <Box marginBottom={2}>
          <Typography variant={"h6"} sx={{ fontWeight: 700 }} gutterBottom>
            作为专业的移民团队，我们一直吧客户的满意放在第一位.
          </Typography>
          <Typography color="text.secondary">
            从业6年以来，我们一直结合实际情况为每一个客户提供.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid key={i} item xs={12} md={4}>
              <Typography variant="h3" gutterBottom>
                <Box fontWeight={600}>
                  <VisibilitySensor onChange={(isVisible) => setViewPortVisibility(isVisible)} delayedCall>
                    <CountUp duration={2} end={viewPortEntered ? item.title : 0} start={0} suffix={item.suffix} />
                  </VisibilitySensor>
                </Box>
              </Typography>
              <Typography color="text.secondary" component="p">
                {item.subtitle}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  const RightSide = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=15seabird,pointcook,Melbourne&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{
          minHeight: 300,
          filter: theme.palette.mode === "dark" ? "grayscale(0.5) opacity(0.7)" : "none",
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
      }}>
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} position={"relative"}>
          <Box width={1} order={{ xs: 2, md: 1 }}>
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 50%" },
              position: "relative",
              maxWidth: { xs: "100%", md: "50%" },
              order: { xs: 1, md: 2 },
            }}>
            <Box
              sx={{
                width: { xs: 1, md: "50vw" },
                height: "100%",
                position: "relative",
              }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}>
                <Box
                  sx={{
                    overflow: "hidden",
                    left: "0%",
                    width: 1,
                    height: 1,
                    position: { xs: "relative", md: "absolute" },
                  }}>
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default MapHero;

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import data from "./data";

const UniversityInfo = ({ UniName, UniIntro, starMajor, pic, theme }) => {
  return (
    <>
      <Box>
        <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
          <Box width={1} height={1} marginY={4}>
            <Typography variant={"h5"} align={"center"} color={"text.primary"} sx={{ fontWeight: 600, marginTop: 10, marginBottom: 5 }}>
              {UniName}
            </Typography>
            <LazyLoadImage
              height={"100%"}
              width={"100%"}
              src={pic}
              alt="Remote working"
              effect="blur"
              style={{
                filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
                objectFit: "cover",
                borderRadius: 8,
                width: "100%",
                height: "100%",
                maxHeight: 500,
              }}
            />
          </Box>
          {UniIntro.map((item, i) => {
            return (
              <Typography color={"text.primary"} sx={{ fontWeight: 500, marginTop: 1, marginBottom: 5, lineHeight: 2 }} key={i}>
                {item}
              </Typography>
            );
          })}
          <Typography sx={{ lineHeight: 2 }}>{starMajor}</Typography>
        </Box>
      </Box>
    </>
  );
};

const BlogContentUniversity = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      {data.map((item) => {
        return <UniversityInfo {...item} theme={theme} />;
      })}
    </Box>
  );
};

export default BlogContentUniversity;

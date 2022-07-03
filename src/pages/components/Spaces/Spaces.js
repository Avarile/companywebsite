import React from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

const mock = [
  {
    media: [
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img1.jpg",
        intro: "",
        link: "/news/1",
      },
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
        intro: "",
        link: "/news/2",
      },
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img24.jpg",
        intro: "",
        link: "/news/3",
      },
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img25.jpg",
        intro: "",
        link: "/news/4",
      },
    ],
    title: "相关新闻",
    subtitle: "Last Updates: 3/Jul/2022",
    users: "https://assets.maccarianagency.com/avatars/img1.jpg",
    link: "news/general",
  },
  {
    media: [
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
        intro: "",
        link: "/news/1",
      },
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img1.jpg",
        intro: "",
        link: "/news/2",
      },
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img24.jpg",
        intro: "",
        link: "/news/3",
      },
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img25.jpg",
        intro: "",
        link: "/news/4",
      },
    ],
    title: "最新政策",
    subtitle: "Last Updates: 3/Jul/2022",
    users: "https://assets.maccarianagency.com/avatars/img2.jpg",
    link: "news/policy",
  },
  {
    media: [
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img24.jpg",
        intro: "",
        link: "/news/1",
      },
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img3.jpg",
        intro: "",
        link: "/news/2",
      },
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img1.jpg",
        intro: "",
        link: "/news/3",
      },
      {
        pic: "https://assets.maccarianagency.com/backgrounds/img25.jpg",
        intro: "",
        link: "/news/4",
      },
    ],
    title: "澳洲生活",
    subtitle: "Last Updates: 3/Jul/2022",
    users: "https://assets.maccarianagency.com/avatars/img5.jpg",
    link: "/news/live-in-aus",
  },
];

const Spaces = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={"center"}
          data-aos={"fade-up"}
          gutterBottom
          sx={{
            fontWeight: 600,
          }}>
          相关新闻及移民政策详细解读.
        </Typography>
        <Typography variant="h6" align={"center"} color={"text.secondary"} data-aos={"fade-up"}>
          为您带来最新移民，留学及澳大利亚生活相关新闻.
          <br />
          为您对最新的482，199移民签证，以及半工半读签证和政策进行深度解读.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i} data-aos={"fade-up"} data-aos-delay={i * 100} data-aos-offset={100} data-aos-duration={600}>
            <Box
              display={"block"}
              width={1}
              height={1}
              sx={{
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}>
              <Box component={Card} width={1} height={1} display={"flex"} flexDirection={"column"} sx={{ backgroundImage: "none" }}>
                <CardMedia
                  title={item.title}
                  sx={{
                    position: "relative",
                    height: { xs: 240, sm: 340, md: 280 },
                    overflow: "hidden",
                    "& .slick-slide img": {
                      objectFit: "cover",
                    },
                    "& .slick-prev, & .slick-next": {
                      zIndex: 2,
                      top: 0,
                      bottom: "100%",
                      left: "100%",
                      right: 0,
                      transform: "translate(-100%, 50%)",
                      marginLeft: theme.spacing(-2),
                      width: 32,
                      height: 32,
                      "&:before": {
                        fontSize: theme.spacing(3),
                      },
                    },
                    "& .slick-prev": {
                      marginLeft: theme.spacing(-6),
                    },
                    "& .lazy-load-image-background.lazy-load-image-loaded": {
                      display: "flex !important",
                    },
                  }}>
                  <Slider {...sliderOpts}>
                    {item.media.map((img) => (
                      <Box key={img} component={LazyLoadImage} effect="blur" src={img.pic} height={{ xs: 240, sm: 340, md: 280 }} />
                    ))}
                  </Slider>
                  <Box
                    component={"svg"}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1920 100.1"
                    sx={{
                      width: "100%",
                      bottom: 0,
                      position: "absolute",
                    }}>
                    <path fill={theme.palette.background.default} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography variant={"h6"} gutterBottom sx={{ fontWeight: 700 }} align={"left"}>
                    {item.title}
                  </Typography>
                  <Typography align={"left"} variant={"subtitle2"} color="text.secondary">
                    {item.subtitle}
                  </Typography>
                  <Box marginTop={2} display={"flex"} justifyContent={"space-between"}>
                    <Avatar src={item.users} />

                    <Box display={"flex"} alignItems={"center"}>
                      <Typography variant="p" sx={{ fontWeight: 300 }}>
                        澳新融信独家推出
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <Box flexGrow={1} />
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Button>Learn more</Button>
                </CardActions>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Spaces;

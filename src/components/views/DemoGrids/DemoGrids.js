import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import universityService from "utils/assets/university-service.jpg";
import passportService from "utils/assets/passport-service.jpg";
import lawService from "utils/assets/law-service.jpg";
import workStudyService from "utils/assets/work_study-service.webp";

const mock = [
  {
    image: universityService,
    description: "- 全球免费申请澳洲院校，再享大学申请费豁免！ 由于澳大利亚已于近期放开大学工作时长限制，结合我们团队特有的全包式服务，为您在澳的学习生活降低成本，增添声明的宽度.",
    title: "留学服务",
    tags: [],
    author: {
      name: "Study in Australia",
      avatar: "",
    },
    link: "/study-in-australia/university/publication",
  },
  {
    image: passportService,
    description: "- 我们提供专业的离岸签证服务全包服务，可以帮助您从国内申请开始，一直到开始在澳大利亚正式读书以及合法打工，并会对您在澳大利亚开展正常生活提供足够的必要帮助.",
    title: "离岸签证服务",
    tags: [],
    author: {
      name: "为您的澳洲之旅提供全程护航",
      avatar: "",
    },
    link: "/service/passport-service",
  },
  {
    image: lawService,
    description: "- 我们合作的持牌移民律师为您的移民/留学之路提供最专业的保驾护航.",
    title: "法律服务",
    tags: ["UX", "Design", "Themes", "Photography"],
    author: {
      name: "法律支持和服务",
      avatar: "",
    },
    link: "/service/law-service",
  },
  {
    image: workStudyService,
    description: "- 最新的开放的澳大利亚半工半读，学生签最高获签率，大量打工机会，就业移民一条龙服务.",
    title: "澳大利亚半工半读",
    tags: ["UX", "Design", "Themes", "Photography"],
    author: {
      name: "最新学习打工移民通道",
      avatar: "",
    },
    link: "/study-in-australia/university/visa-service",
  },
];

const ServiceItem = (item, i) => {
  const [hovered, setHovered] = React.useState(false);
  const navigate = useNavigate();

  const theme = useTheme();
  return (
    <Grid
      item
      xs={12}
      key={item.title}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}>
      <Box
        component={Card}
        width={1}
        height={1}
        borderRadius={0}
        boxShadow={0}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        sx={{
          "&:hover": { color: "black", transition: "transform 0.3s", transform: hovered ? "scale(1.01)" : "none" },
          // boxShadow: hovered ? "5px 2px 2px 2px" : "0 0 0 0",
          bgcolor: "transparent",
          backgroundImage: "none",
          cursor: "pointer",
        }}>
        <Box
          sx={{
            width: { xs: 1, md: "30%" },
            "& .lazy-load-image-loaded": {
              height: 1,
              display: "flex !important",
            },
          }}>
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={item.image}
            alt="..."
            effect="blur"
            sx={{
              objectFit: "cover",
              maxHeight: 200,
              borderRadius: 2,
              filter: theme.palette.mode === "dark" ? "brightness(0.8)" : "none",
            }}
          />
        </Box>
        <CardContent
          sx={{
            width: { xs: 1, md: "70%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
          <Typography fontWeight={700} color={"text.primary"}>
            {item.title}
          </Typography>
          <Box marginY={1}>
            <Typography variant={"caption"} color={"text.secondary"} component={"i"}>
              {item.author.name} {item.date}
            </Typography>
          </Box>
          <Typography color="text.secondary">{item.description}</Typography>
          <Box marginTop={2} display={"flex"} justifyContent={"flex-end"}>
            <Button
              onClick={() => {
                navigate(item.link);
              }}
              endIcon={
                <Box component={"svg"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </Box>
              }>
              详细内容
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Grid>
  );
};

const DemoGrids = () => {
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={{ xs: "flex-start", sm: "center" }} flexDirection={{ xs: "column", sm: "row" }} marginBottom={4}>
        <Box>
          <Typography fontWeight={700} variant={"h6"} gutterBottom>
            业务范畴
          </Typography>
          <Typography color={"text.secondary"}>我们专业为您提供:</Typography>
        </Box>
        {/* <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box component={Button} variant="outlined" color="primary" size="large" marginLeft={2}>
            详细内容
          </Box>
        </Box> */}
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => ServiceItem(item, i))}
      </Grid>
    </Box>
  );
};

export default DemoGrids;

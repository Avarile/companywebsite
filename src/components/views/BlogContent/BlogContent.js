/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";

import lecture from "utils/assets/indoors/lecture.jpg";
import graduation from "utils/assets/indoors/graduation.jpg";
import studyInLib from "utils/assets/indoors/studyInLib.jpg";

const BlogContent = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: lecture,
      rows: 1,
      cols: 1,
    },
    {
      src: graduation,
      rows: 1,
      cols: 1,
    },
  ];

  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={"h4"} align={"center"} color={"text.primary"} sx={{ fontWeight: 600, marginTop: 10, marginBottom: 5 }}>
          打工留学签证
        </Typography>
        <Typography variant={"h6"} color={"text.primary"} sx={{ fontWeight: 500, marginTop: 10, marginBottom: 5, lineHeight: 2 }}>
          目前的澳洲二年工签，已经向所有商课和职校开放。无需职业评估，毕业自动获得！此举是为解决疫情期澳洲境内人才短缺问题，澳洲移民局发布了一系列利好政策之一。2022年6月23日相关政策正式立法，7月1日开始执行。
          <br />
          <strong>2023年7月1日之后，根据澳洲人才短缺情况，移民部长还有权延长该福利政策。</strong>
        </Typography>
        <Box width={1} height={1} marginY={4}>
          <LazyLoadImage
            height={"100%"}
            width={"100%"}
            src={studyInLib}
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

        <Box marginY={4}>
          <Typography variant={"h5"} gutterBottom>
            政策优势：
          </Typography>
          <Typography sx={{ lineHeight: 2 }}>
            - 拿厨师职业举例，以前的政策需要：完成两年课程后，提名职业在移民局中长期职业清单上，同时满足360小时的工作经验要求，才能申请厨师职业评估，之后才可申请485毕业生工作签证。
            <br />
            <n />- 2022年7月1日后，这些要求都将暂时移除！ 也就是说，就读移民专业的同学，可以省去职业评估申请费和律师服务费，就读非移民专业的同学，也有机会获得两年的澳洲工作签证。
          </Typography>
          <Box marginTop={2}>
            <Box marginY={4}>
              <Typography variant={"h5"} gutterBottom>
                惠及群体：
              </Typography>
              <Typography sx={{ lineHeight: 2 }}>
                - 现在针对以打工为目的留学澳洲的同学，你们可以拥有额外两年的打工机会！更重要的是，目前澳洲500学生签证拥有全职工作许可。前后时间加在一起，可能会拥有6年的澳洲全职打工机会。
                <br />- 而对以前到澳大利亚就读廉价课程只是为了延长在澳洲读书的时间的同学们来说。
                无论是通过兼职打工赚取学费，未来读取本科学历还是仅仅以打工为主要目的，申请廉价的课程来勤工俭学，这都是一个重大利好。
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginY={4}>
        <ImageList width={1} variant="quilted" cols={2} rowHeight={isMd ? 300 : 200} gap={isMd ? 16 : 8}>
          {photos.map((item, i) => (
            <ImageListItem key={i} cols={item.cols || 2} rows={item.rows || 1}>
              <LazyLoadImage
                height={"100%"}
                width={"100%"}
                src={item.src}
                alt="..."
                effect="blur"
                style={{
                  objectFit: "cover",
                  cursor: "poiner",
                  borderRadius: 8,
                  filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingBottom={4}>
        <Box marginTop={2}>
          <Box marginY={4}>
            <Typography variant={"h5"} gutterBottom>
              更进一步：移民的可能
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              - 部分有足够毅力 / 学习能力的同学们更是直接选择一个移民专业。在毕业以后不仅仅拿到了2年的工签可以进一步工作挣钱，同时还具备了申请技术移民和雇主担保的可能。
              <br />- 如果您怀疑这样的愿景，请立即与联系我们联系。
            </Typography>
          </Box>
        </Box>
        <Box marginTop={2}>
          <Box marginY={4}>
            <Typography variant={"h5"} gutterBottom>
              移民专业举例(按目前政策)：
            </Typography>
            <Typography sx={{ lineHeight: 2 }}>
              - 1. 旅游业
              <br />
              - Certificate III+Certificate IV+Diploma of Hospitality Management。
              <br />- 获得该资格证书后，可在餐厅、酒店、俱乐部、酒吧、咖啡馆等场所工作。
              <br />
              => 入学要求: 所有年满18周岁的国际学生，提供雅思5.5级分的成绩或同等水平。
              <br />
              => 课程时长：两年四个月 课程学费：$24000
              <br />
              => 工作安排:为了成功完成课程并获得证书，学生必须完成一段时间的工作实习，以证明学生满足工作场所要求的标准。
            </Typography>

            <Typography sx={{ lineHeight: 2, marginTop: 2 }}>
              - 2. 程序员
              <br />
              - Certificate III+Certificate IV+Diploma of CyberSecurity / Internet。
              <br />- 获得该资格证书后，可为软件 / 互联网公司 / IT企业工作。
              <br />
              => 入学要求: 所有年满18周岁的国际学生，提供雅思6分的成绩或同等水平。具备2年以上前后端或者全栈工作经验。
              <br />
              => 课程时长: 两年四个月 课程学费：$30000
              <br />
              => 工作安排:
              为了成功完成课程并获得证书，学生必须完成一段时间的工作实习，以证明学生满足工作场所要求的标准，考虑到该工种的特殊性和技能需求，参与该项目的学生应该具备一定的前后端工作经验，并且应该在学习期间考取Aws或者Azure资质证书中的一个。
              <br />
              => 特别注明: 所有参与该项目的学生均需要通过代码面试。
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box component={Card} boxShadow={2} display={"flex"} flexDirection={{ xs: "column", md: "row-reverse" }} sx={{ backgroundImage: "none" }}></Box>
    </Box>
  );
};

export default BlogContent;

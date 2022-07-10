import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";

import Main from "components/layouts/Main";
import Container from "components/Container";
import { HeroFullPic, Contact } from "components/views";

import heroBcg from "utils/assets/Beautiful/sydney.jpg";

const BlogContent = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={"h5"} align={"left"} color={"text.colorful"} sx={{ fontWeight: 600, marginTop: 10, marginBottom: 5 }}>
          综述：
        </Typography>
        <Typography sx={{ lineHeight: 2 }}>
          - 澳大利亚常因气候舒适、地广人稀、资源丰富等特点，被评为世界上最宜城市。教育、医疗、交通、基础设施的评价都远高于国际平均水平。
          毕业于澳大利亚高等院校，更是可以拥有为期2-5年的工作机会，积攒经验的同时还能享受全球排名第一的最低工资标准。
          拥有永居身份后，即可享受众所周知的高福利-Medicare全民医疗免费；读书学费也比留学生少很多。若是成功入籍成为澳洲公民，还可以免息学费贷款。
        </Typography>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={"h6"} align={"left"} color={"text.primary"} sx={{ fontWeight: 600, marginTop: 10, marginBottom: 5 }}>
          留学澳大利亚的优势：
        </Typography>
        <Typography sx={{ lineHeight: 2 }}>
          多年来，澳大利亚大学在世界范围内享有很高的声誉，多年来建立了良好的学术声誉。
          <br />
          澳大利亚的教育体系围绕实践和独立学习而展开，以提供全方位的体验。学生被赋予了更多的个人空间来即兴发挥和实验自己的项目，从而来培养独立的学者。
          <br />
          澳大利亚的机构拥有各种各样的课程——从健康科学到管理和商科，从人文到工程，从法律到语言。澳大利亚拥有43所大学，40余所TAFE学院（提供技术或职业教育的机构）以及数千门课程，您有机会在这里学习。
        </Typography>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={"h6"} align={"left"} color={"text.primary"} sx={{ fontWeight: 600, marginTop: 10, marginBottom: 5 }}>
          一般入学要求：
        </Typography>
        <Typography sx={{ lineHeight: 2 }}>根据各院校系部的要求不同，对入学的要求也会有所差异，但总的来说分为如下几个方面：</Typography>

        <Typography sx={{ lineHeight: 2 }}>1. 学历水品认证, 需要注意的是，很多澳大利亚大学是认可国内的高考成绩和大学学历的。</Typography>
        <Typography sx={{ lineHeight: 2 }}>2. 英文要求, 英文要求通常可以通过如下三种方式来满足。</Typography>
        <Typography sx={{ lineHeight: 2, marginX: 2 }}>1. 通过雅思考试，并达到要求分数。</Typography>
        <Typography sx={{ lineHeight: 2, marginX: 2 }}>
          2. 高中或者高中之前是英文授课 --- 需要说明的是，
          英文要求跟国籍无关。举例澳洲国籍申请人如在中国完成高中，申请澳洲本科仍然需要提供英文测试证明；反正中国国籍申请人如在英美澳等地完成高中，即可免去英文要求。
        </Typography>
        <Typography sx={{ lineHeight: 2, marginX: 2 }}>3. 语言班：澳洲的大学一般都开设附属学院，自设语言班。举例悉尼科技大学（UTS）开设了UTS College（前身是Insearch）。</Typography>

        <Typography sx={{ lineHeight: 2 }}>3. 材料和各种证明文件的办理，收集，提交和审核。清单大致如下：</Typography>

        <Typography sx={{ lineHeight: 2 }}>
          需准备成绩证明、学历证明、语言证明(IELTS或TOFEL)、担保资金类证明等。 具体申请材料清单 （必备材料）
          <br />
          1. 护照复印/扫描件
          <br />
          2. 院校申请表
          <br />
          3. 在读证明或学位证、毕业证
          <br />
          4. 成绩单中英文盖公章
          <br />
          5. 雅思成绩（可后补） 补充材料 （一般申请可无需提供，不同课程均有不同要求） 一般是艺术院校的学生，或者传媒设计类，需要提供作品集 个别专业会要求简历。
          <br />
          6. 高中信息：申请研究生的学生也要在申请信息表里提供高中信息
          <br />
          7. GAMT or GRE：墨尔本大学商科，及一些MBA 课程，或是成绩达不到学校最低要求的，可以提供。
          <br />
          8. 工作证明：针对需要工作经验的课程，如MBA，Management ，marketing ,及学生自己学术背景不强，有相关工作经验可以弥补的。
          <br />
          9.大学成绩：澳洲对中国学生本科阶段的背景比较看重，被列入国家“211”、“985”的大学被认为是较好的大学。当然非211的学生也是可以申请八大的，但是成绩要求更严格一些。
          <br />
          例如211学生申请悉尼大学会计硕士基本入学要求大学四年均分达到80分或以上，而非211学生则需要85分或以上。
          <br />
          10.
          雅思(语言)成绩:大多数院校对雅思成绩的要求是6.5分，个别专业要求相对较高。比如法律、翻译等专业，澳洲多数院校对雅思的小分也有一定要求。因此要注意看好申请专业的雅思要求，如期考出合格的雅思成绩。否则需要读语言班，准备时间需要提早。
          <br />
          11.
          专业背景：很多硕士课程要求专业对口。有这方面要求的课程通常要求比较强的专业背景，如工程、科学、计算机、金融、设计等。通常还需要由申请人的导师出具推荐信，或提供其他辅助文件(如作品集、陈述等)来说明专业背景。
        </Typography>
      </Box>

      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={"h6"} align={"left"} color={"text.primary"} sx={{ fontWeight: 600, marginTop: 10, marginBottom: 5 }}>
          获取学签：
        </Typography>
        <Typography sx={{ lineHeight: 2 }}>
          一般来说，要提前一年提交入学申请，最晚最晚要在开学三周前递交 --- 当然这个要算是抵到门槛上了。
          <br />
          对申请的审理通常在2~3周，就成功率而言，通常只要达到要求，基本上都可以被录取，澳大利亚大学对符合要求的普通人是不会无故拒绝的
          。少数大学比如澳大利亚国立和墨尔本大学是进行择优录取，这就意味着没有绝对的录取标准。
        </Typography>

        <Typography sx={{ lineHeight: 2 }}>一旦受到学校的Offer，就需要仔细的看看Offer是不是Conditional（有条件）的，如果是Conditional的，则需要在满足要求之后。</Typography>
        <Typography sx={{ lineHeight: 2 }}>2. 英文要求, 英文要求通常可以通过如下三种方式来满足。</Typography>
        <Typography sx={{ lineHeight: 2, marginX: 2 }}>1. 通过雅思考试，并达到要求分数。</Typography>
        <Typography sx={{ lineHeight: 2, marginX: 2 }}>
          2. 高中或者高中之前是英文授课 --- 需要说明的是，
          英文要求跟国籍无关。举例澳洲国籍申请人如在中国完成高中，申请澳洲本科仍然需要提供英文测试证明；反正中国国籍申请人如在英美澳等地完成高中，即可免去英文要求。
        </Typography>
        <Typography sx={{ lineHeight: 2, marginX: 2 }}>3. 语言班：澳洲的大学一般都开设附属学院，自设语言班。举例悉尼科技大学（UTS）开设了UTS College（前身是Insearch）。</Typography>

        <Typography sx={{ lineHeight: 2 }}>3. 材料和各种证明文件的办理，收集，提交和审核。清单大致如下：</Typography>

        <Typography sx={{ lineHeight: 2 }}>
          需准备成绩证明、学历证明、语言证明(IELTS或TOFEL)、担保资金类证明等。 具体申请材料清单 （必备材料）
          <br />
          1. 护照复印/扫描件
          <br />
          2. 院校申请表
          <br />
          3. 在读证明或学位证、毕业证
          <br />
          4. 成绩单中英文盖公章
          <br />
          5. 雅思成绩（可后补） 补充材料 （一般申请可无需提供，不同课程均有不同要求） 一般是艺术院校的学生，或者传媒设计类，需要提供作品集 个别专业会要求简历。
          <br />
          6. 高中信息：申请研究生的学生也要在申请信息表里提供高中信息
          <br />
          7. GAMT or GRE：墨尔本大学商科，及一些MBA 课程，或是成绩达不到学校最低要求的，可以提供。
          <br />
          8. 工作证明：针对需要工作经验的课程，如MBA，Management ，marketing ,及学生自己学术背景不强，有相关工作经验可以弥补的。
          <br />
          9.大学成绩：澳洲对中国学生本科阶段的背景比较看重，被列入国家“211”、“985”的大学被认为是较好的大学。当然非211的学生也是可以申请八大的，但是成绩要求更严格一些。
          <br />
          例如211学生申请悉尼大学会计硕士基本入学要求大学四年均分达到80分或以上，而非211学生则需要85分或以上。
          <br />
          10.
          雅思(语言)成绩:大多数院校对雅思成绩的要求是6.5分，个别专业要求相对较高。比如法律、翻译等专业，澳洲多数院校对雅思的小分也有一定要求。因此要注意看好申请专业的雅思要求，如期考出合格的雅思成绩。否则需要读语言班，准备时间需要提早。
          <br />
          11.
          专业背景：很多硕士课程要求专业对口。有这方面要求的课程通常要求比较强的专业背景，如工程、科学、计算机、金融、设计等。通常还需要由申请人的导师出具推荐信，或提供其他辅助文件(如作品集、陈述等)来说明专业背景。
        </Typography>
      </Box>
    </Box>
  );
};

const HeroData = {
  backgroundImg: heroBcg,
  mainTitle: "澳大利亚留学指南",
  subTitle: "本页面滚动更新最新咨询哦 - June/25/2022",
};

const StudyGuide = () => {
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

export default StudyGuide;

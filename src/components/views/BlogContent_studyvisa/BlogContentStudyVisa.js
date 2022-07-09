/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import data from "./data";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BlogContentStudyVisa = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={"h5"} align={"left"} color={"text.colorful"} sx={{ fontWeight: 600, marginTop: 10, marginBottom: 5 }}>
          澳洲学生签证详解(SSVF）
        </Typography>
        <Typography sx={{ lineHeight: 2 }}>
          - 2016年7月1日，澳大利亚移民局正式实施最新学生签证政策SSVF（Streamline Student Visa Framework）。 新政策在最大程度上豁免了资金担保和英语成绩的要求，
          为更多莘莘学子向往留学澳洲，敞开了大门。目前学生签证分为两大类：500类别（学生签证）以及590类别（学生监护人签证）。
        </Typography>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={"h6"} align={"left"} color={"text.primary"} sx={{ fontWeight: 600, marginTop: 10, marginBottom: 5 }}>
          新学生签政策如下：
        </Typography>
        <Typography sx={{ lineHeight: 2 }}>1. 所有被澳大利亚政府注册院校录取的全日制学生，均可申请学生签证；。</Typography>
        <Typography sx={{ lineHeight: 2 }}>2. 经审查确认身份真实有效(Genuine Temporary Entrant)。</Typography>
        <Typography sx={{ lineHeight: 2 }}>
          在现行的的澳大利亚学生签证政策中，移民局强化了所有学生真实性的调查（GTE）。移民官会根据每个申请人的年龄、教育背景、工作经验和就读院校以及课程的内容，来考量申请人是否有真实留学的意愿。最终决定是否颁发这个学生签证。每个申请各有不同，但通常移民官会从以下几个方面来判定您的真实性：
        </Typography>
        <Box marginX={4}>
          <Typography sx={{ lineHeight: 2 }}>
            - 申请人在本国的情况：包括申请人不在自己国家学习的合理原因、申请人与自己国家的紧密联系、申请人是否有强有力的动力在完成学习后会回到自己的国家等。
            <br />
            -
            申请人与澳大利亚的关系：申请人是否与澳大利亚有紧密的联系（包括家人和社会），申请人是否有移民澳洲的倾向，申请人是否想通过学生签证长期逗留在澳大利亚，申请人对于自己在澳大利亚的生活以及课程是否有足够的认知等。
            <br />
            - 申请人所报读课程的职业价值：申请人就读的澳洲课程是否与其现有的教育水平相符，对申请人职业生涯是否有增值作用。
            <br />- 申请人的签证历史：包括过往签证申请情况以及出入澳洲的记录。申请人是否申请过澳大利亚或者其他国家的签证，是否有澳大利亚或者其他国家的拒签史和逾期滞留的情况。
          </Typography>
        </Box>
        <Typography sx={{ lineHeight: 2 }}>3. 学生签证材料清单。</Typography>

        <Box marginX={4}>
          <Typography sx={{ lineHeight: 2 }}>
            -
            语言要求（以及语言豁免要求及文件）：新政策在语言要求上，对大部分中国留学生影响不大。因为大部分中国留学生，会先获得移民局认可的语言成绩，然后再申请签证来澳大利亚的。针对部分大学，早期推出的通过网上测试或者驻中国办公室面试，来豁免语言要求的做法将无法被认可。可以被澳大利亚学生签证中心接受的英语考试为：雅思，托福，PTE。如果申请1类学校中的八大名校，本来就不认可内部测试。因此我们建议想要就读名校的留学生，尽早获得以上一种语言成绩。
            <br />- 存款及收入要求及相关证明文件。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogContentStudyVisa;

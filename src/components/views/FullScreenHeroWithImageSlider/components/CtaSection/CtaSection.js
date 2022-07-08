import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";

const CtaSection = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: "medium",
        }}
        font={""}
        gutterBottom
        color={"text.secondary"}>
        我们是最专业的
      </Typography>
      <Box marginBottom={2}>
        <Typography
          variant="h4"
          color="text.primary"
          sx={{
            fontWeight: 500,
          }}>
          移民，留学，法律服务团队{" "}
          <Typography
            color={"primary"}
            component={"span"}
            variant={"inherit"}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.secondary.main, 0.3)} 0%)`,
            }}>
            为您提供最优质可靠的服务
          </Typography>
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
          从业6年来，融信公司团队已经帮助无数人圆梦澳洲，我们对移民政策的有着清晰精准的解读和掌握，能够针对您的情况定制可行性最高，风险最低的方案。您的成功就是我们的成功。
        </Typography>
      </Box>
      <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} alignItems={{ xs: "stretched", sm: "flex-start" }}>
        <Button variant="contained" color="primary" size="large" fullWidth={isMd ? false : true}>
          预约咨询
        </Button>
        <Box component={Button} variant="outlined" color="primary" size="large" marginTop={{ xs: 2, sm: 0 }} marginLeft={{ sm: 2 }} fullWidth={isMd ? false : true}>
          政策解读
        </Box>
      </Box>
    </Box>
  );
};

export default CtaSection;

import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeModeToggler from "components/ThemeModeToggler";
import AvarileLogo from "utils/assets/Mylogo.logo";

import { NavItem } from "./components";

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { migration: migration, visa: visa, programmer: programmer, account: accountPages, portfolio: portfolioPages, blog: blogPages } = pages;

  return (
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={1} height={"40px"}>
      <Box display={"flex"} component="a" href="/" title="澳新融信" width={{ xs: 120, md: 120 }}>
        <Box component={AvarileLogo} height={1} width={1} />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box>
          <NavItem title={"新澳留学"} id={"study"} items={migration} colorInvert={colorInvert} />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={"签证申请"} id={"visa"} items={visa} colorInvert={colorInvert} />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={"融信代码"} id={"offshore"} items={programmer} colorInvert={colorInvert} />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={"生活指南"} id={"live-in-australia"} items={accountPages} colorInvert={colorInvert} />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={"公司架构"} id={""} items={blogPages} colorInvert={colorInvert} />
        </Box>
        <Box marginLeft={4}>
          <NavItem title={"关于我们"} id={"portfolio-pages"} items={portfolioPages} colorInvert={colorInvert} />
        </Box>
        <Box marginLeft={4}>
          <ThemeModeToggler />
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}>
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;

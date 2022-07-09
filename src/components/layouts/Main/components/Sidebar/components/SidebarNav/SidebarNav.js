import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Mylogo from "utils/assets/Mylogo.logo";

import NavItem from "./components/NavItem";

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const { themeToggler } = theme;

  const { migration: migration, visa: visa, programmer: programmer, account: accountPages, portfolio: portfolioPages, blog: blogPages } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box display={"flex"} component="a" href="/" title="新澳融信" width={{ xs: 100, md: 120 }}>
          <Box component={Mylogo} height={1} width={1} />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={"新澳留学"} items={migration} />
        </Box>
        <Box>
          <NavItem title={"签证申请"} items={visa} />
        </Box>
        <Box>
          <NavItem title={"融信代码"} items={programmer} />
        </Box>
        <Box>
          <NavItem title={"生活指南"} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={"公司架构"} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={"关于我们"} items={portfolioPages} />
        </Box>
        <Box marginTop={2}>
          <Button
            size={"large"}
            variant="outlined"
            fullWidth
            onClick={() => {
              themeToggler();
            }}>
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;

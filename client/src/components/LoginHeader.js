import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
const LoginHeader = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
      <Typography>
            <LibraryBooksOutlinedIcon />
          </Typography>
        {/* <Typography variant="h6">Login</Typography> */}
      </Toolbar>
    </AppBar>
  );
};

export default LoginHeader;

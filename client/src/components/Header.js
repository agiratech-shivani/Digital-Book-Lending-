import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import LibraryBookOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const Header = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>
            <LibraryBookOutlinedIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

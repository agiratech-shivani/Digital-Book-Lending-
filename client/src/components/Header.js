import React, { useState } from "react";
import { AppBar, Toolbar, Tab, Tabs, Typography, Button } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { Link } from "react-router-dom";
import LogoutButton from "./Logout";
import logout from "../logout";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>
            <LibraryBooksOutlinedIcon />
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/home" label="Home" />
            <Tab LinkComponent={Link} to="/add" label="Add Book" />
            <Tab LinkComponent={Link} to="/books" label="Books" />
            <Tab LinkComponent={Link} to="/requests" label="Requests" />
            {/* <Tab LinkComponent={Button} label="Logout" /> */}
            <Button onClick={logout} variant="contained">
              Logout
            </Button>

            {/* <LogoutButton /> */}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

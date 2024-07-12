import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import { Card, CardMedia } from "@mui/material";

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <CardMedia image="src/assets/Images/logo.png" />

        <Card>
          <Typography></Typography>
          <CardMedia
            sx={{ height: 10 }}
            image="src/assets/Images/banner.jpg"
            title="green iguana"
          />
        </Card>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
        <Button variant="outlined" size="small" href="">
          Products
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;

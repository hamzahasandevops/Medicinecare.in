import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import InboxIcon from "@mui/icons-material/Inbox";
import EmailIcon from "@mui/icons-material/Email";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import {
  Box,
  Card,
  CardMedia,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import Drawer from "@mui/material/Drawer";

import { useState } from "react";

function Header(props) {
  const { sections, title } = props;
  const { cart } = useContext(CartContext);
  const [isDraweropen, setisDraweropen] = useState(false);
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <IconButton onClick={() => setisDraweropen(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={isDraweropen}
          onClose={() => setisDraweropen(false)}
        >
          <Box p={2} width="250px" textAlign="center" role="presentation">
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <>
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  </>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
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

        <Box
          sx={{
            typography: "body1",
            "& > :not(style) ~ :not(style)": {
              ml: 2,
            },
          }}
        >
          <Link to="/cart">
            <IconButton>
              <ProductionQuantityLimitsIcon />
            </IconButton>
          </Link>
        </Box>

        {cart.length}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;

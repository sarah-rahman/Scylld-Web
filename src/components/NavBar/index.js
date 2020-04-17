import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const width = window.innerWidth;
  const isMobile = width <= 600;
  const isTablet = width > 600 && width < 960;
  const isDesktop = width >= 960;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        {(isTablet || isDesktop) && (
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Scylld.
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Contact</Button>
            <Button
              variant="contained"
              style={{ color: "white", backgroundColor: "grey" }}
            >
              Get Quote
            </Button>
          </Toolbar>
        )}
        {isMobile && (
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Scylld.
            </Typography>
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon aria-haspopup="true" onClick={handleClick} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Services</MenuItem>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
              <MenuItem onClick={handleClose}>Get Quote</MenuItem>
            </Menu>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
  const classes = useStyles();

  const width = window.innerWidth;
  const isMobile = width <= 600;

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        {!isMobile && (
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
              GetQuote
            </Button>
          </Toolbar>
        )}
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
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

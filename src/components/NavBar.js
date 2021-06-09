import React from "react";
import Controller from "../assets/icons/Controller.svg";
import Mail from "../assets/icons/Mail.svg";
import Avatar from "../assets/icons/Avatar.svg";
import NewIdea from "../assets/icons/NewIdea.svg";
import Blammo from "../assets/Blammo.svg";
import RidingRocket from "../assets/characters/RidingRocket.svg";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import AnimationWrapper from "./AnimationWrapper";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  bar: {
    background: theme.palette.common.white,
    padding: "10px 0px",
    marginBottom: theme.spacing(4),
    boxShadow: "0px 0px 15px black",
    position: "fixed",
  },
  menuButton: {
    fontSize: 30,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontFamily: '"Luckiest Guy", cursive;',
      letterSpacing: 2.5,
      fontSize: 45,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  button: {
    margin: "10px",
  },
  navIconLink: {
    color: theme.palette.primary.dark,
    marginRight: "8px",
  },
}));

const IconWrapper = ({ src, label }) => {
  const classes = useStyles();

  return (
    <AnimationWrapper style={{ display: "flex", width: "100%" }}>
      <Typography variant="h6" className={classes.navIconLink}>
        {label}
      </Typography>
      <img
        src={src}
        draggable={false}
        style={{ height: 30, width: 30 }}
        alt={`button to open ${label} page`}
      />
    </AnimationWrapper>
  );
};

function NavBar() {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLinkClick = (path) => {
    setAnchorEl(null);
    history.push(path);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleLinkClick("/icon-list")}>
        <IconWrapper src={Controller} label="Games" />
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/icon-list")}>
        <IconWrapper src={Mail} label="Notifications" />
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/icon-list")}>
        <IconWrapper src={Avatar} label="My Account" />
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/icon-list")}>
        <IconWrapper src={NewIdea} label="Create a Game" />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <img
            src={RidingRocket}
            alt="app logo"
            draggable={false}
            style={{
              height: "60px",
              width: "75px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          />
          <img
            src={Blammo}
            alt="Blammo logo text"
            draggable={false}
            style={{ width: "250px", height: "70px" }}
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              How to Use
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              About
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Contact
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Log In
            </Button>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              <MenuIcon className={classes.menuButton} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default NavBar;

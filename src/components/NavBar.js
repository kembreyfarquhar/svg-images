import React, { useState } from "react";
import Controller from "../assets/icons/Controller.svg";
import Mail from "../assets/icons/Mail.svg";
import Avatar from "../assets/icons/Avatar.svg";
import NewIdea from "../assets/icons/NewIdea.svg";
import Blammo from "../assets/Blammo.svg";
import RidingRocket from "../assets/characters/RidingRocket.svg";
import { useSelector } from "react-redux";
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
import MoreIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";
import AnimationWrapper from "./AnimationWrapper";
import MustBeLoggedInModal from "./MustBeLoggedInModal";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  bar: {
    background: theme.palette.background.paper,
    borderBottom: `4px solid ${theme.palette.primary.main}`,
    padding: "8px 0px",
    marginBottom: theme.spacing(4),
    boxShadow: "0px 0px 10px grey",
  },
  toolbar: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  menuButton: {
    fontSize: 30,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  button: {
    margin: "10px",
  },
  navIconLink: {
    color: theme.palette.primary.dark,
    marginLeft: "8px",
  },
}));

const IconWrapper = ({ src, label }) => {
  const classes = useStyles();

  return (
    <AnimationWrapper style={{ display: "flex", width: "100%" }}>
      <img
        src={src}
        draggable={false}
        style={{ height: 30, width: 30 }}
        alt={`button to open ${label} page`}
      />
      <Typography variant="h6" className={classes.navIconLink}>
        {label}
      </Typography>
    </AnimationWrapper>
  );
};

function NavBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const [isCreateGameModalOpen, setIsCreateGameModalOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleLinkClick = (path) => {
    handleMenuClose();
    history.push(path);
  };

  const handleCreateGameClick = (path) => {
    handleMenuClose();
    if (!isLoggedIn) {
      setIsCreateGameModalOpen(true);
    } else {
      handleLinkClick(path);
    }
  };

  const menuId = "primary-navbar-menu";
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
      <MenuItem onClick={() => handleCreateGameClick("/new-game")}>
        <IconWrapper src={NewIdea} label="Create a Game" />
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/icon-list")}>
        <IconWrapper src={Mail} label="Notifications" />
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/icon-list")}>
        <IconWrapper src={Avatar} label="My Account" />
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-navbar-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>How to Use</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Contact</MenuItem>
      {!isLoggedIn && (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className={classes.button}
        >
          Log In/Sign Up
        </Button>
      )}
      <Divider />
      <MenuItem onClick={() => handleLinkClick("/icon-list")}>
        <IconWrapper src={Controller} label="Games" />
      </MenuItem>
      <MenuItem onClick={() => handleCreateGameClick("/new-game")}>
        <IconWrapper src={NewIdea} label="Create a Game" />
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/icon-list")}>
        <IconWrapper src={Mail} label="Notifications" />
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/icon-list")}>
        <IconWrapper src={Avatar} label="My Account" />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <MustBeLoggedInModal
        title="Please Log In"
        description="You must be logged in to create a new game."
        isOpen={isCreateGameModalOpen}
        handleClose={() => setIsCreateGameModalOpen(false)}
      />
      <AppBar position="static" className={classes.bar}>
        <Toolbar className={classes.toolbar}>
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
            <Button color="primary" size="small" className={classes.button}>
              How to Use
            </Button>
            <Button color="primary" size="small" className={classes.button}>
              About
            </Button>
            <Button color="primary" size="small" className={classes.button}>
              Contact
            </Button>
            {!isLoggedIn && (
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className={classes.button}
              >
                Log In/Sign Up
              </Button>
            )}
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
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              <MoreIcon className={classes.menuButton} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default NavBar;

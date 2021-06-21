import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Controller from "../assets/icons/Controller.svg";
import Mail from "../assets/icons/Mail.svg";
import News from "../assets/icons/News.svg";
import Avatar from "../assets/icons/Avatar.svg";
import NewIdea from "../assets/icons/NewIdea.svg";
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
import { useViewport } from "../context/viewport";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  bar: {
    background: "#c8d0e775",
    position: "fixed",
    padding: "8px 0px",
    backdropFilter: "blur(15px)",
    marginBottom: theme.spacing(4),
    boxShadow: `.8rem .8rem 1.4rem ${theme.palette.background.greyLight3}, -.2rem -.2rem 1.8rem ${theme.palette.common.white}`,
  },
  logo: {
    fontFamily: "CREAMPUFF",
    color: theme.palette.common.white,
    webkitTextStroke: `1px ${theme.palette.typography.black}`,
    textShadow: `3px 3px 0 ${theme.palette.typography.black}, -1px -1px 0 ${theme.palette.typography.black}, 1px 1px 0 ${theme.palette.typography.black}, 1px -1px 0 ${theme.palette.typography.black}, -1px 1px 0 ${theme.palette.typography.black}, 1px 1px 0 ${theme.palette.typography.black}`,
    userSelect: "none",
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
  },
  menuIconButton: {
    marginLeft: "10px",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuIcon: {
    fontSize: 30,
    "&:hover": {
      color: theme.palette.primary.main,
    },
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
    marginLeft: theme.spacing(2),
  },
  loginMenuItem: {
    // backgroundColor: "#ff85aa42",
  },
}));

const IconWrapper = ({ src, label }) => {
  const classes = useStyles();

  return (
    <AnimationWrapper
      style={{ display: "flex", width: "100%", alignItems: "center" }}
    >
      <img
        src={src}
        draggable={false}
        style={{ height: 30, width: 30 }}
        alt={`button to open ${label} page`}
      />
      <Typography className={classes.navIconLink}>{label}</Typography>
    </AnimationWrapper>
  );
};

function NavBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useHistory();
  const classes = useStyles();
  const [visible, setVisible] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const [isCreateGameModalOpen, setIsCreateGameModalOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileAnchorEl);
  const animatedStyles = useSpring({
    opacity: visible ? 1 : 0,
    config: config.molasses,
  });
  const { width } = useViewport();
  const breakpoint = 1000;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    });
  }, []);

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
    if (isLoggedIn) {
      setIsCreateGameModalOpen(true);
    } else {
      handleLinkClick(path);
    }
  };

  const menuId = "primary-navbar-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "bottom", horizontal: "right" }}
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
        <IconWrapper src={News} label="What's New" />
      </MenuItem>
      {isLoggedIn && (
        <>
          <Divider />
          <MenuItem onClick={() => handleLinkClick("/icon-list")}>
            <IconWrapper src={Mail} label="Notifications" />
          </MenuItem>
          <MenuItem onClick={() => handleLinkClick("/icon-list")}>
            <IconWrapper src={Avatar} label="My Account" />
          </MenuItem>
        </>
      )}
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
        <MenuItem className={classes.loginMenuItem}>Login/Signup</MenuItem>
      )}
      <Divider />
      <MenuItem onClick={() => handleLinkClick("/icon-list")}>
        <IconWrapper src={Controller} label="Games" />
      </MenuItem>
      <MenuItem onClick={() => handleCreateGameClick("/new-game")}>
        <IconWrapper src={NewIdea} label="Create a Game" />
      </MenuItem>
      <MenuItem onClick={() => handleLinkClick("/icon-list")}>
        <IconWrapper src={News} label="What's New" />
      </MenuItem>
      {isLoggedIn && (
        <>
          <Divider />
          <MenuItem onClick={() => handleLinkClick("/icon-list")}>
            <IconWrapper src={Mail} label="Notifications" />
          </MenuItem>
          <MenuItem onClick={() => handleLinkClick("/icon-list")}>
            <IconWrapper src={Avatar} label="My Account" />
          </MenuItem>
        </>
      )}
    </Menu>
  );

  return (
    <animated.div className={classes.grow} style={animatedStyles}>
      <MustBeLoggedInModal
        title="Oops! Unauthorized."
        description="Please login to create a new game."
        isOpen={isCreateGameModalOpen}
        handleClose={() => setIsCreateGameModalOpen(false)}
      />
      <AppBar position="static" className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          <div
            onClick={() => handleLinkClick("/")}
            style={{
              display: "flex",
              marginLeft: "10px",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            {width > breakpoint && (
              <img
                src={RidingRocket}
                alt="app logo"
                draggable={false}
                style={{
                  height: "50px",
                  width: "65px",
                  marginRight: "20px",
                }}
              />
            )}
            <Typography className={classes.logo} variant="h3">
              BLAMMMO!
            </Typography>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button>How to Use</Button>
            <Button>About</Button>
            <Button>Contact</Button>
            {!isLoggedIn && (
              <Button variant="contained" color="primary">
                Login/Signup
              </Button>
            )}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              className={classes.menuIconButton}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              className={classes.menuIconButton}
            >
              <MoreIcon className={classes.menuIcon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </animated.div>
  );
}

export default NavBar;

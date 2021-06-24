import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export const moreMenuId = "more-navbar-menu";

const MoreMenu = ({ moreMenuAnchorEl, isMoreMenuOpen, onMenuClose }) => {
  return (
    <Menu
      anchorEl={moreMenuAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={moreMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMoreMenuOpen}
      onClose={onMenuClose}
    >
      <MenuItem>Available plans</MenuItem>
      <MenuItem>Support</MenuItem>
      <MenuItem>How to use</MenuItem>
      <MenuItem>Contact us</MenuItem>
      <MenuItem>About us</MenuItem>
      <MenuItem>Suggest a feature</MenuItem>
      <MenuItem>News</MenuItem>
      <MenuItem>Follow us</MenuItem>
    </Menu>
  );
};

export default MoreMenu;

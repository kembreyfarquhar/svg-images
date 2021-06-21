import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Padlock from "../svgComponents/gamifyIcons/Padlock";
import Close from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MustBeLoggedInModal({
  handleClose,
  isOpen,
  title,
  description,
}) {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="must-be-logged-in-alert-title"
      aria-describedby="must-be-logged-in-alert-description"
    >
      <div
        onClick={handleClose}
        style={{
          position: "absolute",
          top: "-1rem",
          right: "-1rem",
          height: "3rem",
          width: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f9fd",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: `0.3rem 0.3rem 0.5rem #586279, -0.1rem -0.1rem 0.4rem #586279, inset -0.1rem -0.1rem 0.2rem #bec8e4`,
        }}
      >
        <Close style={{ color: "#586279" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "1.5rem",
        }}
      >
        <Padlock width={100} height={100} />
      </div>
      <Typography variant="h4">{title}</Typography>
      <DialogContent>
        <DialogContentText id="must-be-logged-in-alert-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ display: "flex", flexDirection: "column" }}>
        <Button variant="contained" color="primary" fullWidth>
          Login!
        </Button>
        <Button variant="outlined" color="secondary" fullWidth>
          Create an Account!
        </Button>
      </DialogActions>
    </Dialog>
  );
}

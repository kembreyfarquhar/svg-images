import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import Padlock from "../svgComponents/gamifyIcons/Padlock";
import Close from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    top: "-1.3rem",
    right: "-1.3rem",
    height: theme.spacing(6),
    minWidth: theme.spacing(6),
    maxWidth: theme.spacing(6),
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.paper,
    borderRadius: "50%",
    boxShadow: `0.2rem 0.2rem 0.3rem ${theme.palette.background.greyDark}, -0.1rem -0.1rem 0.3rem ${theme.palette.background.greyDark}, inset -0.1rem -0.1rem 0.2rem ${theme.palette.background.greyLight3}`,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: theme.spacing(3),
  },
  actionButtonContainer: { display: "flex", flexDirection: "column" },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MustBeLoggedInModal({
  handleClose,
  isOpen,
  title,
  description,
}) {
  const classes = useStyles();

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="must-be-logged-in-alert-title"
      aria-describedby="must-be-logged-in-alert-description"
    >
      <Button
        variant="contained"
        onClick={handleClose}
        className={classes.closeButton}
      >
        <Close />
      </Button>
      <div className={classes.imageContainer}>
        <Padlock width={100} height={100} />
      </div>
      <Typography variant="h4">{title}</Typography>
      <DialogContent>
        <DialogContentText id="must-be-logged-in-alert-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.actionButtonContainer}>
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

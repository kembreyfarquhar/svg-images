import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MustBeLoggedInModal({handleClose, isOpen, title, description}) {
  return (
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="must-be-logged-in-alert-title"
        aria-describedby="must-be-logged-in-alert-description"
      >
        <DialogTitle id="must-be-logged-in-alert-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="must-be-logged-in-alert-description">
            {description}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
  );
}
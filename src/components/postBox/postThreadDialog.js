import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import TextEditor from "../TextEditor";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: "90vh",
    minWidth: "120vh",
    maxWidth: "120vh",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),

    //   outerHeight:theme.outerHeight(5)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    // position: 'absolute',
    // // left: 10,
    // height:"300px",
    // width:"100%",
    // bottom: 80
  },
  editor: {
    position: "absolute",
    // left: 10,
    height: "300px",
    width: "100%",
    bottom: 80,
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    position: "absolute",
    right: 10,
    bottom: 25,
  },
}))(MuiDialogActions);

const PostThreadDialog = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link color="inherit" onClick={handleClickOpen}>
        view thread ...
      </Link>
      <Dialog
        classes={{ paper: classes.dialogPaper }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Thread Comments
        </DialogTitle>

        <DialogContent dividers>
          <div style={{ width: "100%", height: "220px" }}></div>
        </DialogContent>
        <DialogContent dividers>
          <div classes={{ paper: classes.editor }}>
            <TextEditor editorStyle={{ width: "100%", height: "150px" }} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            varient="outlined"
            autoFocus
            onClick={handleClose}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default PostThreadDialog;

import React, { useState, useEffect } from "react";
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
import PostEditor from "../dialogPost/postEditor";

import { makeStyles } from "@material-ui/core/styles";
import "./postThreadDialog.scss";
import CommentContainer from "../comments/commentContainer";
import axios from "axios";
import MultiImageUpload from "../upload/multiImageUpload";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: "90vh",
    minWidth: "120vh",
    // maxWidth: "120vh",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
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
   
  },
  editor: {
 
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
  const [commentFiles, setCommentFiles] = useState([]);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const commentInsert = () => {
  
    const matches = props.commentMarkdown.split("```");
    const code = "```" + matches[1] + "```";
    let new_code = "";
    let x = 0;
    code.split("").map((word, i, arr) => {
      if (arr.length - 4 === i) {
        new_code += "\n";
        return;
      } else if (word === "\n" && arr.length - 5 !== i) {
        x = x + 1;
        if (x >= 100) {
          new_code += word + x + " ";
        } else if (x >= 10) {
          new_code += word + " " + x + " ";
        } else {
          new_code += word + "  " + x + " ";
        }
      } else {
        new_code += word;
      }
    });
  

    const formData = new FormData();
    formData.append("message", props.commentMarkdown);
    formData.append("code", new_code);
    commentFiles.forEach((file) => {
      formData.append("images", file);
    });
    const Url = `/comment/${props.id}`;
    axios({
      method: "POST",
      url: Url,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      props.setCommentData((prev) => [...prev, res.data]);
      props.setCommentMarkdown("")
    });
  };
  useEffect(() => {
    const Url = `/comment/${props.id}`;
    axios({
      method: "GET",
      url: Url,
    }).then((res) => {
      props.setCommentData([...res.data]);
    });
  }, [open === true]);

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
        <div className="threadDialog">
          <div className="comments">
            <DialogContent dividers>
              <CommentContainer
                trendingComment={props.trendingComment}
                setTrendingComment={props.setTrendingComment}
                commentData={props.commentData}
                setCommentData={props.setCommentData}
                markdown={props.commentMarkdown}
                setMarkdown={props.setCommentMarkdown}
                files={commentFiles}
                setFiles={setCommentFiles}
                setTrendingComment={props.setTrendingComment}
              />
            </DialogContent>
          </div>

          <div className="editor">
            

            <DialogActions>
              <Button
                varient="outlined"
                autoFocus
                onClick={commentInsert}
                // onClick={handleClose}
                color="primary"
              >
                Submit
              </Button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default PostThreadDialog;

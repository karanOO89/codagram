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
    // const tags = [];
    const message = [];
    // props.markdown
    //   .replace(/\n/g, " ")
    //   .split(" ")
    //   .map((word) => {
    //     if (word[0] === "#" && word.length > 1) {
    //       tags.push(word.substr(1));
    //     } else {
    //       message.push(word);
    //     }
    //   });
    // commentMarkdown = {props.commentMarkdown} setCommentMarkdown ={props.setCommentMarkdown}
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
    // tags.forEach((tag) => {
    //   formData.append("tags", tag);
    // });

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
      // console.log("shjxxxxxxxxxxxx",res.data);

      props.setCommentData((prev) => [...prev, res.data]);
    });
  };
  useEffect(() => {
    const Url = `/comment/${props.id}`;
    axios({
      method: "GET",
      url: Url,
    }).then((res) => {
      console.log("hey fetched data from back-end");
      props.setCommentData([...res.data]);
    });
  }, []);

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
              {/* <div style={{ width: "100%", height: "220px"}}></div> */}

              <CommentContainer
                commentData={props.commentData}
                setCommentData={props.setCommentData}
              />
            </DialogContent>
          </div>

          <div className="editor">
            <DialogContent dividers>
              {/* <div style={{ width: "100%", height: "220px" }}></div> */}
              <MultiImageUpload
                files={commentFiles}
                setFiles={setCommentFiles}
              />
            </DialogContent>
            

            <DialogContent dividers>
              <div class= "postEditor">

              <PostEditor
                markdown={props.commentMarkdown}
                setMarkdown={props.setCommentMarkdown}
              />

              </div>
            </DialogContent>

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

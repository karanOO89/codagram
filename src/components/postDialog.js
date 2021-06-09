import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

import PostEditor from "./dialogPost/postEditor";
import MultiImageUpload from "./upload/multiImageUpload";

import { makeStyles } from "@material-ui/core/styles";
import { ContentState } from "react-draft-wysiwyg";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: "50vh",
    minWidth: "80vh",
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
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function PostDialog(props) {
  const [data, setData] = useState(null);
  const [files, setFiles] = useState([]);
  // console.log("hey take your files away !!!!!!!!!!!!", files);

  const [markdown, setMarkdown] = useState("");
  // console.log("markdownnnnn~~~~~~~~~~~~~~`", markdown);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const postInsert = () => {
    const tags = [];
    const message = [];
    markdown
      .replace(/\n/g, " ")
      .split(" ")
      .map((word) => {
        if (word[0] === "#" && word.length > 1) {
          tags.push(word.substr(1));
        } else {
          message.push(word);
        }
      });

    const formData = new FormData();
    formData.append("message", message.join(" "));
    tags.forEach((tag) => {
      formData.append("tags", tag);
    });
    files.forEach((file) => {
      formData.append("images", file);
    });

    const Url = "/post";
    axios({
      method: "POST",
      url: Url,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      // console.log("shjxxxxxxxxxxxx",res);

      props.setPostData(prev=>[...prev, res.data]);
      
      // setData(data.msg);
      handleClose();
    });
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add a Post
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} />
        {/* </DialogTitle> */}

        <DialogContent dividers>
          <MultiImageUpload files={files} setFiles={setFiles} />
        </DialogContent>

        <DialogContent dividers>
          <PostEditor markdown={markdown} setMarkdown={setMarkdown} />
        </DialogContent>

        <DialogActions>
          <form>
            <Button autoFocus color="primary" onClick={postInsert}>
              Submit
            </Button>
          </form>
        </DialogActions>
      </Dialog>
    </div>
  );
}

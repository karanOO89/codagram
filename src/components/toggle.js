import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ChatApp from "./chatApp";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const style = {
  background: '#00a152',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 32,
  padding: '10px 10px',
	margin: 0,
  // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

export default function TransitionsModal() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				type='button'
				onClick={handleOpen}
				variant='contained'
				size='small'
				color='#00a152'
				className={classes.margin}
				style={style}
			>
				Chat
			</Button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div
						className={classes.paper}
						style={{
							padding: 0,
							backgroundColor: "#14161A",
						}}
					>
						<h2 id='transition-modal-title'></h2>
						<div id='transition-modal-description'>
							<ChatApp />
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

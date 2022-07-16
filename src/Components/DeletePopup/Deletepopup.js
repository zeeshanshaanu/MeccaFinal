import * as React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import "./Delete.css";
import { Button } from "react-bootstrap";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {" "}
      <DialogTitle></DialogTitle>{" "}
      <List
        sx={{
          pt: 0,
        }}
      >
        {" "}
        <ListItem>
          {" "}
          <div>
            <div className="Questionmarks">
              <center>
                <ContactSupportRoundedIcon className="ContactSupportRoundedIcon " />
              </center>
            </div>
            <div className="mx-auto">
              <p className="text-center">Are Your Sure You want to Delete ?</p>
            </div>
          </div>
        </ListItem>
        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <div className="d-flex">
            <div>
              <button className="cancel px-3 py-2 ms-3">Cancel</button>{" "}
            </div>
            <div>
              <button className="button1 px-3 py-2 ms-5">Confirm</button>{" "}
            </div>
          </div>
        </ListItem>{" "}
      </List>{" "}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function DeletePopup() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <div className="ml-2 icon-popup">
        <DeleteOutlineOutlinedIcon onClick={handleClickOpen} />
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />{" "}
    </div>
  );
}

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
import { Button } from "react-bootstrap";

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
      <DialogTitle className="mx-auto">
        Add&nbsp;New&nbsp;Category
      </DialogTitle>{" "}
      <List
        sx={{
          pt: 0,
        }}
      >
        {" "}
        <ListItem>
          {" "}
          <div className="">
            <label
              for="validationDefaultUsername"
              class="form-label listingtype"
            >
              Amenities
            </label>
            <input
              type="text"
              className="form-control w-100  input-forms-basic-detail listingtypeinput1"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              placeholder="Add Amenities"
              required
            />
          </div>
        </ListItem>
        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <Button
            className="basicdetailsbtnAmenities px-5 py-2 mx-auto"
            size="xl"
            active
          >
            Add
          </Button>{" "}
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

export default function CategoryPopup() {
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
      <Button
        className="basicdetailsbtnAmenities px-5 py-2"
        size="xl"
        active
        onClick={handleClickOpen}
      >
        Add&nbsp;New&nbsp;Category
      </Button>{" "}
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />{" "}
    </div>
  );
}

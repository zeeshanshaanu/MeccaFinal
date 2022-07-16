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
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { blue } from "@mui/material/colors";
import { Button, Form } from "react-bootstrap";

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
      <DialogTitle className="mx-auto">Edit&nbsp;Amenities</DialogTitle>{" "}
      <List
        sx={{
          pt: 0,
        }}
      >
        {" "}
        <ListItem>
          {" "}
          <div>
            <div className="">
              <label
                for="validationDefaultUsername"
                class="form-label listingtype"
              >
                Add Category
              </label>
              <Form.Select
                className="w-100 listingtypeinput1 px-2 py-2"
                placeholder="3"
              >
                <option>ABC</option>
                <option>ABC</option>
                <option>ABC</option>
              </Form.Select>
            </div>
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
            Update
          </Button>{" "}
        </ListItem>{" "}
      </List>{" "}
    </Dialog>
    // hello
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function EditPopup() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  // hello
  // hello
  // hello
  return (
    <div>
      <div className="icon-popup">
        <ModeEditOutlinedIcon onClick={handleClickOpen} />
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />{" "}
    </div>
  );
}

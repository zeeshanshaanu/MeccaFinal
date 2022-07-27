import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Form } from "react-bootstrap";
//
//
//
const CategFilterPopup = () => {
    //////////=============////////////////========///////
    //////////=============////////////////========///////
    //////////=============////////////////========///////
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="FilterIcon ms-3 px-2" onClick={handleClickOpen}>
        <FilterAltIcon />
        <span>Filter</span>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="fw-bolder ">Category Search</DialogTitle>
        <DialogContent>
          <DialogContentText className="fw-bolder">
            please enter the start and end date for search category
          </DialogContentText>
          <div className="mt-4">
            <label htmlFor="">Start Date</label>
            <Form.Control
              type="date"
              name=""
              id=""
              className="input-feild"
              placeholder="Date here"
            />
            <br />
          </div>
          {/*  */}
          {/*  */}
          <div className="">
            <label htmlFor="">End Date</label>
            <Form.Control
              type="date"
              name=""
              id=""
              className="input-feild"
              placeholder="Date here"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button className="text-dark" onClick={handleClose}>Cancel</Button>
          <Button className="text-dark" onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CategFilterPopup;

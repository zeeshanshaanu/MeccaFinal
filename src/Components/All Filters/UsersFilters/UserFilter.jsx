import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import { Button } from "react-bootstrap";
// import "./NotificationIcon.css";
import CloseIcon from "@mui/icons-material/Close";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Hint } from "react-autocomplete-hint";
import axios from "axios";
///////=============//////////////=============//////
///////=============//////////////=============//////
const options = [];

function valuetext(value) {
  return `${value}°C`;
}
function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {console.log(value)}
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = styled(Slider)({
  color: "#014876",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#FF8C00",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
///////=============//////////////=============//////
///////=============//////////////=============//////

export default function UserFilter() {
  ///////=============//////////////=============//////
  ///////=============//////////////=============//////
  const [show, setshow] = useState(true);
  const [address, setaddress] = useState("");
  const [locationtogle, setlocationtogle] = useState(false);
  const [pricerangetogle, setpricerangetogle] = useState(false);
  const [daterangetogle, setdaterangetogle] = useState(false);
  const [bedroomsrangetogle, setbedroomsrangetogle] = useState(false);
  const [bathroomsrangetogle, setbathroomsrangetogle] = useState(false);
  const [garagesrangetogle, setgaragesrangetogle] = useState(false);
  const [kitchentoggle, setkitchentoggle] = useState(false);
  const [byameneties, setbyameneties] = useState(false);
  const [listedby, setlistedby] = useState(false);
  const [statusby, setstatusby] = useState(false);
  const [errormessage, seterrormessage] = useState("");
  const [ameneties, setameneties] = useState([]);
  const [tags, setTags] = useState([]);
  const [mindate, setmindate] = useState("");
  const [maxdate, setmaxdate] = useState("");
  const [added_by, setadded_by] = useState("");
  const [claim_status, setclaim_status] = useState("");
  ///////=============//////////////=============//////
  ///////=============//////////////=============//////
  const [valueprice, setValueprice] = useState([20, 37]);
  const [bedroomsvalue, setbedroomsvalue] = useState([0, 2]);
  const [bathrooms, setbathrooms] = useState([0, 2]);
  const [garages, setgarages] = useState([0, 2]);
  const [kitchenvalue, setkitchenvalue] = useState([0, 2]);
  const [pricerange, setpricerange] = useState([]);
  const [Text, setText] = useState("");
  const handleChange = (event, newValue) => {
    console.log("Price");
    console.log(newValue);
    setValueprice(newValue);
  };
  const handleChangeBathrooms = (event, newValue) => {
    console.log(newValue);
    setbathrooms(newValue);
  };
  const handleChangeBedrooms = (event, newValue) => {
    console.log(newValue);
    setbedroomsvalue(newValue);
  };
  const handlekitchen = (event, newValue) => {
    console.log(newValue);
    setkitchenvalue(newValue);
  };
  const handleChangeGarages = (event, newValue) => {
    console.log(newValue);
    setgarages(newValue);
  };
  const [lat, setlat] = useState("");
  const [long, setlong] = useState("");
  const handleSelect = async (value) => {
    console.log(value);
    geocodeByAddress(value)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        setlat(latLng.lat);
        setlong(latLng.lng);
      })
      .catch((error) => console.error("Error", error));

    setaddress(value);
  };
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
    setText("");
  };
  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
    console.log(tags && tags);
  };
  ///////=============//////////////=============//////
  ///////=============//////////////=============//////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <span
        className="pb-4"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FilterAltIcon className="" /> Filter
      </span>
      <Menu
        className="height-menu px-4"
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="px-4">
          {show ? (
            <div className="d-flex flex-column wrapr">
              <div className="d-flex justify-content-between">
                <div className="me-5">
                  <h5>Filter&nbsp;Your&nbsp;Search</h5>
                </div>
                <div className="my-auto icnclose ml-5">
                  <CloseIcon onClick={handleClose} className="forcolor" />
                </div>
              </div>

              {/* ///Location/// */}
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">Location</small>
                    <Switch onClick={() => setlocationtogle(!locationtogle)} />
                  </div>
                </div>
                {locationtogle ? (
                  <div className="">
                    <PlacesAutocomplete
                      value={address}
                      onChange={setaddress}
                      onSelect={handleSelect}
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <div>
                          <input
                            className="form-control"
                            {...getInputProps({
                              placeholder: "Type address",
                            })}
                            required
                          />
                          <div>
                            {loading ? <div>...loading</div> : null}
                            {suggestions.map((suggestion) => {
                              const style = {
                                backgroundColor: suggestion.active
                                  ? "#7d59e6"
                                  : "#fff",
                                color: suggestion.active ? "#fff" : "black",
                              };
                              return (
                                <div
                                  key={suggestion.id}
                                  {...getSuggestionItemProps(suggestion, {
                                    style,
                                  })}
                                  className="adresdesc"
                                >
                                  {suggestion.description}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </div>
                ) : null}
              </div>
              {/* ///Price Range/// */}
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">Name</small>
                    <Switch
                      onClick={() => setpricerangetogle(!pricerangetogle)}
                    />
                  </div>
                </div>
                {pricerangetogle ? (
                  <div>
                  <input type="text" className="form-control" placeholder="Enter Name here" />
                  </div>
                ) : null}
              </div>
              {/* ///Date Added/// */}
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">Date</small>
                    <Switch
                      onClick={() => setdaterangetogle(!daterangetogle)}
                    />
                  </div>
                </div>
                {daterangetogle ? (
                  <div>
                    <form>
                      <div className="d-flex">
                        <span className="me-4">
                          <label for="startDate" className="">
                            From
                          </label>
                          <input
                            id="startDate"
                            class="form-control form-date m"
                            type="date"
                            onChange={(e) => setmindate(e.target.value)}
                          />
                        </span>
                        <span className="my-auto ml-3">
                          <label for="startDate" className="">
                            To
                          </label>
                          <input
                            id="startDate"
                            class="form-control form-date"
                            type="date"
                            onChange={(e) => setmaxdate(e.target.value)}
                          />
                        </span>
                        <span></span>
                      </div>
                    </form>
                  </div>
                ) : null}
              </div>
              {/* ///Kitchen/// */}
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">Kitchens</small>
                    <Switch onClick={() => setkitchentoggle(!kitchentoggle)} />
                  </div>
                </div>
                {kitchentoggle ? (
                  <div>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={kitchenvalue}
                      onChange={handlekitchen}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      className="slidercolor"
                      max="5"
                    />
                  </div>
                ) : null}
              </div>
              {/* ///Bed Rooms/// */}
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">Bed Rooms</small>
                    <Switch
                      onClick={() => setbedroomsrangetogle(!bedroomsrangetogle)}
                    />
                  </div>
                </div>
                {bedroomsrangetogle ? (
                  <div>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={bedroomsvalue}
                      onChange={handleChangeBedrooms}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      className="slidercolor"
                      max="5"
                    />
                  </div>
                ) : null}
              </div>
              {/* ///Bath Rooms/// */}
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">Bath Rooms</small>
                    <Switch
                      onClick={() =>
                        setbathroomsrangetogle(!bathroomsrangetogle)
                      }
                    />
                  </div>
                </div>
                {bathroomsrangetogle ? (
                  <div>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={bathrooms}
                      onChange={handleChangeBathrooms}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      className="slidercolor"
                      max="5"
                    />
                  </div>
                ) : null}
              </div>
              {/* ///Garages/// */}
              <div className="d-flex flex-column">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">Garages</small>
                    <Switch
                      onClick={() => setgaragesrangetogle(!garagesrangetogle)}
                    />
                  </div>
                </div>
                {garagesrangetogle ? (
                  <div>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={garages}
                      onChange={handleChangeGarages}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      className="slidercolor"
                      max="5"
                    />
                  </div>
                ) : null}
              </div>
              {/* ///By Amenities/// */}
              <div className="d-flex flex-column">
                <p>
                  {ameneties.amenities &&
                    ameneties.amenities.map((data) => (
                      <small key={data}>{data}</small>
                    ))}
                </p>
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">By Amenities</small>
                    <Switch onClick={() => setbyameneties(!byameneties)} />
                  </div>
                </div>
                {byameneties ? (
                  <div>
                    <div className="tags-input-container">
                      {tags &&
                        tags.map((tag, index) => (
                          <div className="tag-item" key={index}>
                            <span className="text">{tag}</span>
                            <span
                              className="close"
                              onClick={() => removeTag(index)}
                            >
                              &times;
                            </span>
                          </div>
                        ))}
                      <Hint options={options}>
                        <input
                          type="text"
                          className="tags-input"
                          placeholder="Type Ameneties"
                          onKeyDown={handleKeyDown}
                          value={Text}
                          onChange={(e) => setText(e.target.value)}
                        />
                      </Hint>
                    </div>
                    <small className="text-danger">{errormessage}</small>
                  </div>
                ) : null}
              </div>
              {/* ///Added by/// */}
              <div className="d-flex flex-column mt-3">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">Added By</small>
                    <Switch onClick={() => setlistedby(!listedby)} />
                  </div>
                </div>
                {listedby ? (
                  <div>
                    <div className="form-check mt-1 d-flex flex row">
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="admin"
                          control={<Radio />}
                          label="Admin"
                          onClick={() => setadded_by("admin")}
                        />
                        <FormControlLabel
                          value="agent"
                          control={<Radio />}
                          label="Agent"
                          onClick={() => setadded_by("agent")}
                        />
                        <FormControlLabel
                          value="complex agent"
                          control={<Radio />}
                          label="Complex Agent"
                          onClick={() => setadded_by("complex agent")}
                        />
                      </RadioGroup>
                    </div>
                  </div>
                ) : null}
              </div>
              {/* ///Status/// */}
              <div className="d-flex flex-column mt-3">
                <div>
                  <div className="d-flex justify-content-between">
                    <small className="mt-1">Status</small>
                    <Switch onClick={() => setstatusby(!statusby)} />
                  </div>
                </div>
                {statusby ? (
                  <div>
                    <div className="form-check mt-1 d-flex flex row">
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="claimed"
                          control={<Radio />}
                          label="Claimed"
                          onClick={() => setclaim_status("claimed")}
                        />
                        <FormControlLabel
                          value="unclaimed"
                          control={<Radio />}
                          label="UnClaimed"
                          onClick={() => setclaim_status("unclaimed")}
                        />
                      </RadioGroup>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
          <hr />
          <div className="d-flex justify-content-end ">
            <Button
              className="filterbuttonprop "
              //   onClick={() => handleSubmit()}
              variant="outlined"
            >
              Apply
            </Button>
          </div>
        </div>
      </Menu>
    </div>
  );
}

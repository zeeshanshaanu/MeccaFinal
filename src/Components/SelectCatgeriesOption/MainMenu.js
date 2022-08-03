import React from "react";
import { useNavigate } from "react-router-dom";
// MUI DROP DOWN MENU
import { styled, alpha } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const MainMenu = () => {
  const navigate = useNavigate();
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
      <div className="mb-5">
        <Button
          className="SelectCategories"
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          <small>Select&nbsp;Categories</small>
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              navigate("/AppSetings");
            }}
            disableRipple
            className="hovereffect"
          >
            Services Categories
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/AllShopCategories");
            }}
            disableRipple
            className="hovereffect"
          >
            Shop&nbsp;Categories
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/AllProductCategories");
            }}
            disableRipple
            className="hovereffect"
          >
            Product&nbsp;Categories
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/Varients");
            }}
            disableRipple
            className="hovereffect"
          >
            Variants Types
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/Tags");
            }}
            disableRipple
            className="hovereffect"
          >
            Tags
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/Blogs");
            }}
            disableRipple
            className="hovereffect"
          >
            Blog Categories
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/AllEventCategories");
            }}
            disableRipple
            className="hovereffect"
          >
            Event Categories
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/AllFaqs");
            }}
            disableRipple
            className="hovereffect"
          >
            Community Categories
          </MenuItem>
        </StyledMenu>
      </div>
    </div>
  );
};

export default MainMenu;

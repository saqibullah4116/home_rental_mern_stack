import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { InputBase } from "@mui/material";
import { PersonSharp, Search } from "@mui/icons-material";
import { setLogOut } from "../redux/state";

const Navbar = () => {
  //--------------- handling drop down menu
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = useSelector((state) => state.user);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //--------------- loging out
  const dispatch = useDispatch();
  const handleMenuItemClick = (label) => {
    if (label === "Log Out") {
      dispatch(setLogOut());
    }
  };

  //------------- drop down menu option and coniditional rendering based on user login/logout
  const menuItems = user
    ? [
        { label: "Trip List", path: "/trip-list" },
        { label: "Wish List", path: "/wish-list" },
        { label: "Property List", path: "/property-list" },
        { label: "Reservation List", path: "/property-list" },
        { label: "Become A Host", path: "/create-listing" },
        { label: "Log Out", path: "/login" },
      ]
    : [
        { label: "Sign Up", path: "/register" },
        { label: "Log In", path: "/login" },
      ];

  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Link to="/">
              <img
                src="/assets/logo.png"
                alt="Logo"
                width="80px"
                height="60px"
              ></img>
            </Link>
            <Box
              sx={{
                ml: 8, // Add margin between logo and search
                borderRadius: 20,
                border: "1px solid #ccc",
                overflow: "hidden",
                display: { xs: "none", sm: "block" },
              }}
            >
              <InputBase placeholder="Search" sx={{ paddingLeft: 2 }} />
              <IconButton type="button" sx={{ p: 1 }}>
                <Search />
              </IconButton>
            </Box>
          </Box>

          <Box display={"flex"}>
            {user ? (
              <Box padding={2}>
                <Link to={"/create-listing"} style={{ textDecoration: "none" }}>
                  <Typography color={"black"} fontWeight={"bold"}>
                    Become A Host
                  </Typography>
                </Link>
              </Box>
            ) : (
              <Box padding={2}>
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  <Typography color={"black"} fontWeight={"bold"}>
                    Become a host
                  </Typography>
                </Link>
              </Box>
            )}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost:4000/${user?.profileImagePath?.replace(
                      "public",
                      ""
                    )}`}
                    style={{
                      border: "2px solid lightgray",
                    }}
                  />
                ) : (
                  <Avatar
                    alt="Remy Sharp"
                    style={{
                      border: "2px solid lightgray",
                    }}
                  >
                    <PersonSharp />
                  </Avatar>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", right: 0 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {menuItems.map((menuItem) => (
                <MenuItem key={menuItem.label} onClick={handleCloseUserMenu}>
                  <Link
                    to={menuItem.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={() => handleMenuItemClick(menuItem.label)}
                  >
                    <Typography textAlign="center">{menuItem.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

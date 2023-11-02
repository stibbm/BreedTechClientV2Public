import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { styled, useTheme } from "@mui/material/styles";
import {
  ACTION_TYPES,
  APPOINTMENTS,
  HEADER_ROUTES_MAP,
  HORSES,
  STALLS,
  USERS,
} from "../../constants/Pages";
import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  ListItem,
  Divider,
  List,
  ListItemButton,
} from "@mui/material";
import OpenDrawerIconButton from "./OpenDrawerIconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddHomeIcon from "@mui/icons-material/AddHome";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import GroupIcon from "@mui/icons-material/Group";
import SnowmobileTwoToneIcon from '@mui/icons-material/SnowmobileTwoTone';

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));



const Header = (props) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const closeDrawer = async () => {
    await setOpen(false);
  };
  const openDrawer = async () => {
    await setOpen(true);
  };
  const goToPage = async (page) => {
    const path = await HEADER_ROUTES_MAP[page];
    await closeDrawer();
    await navigate({ pathname: path });
  };
  const goToStallsPage = async () => {
    await goToPage(STALLS);
  };
  const goToHorsesPage = async () => {
    await goToPage(HORSES);
  };
  const goToAppointmentsPage = async () => {
    await goToPage(APPOINTMENTS);
  };
  const goToActionTypesPage = async () => {
    await goToPage(ACTION_TYPES);
  };
  const goToUsersPage = async () => {
    await goToPage(USERS);
  };
  return (
    <div className="Header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <OpenDrawerIconButton handleOpenDrawer={openDrawer}>
              <MenuIcon />
            </OpenDrawerIconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: "1", display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            Pages
            <IconButton onClick={closeDrawer}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem key={"Horses"}
              selected={"/horses" === pathname}
            >
              <ListItemButton onClick={goToHorsesPage}
                selected={"/horses" === pathname}
              >
                <ListItemIcon>
                  <BedroomBabyIcon />
                  Horses
                </ListItemIcon>
              </ListItemButton>

            </ListItem>
            <ListItem key={"Stalls"}>
              <ListItemButton onClick={goToStallsPage}
                selected={"/stalls" === pathname}
              >
                <ListItemIcon>
                  <AddHomeIcon />
                  Stalls
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem key={"Appointments"}>
              <ListItemButton onClick={goToAppointmentsPage}
                selected={"/appointments" === pathname}
              >
                <ListItemIcon>
                  <CalendarMonthIcon />
                  Appointments
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem key={"Action Types"}>
              <ListItemButton onClick={goToActionTypesPage}
                selected={"/actionTypes" === pathname}
              >
                <ListItemIcon>
                  <EmojiPeopleIcon />
                  Action Types
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem key={"Users"}>
              <ListItemButton onClick={goToUsersPage}
                selected={"/users" === pathname}
              >
                <ListItemIcon>
                  <GroupIcon />
                  Users
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </div>
  );
};
export default Header;

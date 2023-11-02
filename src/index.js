import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./page/login/LoginPage";
import HorsesPage from "./page/horse/HorsesPage";
import Header from "./shared/header/Header";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import StallsPage from "./page/stalls/StallsPage";
import StallDetailsPage from "./page/stalls/details/StallDetailsPage";
import AppointmentsPage from "./page/appointment/AppointmentsPages";
import AppointmentDetailsPage from "./page/appointment/details/AppointmentDetails";
import HorseDetailsPage from "./page/horse/details/HorseDetailsPage";
import ActionTypesPage from "./page/actiontype/ActionTypesPage";
import ActionTypeDetailsPage from "./page/actiontype/details/ActionTypeDetailsPage";
import UsersPage from "./page/users/UsersPage";
import TestPage from "./page/test/TestPage";
import TestCalendar from "./page/test/calendar/TestCalendar";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/test",
    element: (
      <ThemeProvider theme={theme}>
        <TestPage />
      </ThemeProvider>
    ),
  },
  {
    path: '/testcal',
    element: (
      <ThemeProvider theme={theme}>
        <Header />
        <TestCalendar></TestCalendar>
      </ThemeProvider>
    )
  },
  {
    path: "/",
    element: (
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    ),
  },
  {
    path: "/horses",
    element: (
      <ThemeProvider theme={theme}>
        <Header />
        <HorsesPage />
      </ThemeProvider>
    ),
  },
  {
    path: "/stalls",
    element: (
      <ThemeProvider theme={theme}>
        <Header />
        <StallsPage />
      </ThemeProvider>
    ),
  },
  {
    path: "/stallDetails",
    element: (
      <ThemeProvider theme={theme}>
        <Header />
        <StallDetailsPage />
      </ThemeProvider>
    ),
  },
  {
    path: "/appointments",
    element: (
      <ThemeProvider theme={theme}>
        <Header />
        <AppointmentsPage />
      </ThemeProvider>
    ),
  },
  {
    path: "/horseDetails",
    element: (
      <ThemeProvider theme={theme}>
        <Header />
        <HorseDetailsPage />
      </ThemeProvider>
    ),
  },
  {
    path: "/appointmentDetails",
    element: (
      <ThemeProvider theme={theme}>
        <Header />
        <AppointmentDetailsPage />
      </ThemeProvider>
    ),
  },
  {
    path: "/actionTypes",
    element: (
      <ThemeProvider theme={theme}>
        <Header />
        <ActionTypesPage />
      </ThemeProvider>
    ),
  },
  {
    path: "/actionTypeDetails",
    element: (
      <ThemeProvider theme={theme}>
        <Header />
        <ActionTypeDetailsPage />
      </ThemeProvider>
    ),
  },
  {
    path: "/users",
    element: (
      <ThemeProvider theme={theme}>
        <Header />
        <UsersPage />
      </ThemeProvider>
    ),
  },

]);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

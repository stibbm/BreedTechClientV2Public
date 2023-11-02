import {
  getGetAppointmentsByHorseIdUrl,
  getGetAppointmentsV2Url,
} from "./ApiUrlService";
import { getAuthenticatedHeaders } from "./AuthService";
import { convertAppointmentV2sListToAppointmentsList } from "./AppointmentAdapter";
import {
  getGetAppointmentV2ByIdUrl,
  getCreateAppointmentUrl,
  getUpdateAppointmentStatusUrl,
  getGetAppointmentAmountDueUrl
} from "./ApiUrlService";
import { convertAppointmentV2ToAppointment } from "./AppointmentAdapter";
import { getHorseByRegistrationNumber } from "./HorseService";
import moment from "moment";

export async function getAppointmentsV2List() {
  const url = await getGetAppointmentsV2Url();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  return await responseJson["appointmentsList"];
}

export async function getAppointmentsList() {
  const appointmentsV2List = await getAppointmentsV2List();
  console.log(appointmentsV2List);
  const appointmentsList = await convertAppointmentV2sListToAppointmentsList(
    appointmentsV2List
  );
  return appointmentsList;
}

export async function getAppointmentV2ById(appointmentId) {
  const url = await getGetAppointmentV2ByIdUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ id: appointmentId }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  return responseJson["appointmentV2"];
}

export async function getAppointmentById(appointmentId) {
  const appointmentV2 = await getAppointmentV2ById(appointmentId);
  return await convertAppointmentV2ToAppointment(appointmentV2);
}

/**
 * Request format:
 *
 * url: /createAppointmentV2
 *
 * horseId: number
 * notificationsPhoneNumber: string
 * reason: string
 * userId: number
 *
 */
export async function createAppointment({ user, horse, reason, phoneNumber }) {
  const url = await getCreateAppointmentUrl();
  const headers = await getAuthenticatedHeaders();
  const registrationNumber = await horse.registrationNumber;
  const horseByRegNum = await getHorseByRegistrationNumber(registrationNumber);
  const horseId = await horseByRegNum.id;
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      horseId: horseId,
      notificationsPhoneNumber: phoneNumber,
      reason: reason,
      userId: user.id,
    }),
  };
  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    const responseStatus = response.status;
    const statusText = response.statusText;
    const text = await response.text();
    console.log(text);
    alert(text);
    throw new Error(text);
  }
  const responseJson = await response.json();
  const appointment = await responseJson["appointment"];
  return appointment;
}

export async function checkIn(appointmentId) {
  console.log("appointmentId");
  const url = await getUpdateAppointmentStatusUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      appointmentId,
      updatedStatus: "CheckedIn",
    }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const updatedAppointment = await responseJson["appointment"];
  const newAppointmentStatus = await updatedAppointment["status"];
  return updatedAppointment;
}

export async function complete(appointmentId) {
  console.log("appointmentId");
  const url = await getUpdateAppointmentStatusUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      appointmentId,
      updatedStatus: "Complete",
    }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const updatedAppointment = await responseJson["appointment"];
  const newAppointmentStatus = await updatedAppointment["status"];
  return updatedAppointment;
}

export async function convertTimestampToDateTime(timestamp) {
  var date = new Date(timestamp);
  console.log(date);
  var formattedDate = moment(date).formate("dd.mm.yyyy hh:MM:ss]");
  console.log("formattedDate");
  console.log(formattedDate);
  return formattedDate;
}

async function convertTimestampToDateTimeForAppointmentsList(appointmentsList) {
  const updatedList = [];
  for (var i = 0; i < appointmentsList.length; i++) {
    const currentAppointment = await appointmentsList[i];
    console.log("currentAppointment");
    console.log(currentAppointment);
    //await convertTime
    //const currentTimestamp = "";
  }
}

export async function convertToFormattedDateString(day, month, year) { }

/**
 * Request format:
 *
 * horseId: number
 */
export async function getAppointmentsByHorseId(horseId) {
  const url = await getGetAppointmentsByHorseIdUrl();
  const headers = await getAuthenticatedHeaders();
  const horseIdNumber = Number(horseId);
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      horseId: horseIdNumber,
    }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const appointmentsList = await responseJson["appointmentsList"];
  return appointmentsList;
}

/**
 * appointmentId: number
 */
/**
 * 
 * Response: 
 * {
 * appointmentId: number,
 * appointmentActionsList: List[]
 * }
 */
/*
export async function getAppointmentAmountDue(appointmentId) {
  const appointmentIdNumber = Number(appointmentId);
  const url = await getGetAppointmentAmountDueUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      appointmentId: appointmentIdNumber
    })
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const 
}*/

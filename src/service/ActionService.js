import {
  getCreateAppointmentActionByActionTypeIdUrl,
  getGetAppointmentActionsByAppointmentIdV2Url,
} from "./ApiUrlService";
import { getAuthenticatedHeaders } from "./AuthService";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

/**
 * Request payload
 *
 * appointmentActionTypeId: number
 * appointmentId: string
 */
export async function createActionByAppointmentIdAndActionTypeId(
  appointmentId,
  actionTypeId
) {
  const actionTypeIdNumber = await Number(actionTypeId);
  const appointmentIdString = await appointmentId.toString();
  const url = await getCreateAppointmentActionByActionTypeIdUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      appointmentActionTypeId: actionTypeIdNumber,
      appointmentId: appointmentIdString,
    }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const appointmentAction = await responseJson["appointmentAction"];
  return appointmentAction;
}

export async function getActionsByAppointmentIdV2(appointmentId) {
  console.log("getActionsByAppointmentIdV2");
  console.log(appointmentId);
  const url = await getGetAppointmentActionsByAppointmentIdV2Url();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      appointmentId: Number(appointmentId),
    }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  console.log(responseJson);
  const actionsList = await responseJson["appointmentActionsList"];
  return actionsList;
}

export async function getActionsByAppointmentId(appointmentId) {
  console.log("getActionsByAppointmentId");
  console.log(appointmentId);
  const actionsList = await getActionsByAppointmentIdV2(appointmentId);
  return actionsList;
}

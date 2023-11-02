import { getGetAppointmentActionTypeDisplayablesListUrl } from "./ApiUrlService";
import { getAuthenticatedHeaders } from "./AuthService";
import { convertAppointmentActionTypeDisplayablesListToActionTypesList } from "./adapter/ActionTypeAdapter";
import { getCreateActionTypeUrl } from "./ApiUrlService";

export async function getAppointmentActionTypeDisplayablesList() {
  const url = await getGetAppointmentActionTypeDisplayablesListUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  console.log("appointmentActionTypeDisplayablesList");
  console.log(responseJson);
  return await responseJson["appointmentActionTypeDisplayablesList"];
}
export async function getActionTypesList() {
  const appointmentActionTypeDisplayablesList =
    await getAppointmentActionTypeDisplayablesList();
  console.log("appointmentActionTypeDisplayableList");
  console.log(appointmentActionTypeDisplayablesList);
  const actionTypesList =
    await convertAppointmentActionTypeDisplayablesListToActionTypesList(
      appointmentActionTypeDisplayablesList
    );
  console.log("actionTypes list after converted");
  console.log(actionTypesList);
  return actionTypesList;
}

export async function getActionTypeById(actionTypeId) {
  const actionTypesList = await getActionTypesList();
  for (var i = 0; i < actionTypesList.length; i++) {
    const currActionType = actionTypesList[i];
    if (currActionType.id.toString() === actionTypeId.toString()) {
      return currActionType;
    }
  }
  throw new Error("Could not find the specified action type id");
}

export async function createActionType({
  amountString,
  description,
  name,
  smsMessage,
}) {
  const amountNumber = Number(amountString);
  const amountCents = amountNumber * 100;
  const url = await getCreateActionTypeUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      description,
      amountCents,
      smsMessage,
    }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const actionType = await responseJson["appointmentActionType"];
  return actionType;
}

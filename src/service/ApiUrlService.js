const BASE_URL = "http://localhost:9123";

export async function getLoginUrl() {
  return BASE_URL + "/login";
}

export async function getGetHorsesWithLocationsListUrl() {
  return BASE_URL + "/getHorsesWithLocation";
}

export async function getGetAppointmentsList() {
  return BASE_URL + "/getAppointmentsList";
}

export async function getGetAllStallsOccupancy() {
  return BASE_URL + "/getAllStallsOccupancy";
}

export async function getGetHorseByRegistrationNumberUrl() {
  return BASE_URL + "/getHorseByRegistrationNumber";
}

export async function getGetAppointmentsV2Url() {
  return BASE_URL + "/getAppointmentsV2";
}

export async function getGetAppointmentV2ByIdUrl() {
  return BASE_URL + "/getAppointmentV2ById";
}

export async function getGetAppointmentActionTypeDisplayablesListUrl() {
  return BASE_URL + "/getAppointmentActionTypeDisplayables";
}

export async function getGetUsersUrl() {
  return BASE_URL + "/getUsers";
}

export async function getCreateHorseUrl() {
  return BASE_URL + "/createHorse";
}

export async function getCreateHorseSimpleUrl() {
  return BASE_URL + "/createHorseSimple";
}

export async function getCreateStallSimpleUrl() {
  return BASE_URL + "/createStallSimple";
}

export async function getCreateActionTypeUrl() {
  return BASE_URL + "/createAppointmentActionType";
}

export async function getCreateAppointmentUrl() {
  return BASE_URL + "/createAppointmentV2";
}

export async function getCreateUserV2Url() {
  return BASE_URL + "/createUserV2";
}

export async function getGetHorseWithActiveAppointmentUrl() {
  return BASE_URL + "/getHorseWithActiveAppointment";
}

export async function getUpdateHorseFamilyUrl() {
  return BASE_URL + "/updateHorseFamily";
}

export async function getUpdateAppointmentStatusUrl() {
  return BASE_URL + "/updateAppointmentStatus";
}

export async function getCreateAppointmentActionByActionTypeIdUrl() {
  return BASE_URL + "/createAppointmentActionByActionTypeId";
}

export async function getGetAppointmentActionsByAppointmentIdV2Url() {
  return BASE_URL + "/getAppointmentActionsByAppointmentIdV2";
}

export async function getGetAppointmentActionsByAppointmentIdUrl() {
  return BASE_URL + "/getAppointmentActionsByAppointmentId";
}

export async function getGetHorsesWithActiveAppointmentUrl() {
  return BASE_URL + "/getHorsesWithActiveAppointment";
}

export async function getGetAppointmentsByHorseIdUrl() {
  return BASE_URL + "/getAppointmentsByHorseId";
}

export async function getMoveHorseUrl() {
  return BASE_URL + "/moveHorse";
}

export async function getGetAppointmentAmountDueUrl() {
  return BASE_URL + "/getAppointmentAmountDue";
}
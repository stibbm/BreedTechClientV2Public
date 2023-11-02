import {
  getCreateHorseUrl,
  getGetHorseByRegistrationNumberUrl,
  getGetHorsesWithLocationsListUrl,
  getUpdateHorseFamilyUrl,
  getGetHorsesWithActiveAppointmentUrl,
  getMoveHorseUrl,
} from "./ApiUrlService";
import { getAuthenticatedHeaders } from "./AuthService";
import { convertHorsesWithLocationListToHorsesList } from "./adapter/HorseAdapter";
import { sortHorsesAlphabeticallyByName } from "./sort/SortHorses";

export async function getHorsesWithLocationsList() {
  const url = await getGetHorsesWithLocationsListUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  return await responseJson["horsesWithLocationList"];
}

export async function getHorsesList() {
  const horsesWithLocationsList = await getHorsesWithLocationsList();
  return convertHorsesWithLocationListToHorsesList(horsesWithLocationsList);
}

export async function getHorseWithLocationByRegistrationNumber(
  registrationNumber
) {
  const horsesWithLocationsList = await getHorsesList();
  for (var i = 0; i < horsesWithLocationsList.length; i++) {
    const horseWithLocation = await horsesWithLocationsList[i];
    const horseWithLocationRegistrationNumber = await horseWithLocation[
      "registrationNumber"
    ];
    if (horseWithLocationRegistrationNumber === registrationNumber) {
      return horseWithLocation;
    }
  }
  throw new Error("Could not find horse with that id");
}

export async function getStallionsList() {
  const horsesList = await getHorsesList();
  const stallionsList = [];
  for (var i = 0; i < horsesList.length; i++) {
    const horse = await horsesList[i];
    const isStallion = await horse["isStallion"];
    if (isStallion === "Stallion") {
      stallionsList.push(horse);
    }
  }
  return stallionsList;
}

export async function getMaresList() {
  const horsesList = await getHorsesList();
  const maresList = [];
  for (var i = 0; i < horsesList.length; i++) {
    const horse = await horsesList[i];
    const isStallion = horse["isStallion"];
    if (isStallion === "Mare") {
      maresList.push(horse);
    }
  }
  return maresList;
}

export async function getHorseByRegistrationNumber(registrationNumber) {
  const url = await getGetHorseByRegistrationNumberUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      horseRegistrationNumber: registrationNumber,
    }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  return await responseJson["horse"];
}

export async function getHorseByRegistrationNumberWithLocation(
  registrationNumber
) {
  const horse = await getHorseByRegistrationNumber(registrationNumber);
  const horseRegistrationNumber = await horse["registrationNumber"];
  const horseWithLocation = await getHorseWithLocationByRegistrationNumber(
    horseRegistrationNumber
  );
  const outputHorse = {
    ...horse,
    stallId: horseWithLocation.stallId,
  };
  return outputHorse;
}

export async function createHorse(name, registrationNumber, horseType, user) {
  const isStallion = horseType === "Stallion";
  const ownerUserId = await user["id"];
  const url = await getCreateHorseUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name: name,
      registrationNumber: registrationNumber,
      isStallion: isStallion,
      dam: "-1",
      sire: "-1",
      damSire: "-1",
      ownerUserId: ownerUserId,
    }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const horse = await responseJson["horse"];
  return horse;
}

export async function getHorsesWithActiveAppointmentsList() {
  const url = await getGetHorsesWithActiveAppointmentsUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
}

export async function getHorsesByOwnerId(ownerId) {
  const url = await getHorsesByOwnerIdUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      ownerId: ownerId,
    }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const horsesList = responseJson["horsesList"];
  return horsesList;
}

export async function getHorsesSortedByName() {
  const horsesList = await getHorsesList();
  const sortedHorsesList = await sortHorsesAlphabeticallyByName(horsesList);
  return sortedHorsesList;
}

/**
 * How to add checks that all vars are properly
 * present when passed to a function?
 * @param {} param0
 * @returns
 */
export async function updateHorseFamily({
  horseId,
  relationType,
  relationHorseId,
}) {
  const url = await getUpdateHorseFamilyUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      horseId: horseId.toString(),
      relationType: relationType.toString(),
      relationHorseId: relationHorseId.toString(),
    }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const horse = responseJson["horse"];
  return horse;
}

export async function updateHorseFamilyIdByRegNum({
  horseRegistrationNumber,
  relationType,
  relationHorseRegistrationNumber,
}) {
  const horseWithId = await getHorseByRegistrationNumber(
    horseRegistrationNumber
  );
  const horseWithIdId = await horseWithId["id"];
  const relationHorseWithId = await getHorseByRegistrationNumber(
    relationHorseRegistrationNumber
  );
  const relationHorseWithIdId = await relationHorseWithId["id"];
  const updatedHorse = await updateHorseFamily({
    horseId: horseWithIdId,
    relationType: relationType,
    relationHorseId: relationHorseWithIdId,
  });
  return updatedHorse;
}

export async function getHorsesWithActiveAppointments() {
  const url = await getGetHorsesWithActiveAppointmentUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const horsesList = await responseJson["horsesList"];
  return horsesList;
}

/**
 * Request
 * destinationStallId: number
 * horseId: number
 *
 */
async function moveHorse(destinationStallId, horseId) {
  const destinationStallIdNumber = Number(destinationStallId);
  const horseIdNumber = Number(horseId);
  const url = await getMoveHorseUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      destinationStallId: destinationStallIdNumber,
      horseId: horseIdNumber,
    }),
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const horseLocation = await responseJson["horseLocation"];
  return {
    id: horseLocation.id,
    horseId: horseLocation.horseId,
    timestamp: horseLocation.timestamp,
    stallId: horseLocation.stallId,
  };
}

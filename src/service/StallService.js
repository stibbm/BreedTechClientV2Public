import { NUMBER, STRING, FUNCTION, LIST } from "../constants/MyTypes";
import { getCreateStallSimpleUrl, getGetAllStallsOccupancy } from "./ApiUrlService"
import { getAuthenticatedHeaders } from "./AuthService";

const stallOccupancyType = {
  stallId: NUMBER,
  name: STRING,
  description: STRING,
  capacity: NUMBER,
  companyId: NUMBER,
  horsesList: LIST,
  notes: STRING
}

export async function getStallOccupanciesList() {
  const url = await getGetAllStallsOccupancy();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: 'POST',
    headers: headers
  }
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const stallOccupanciesList = await responseJson['stallOccupanciesList'];
  return stallOccupanciesList;
}

export async function getStallOccupancyByStallId(stallId) {
  const stallOccupanciesList = await getStallOccupanciesList();
  for (var i = 0; i < stallOccupanciesList.length; i++) {
    const currStall = await stallOccupanciesList[i];
    const currStallId = await currStall.stallId;
    if (currStallId.toString() === stallId.toString()) {
      return currStall;
    }
  }
  throw new Error("Stall with the given id was not found");
}

export async function createStall({
  stallName,
  description,
  capacity,
  notes
}) {
  console.log('createStall');
  const url = await getCreateStallSimpleUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      stallName,
      description,
      capacity,
      notes
    })
  }
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  console.log('responseJson stall');
  console.log(responseJson);
  const stall = await responseJson['stall'];
  return stall;
}

// get stalls which are not full
export async function getAvailableStalls() {

}
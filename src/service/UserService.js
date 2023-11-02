import { getCreateUserV2Url, getGetUsersUrl } from "./ApiUrlService";
import { getAuthenticatedHeaders } from "./AuthService";
import { Typography } from "@mui/material";
/**
 *
 * @returns
 * User:
 * accountType: string,
 * companyId: number,
 * creationTimestamp: number,
 * emailAddress: string,
 * firstName: String,
 * lastName: string
 * id: number,
 */
export async function getUsersList() {
  const url = await getGetUsersUrl();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
  };
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  const usersList = await responseJson["usersList"];
  return usersList;
}

// example for how would do this way if wanted to for some reason
export function getUsersListThen() {
  getGetUsersUrl().then((url) => {
    getAuthenticatedHeaders().then((authenticatedHeaders) => {
      const requestOptions = {
        method: "POST",
        headers: authenticatedHeaders,
      };
      fetch(url, requestOptions)
        .then((response) => {
          console.log("response1: ");
          console.log(response);
          return response.json();
        })
        .then((responseJson) => {
          console.log("responseJson");
          console.log(responseJson);
          return responseJson["usersList"];
        })
        .then((usersList) => {
          console.log("usersList");
          console.log(usersList);
        });
    });
  });
}

export async function createUserV2({ emailAddress, firstName, lastName }) {
  const url = await getCreateUserV2Url();
  const headers = await getAuthenticatedHeaders();
  const requestOptions = {
    method: "POST",
    headers: headers,
    requestOptions: {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        emailAddress,
        firstName,
        lastName,
      }),
    },
  };
  /**
   * User:
   * id: number
   * firstName: string
   * lastName: string
   * emailAddress: string
   * companyId: number
   * accountType: string
   * creationTimestamp: number
   */
  const response = await fetch(url, requestOptions);
  const responseJson = await response.json();
  console.log("responseJson: ");
  console.log(responseJson);
  const user = responseJson["user"];
  console.log(user);
  return user;
}

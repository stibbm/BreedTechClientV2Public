import { getLoginUrl } from "./ApiUrlService";
import { AUTH_TOKEN, EMAIL_ADDRESS } from "../constants/Constants";

export async function login(emailAddress, password, navigate) {
  const loginUrl = await getLoginUrl();
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      emailAddress,
      password
    })
  }
  const response = await fetch(loginUrl, requestOptions);
  const responseJson = await response.json();
  const {
    authToken,
    loginSuccessful,
    message
  } = responseJson;
  const authTokenValue = authToken['authToken'];
  if (loginSuccessful) {
    await sessionStorage.setItem(AUTH_TOKEN, authTokenValue);
    await sessionStorage.setItem("emailAddress", EMAIL_ADDRESS);
    await navigate({
      pathname: '/horses'
    })
  }
}

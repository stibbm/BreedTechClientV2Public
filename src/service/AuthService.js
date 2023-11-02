import { AUTH_TOKEN } from "../constants/Constants"

export async function getAuthToken() {
  return await sessionStorage.getItem(AUTH_TOKEN);
}

export async function getAuthenticatedHeaders() {
  const authToken = await getAuthToken();
  return {
    'Content-Type': 'application/json',
    [AUTH_TOKEN]: authToken
  }
}

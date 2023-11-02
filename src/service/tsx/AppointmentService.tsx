import { getGetAppointmentAmountDueUrl } from "../ApiUrlService";
import { getAuthenticatedHeaders } from "../AuthService";

interface GetAppointmentAmountDueRequest {
  appointmentId: number
}

interface Action {
  id: number,
  appointmentId: number,
  description: string,
  smsMessage: string,
  amountCents: number,
  timestamp: number,
  createdByUserId: number,
}

interface Payment {
  id: number,
  appointmentId: number,
  isConfirmed: boolean,
  paymentLinkId: string,
  amountCents: number,
  createdAt: number,
  userId: number
}

interface GetAppointmentAmountDueResponse {
  appointmentId: number,
  appointmentActionsList: Action[],
  paymentsList: Payment[],
  totalAmountDue: number,
  totalAmountPaid: number,
  currentAmountDue: number,
}

export async function getAppointmentAmountDue(request: GetAppointmentAmountDueRequest) {
  const appointmentIdNumber: number = request.appointmentId;
  const url: string = await getGetAppointmentAmountDueUrl();
  const headers: any = await getAuthenticatedHeaders();
  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      appointmentId: appointmentIdNumber
    })
  }
  const response = await fetch(url, requestOptions);
  const responseJson: GetAppointmentAmountDueResponse = await response.json();
  console.log('getAppointmentAmountDueResponse');
  console.log('responseJson');
  console.log(responseJson);
}
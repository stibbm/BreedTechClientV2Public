export async function convertAppointmentV2ToAppointment(input) {
  const id = await input["id"];
  const horse = await input["horse"];
  const horseName = await horse["name"];
  const user = await input["user"];
  const userFirstName = await user["firstName"];
  const userLastName = await user["lastName"];
  const userFirstAndLastName = userFirstName + " " + userLastName;
  const createdByUser = await input["createdByUser"];
  const createdByUserFirstName = await createdByUser["firstName"];
  const createdByUserLastName = await createdByUser["lastName"];
  const createdByUserFirstAndLastName =
    createdByUserFirstName + " " + createdByUserLastName;
  const appointmentStatus = await input["appointmentStatus"];
  const createdAtTimestamp = await input["createdAtTimestamp"];
  const appointment = {
    id,
    horseName,
    userFirstAndLastName,
    createdByUserFirstAndLastName,
    appointmentStatus,
    createdAtTimestamp,
  };
  return appointment;
}

export async function convertAppointmentV2sListToAppointmentsList(
  appointmentV2sList
) {
  const appointmentsList = [];
  for (const appointmentV2 of appointmentV2sList) {
    const appointment = await convertAppointmentV2ToAppointment(appointmentV2);
    appointmentsList.push(appointment);
  }
  return appointmentsList;
}

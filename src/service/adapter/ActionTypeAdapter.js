export function convertAppointmentActionTypeDisplayableToActionType(appointmentActionTypeDisplayable) {
    const actionType = {
        id: appointmentActionTypeDisplayable['id'],
        name: appointmentActionTypeDisplayable['name'],
        description: appointmentActionTypeDisplayable['description'],
        amount: appointmentActionTypeDisplayable['amount'],
        smsMessage: appointmentActionTypeDisplayable['smsMessage'],
    }
    return actionType;
}

export function convertAppointmentActionTypeDisplayablesListToActionTypesList(appointmentActionTypeDisplayablesList) {
    let actionTypesList = [];
    for (var i = 0; i < appointmentActionTypeDisplayablesList.length; i++) {
        const appointmentActionTypeDisplayable = appointmentActionTypeDisplayablesList[i];
        const actionType = convertAppointmentActionTypeDisplayableToActionType(appointmentActionTypeDisplayable);
        actionTypesList.push(actionType);
    }
    return actionTypesList;
}


export function convertHorsesWithLocationListToHorsesList(horsesWithLocationList) {
  let horsesList = [];
  for (var i = 0; i < horsesWithLocationList.length; i++) {
    var isStallion = 'Stallion'
    var dam = 'None'
    var sire = 'None'
    var damSire = 'None'
    var stallId = 'None'
    const horseWithLocation = horsesWithLocationList[i];
    if (horseWithLocation.isStallion === false) {
      isStallion = 'Mare'
    }
    if (!(horseWithLocation.dam === -1)) {
      dam = horseWithLocation.dam;
    }
    if (!(horseWithLocation.sire === -1)) {
      sire = horseWithLocation.sire;
    }
    if (!(horseWithLocation.damSire === -1)) {
      damSire = horseWithLocation.damSire;
    }
    if (!(horseWithLocation.stallId === -1)) {
      stallId = horseWithLocation.stallId;
    }
    const horse = {
      horseName: horseWithLocation.horseName,
      registrationNumber: horseWithLocation.registrationNumber,
      isStallion: isStallion,
      dam: dam,
      sire: sire,
      damSire: damSire,
      ownerUserId: horseWithLocation.ownerUserId,
      stallId: stallId
    }
    horsesList.push(horse);
  }
  return horsesList;
}
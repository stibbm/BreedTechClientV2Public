export async function sortHorsesAlphabeticallyByName(horsesList) {
  await horsesList.sort(function (a, b) {
    var textA = a.horseName.toUpperCase();
    var textB = b.horseName.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  return horsesList;
}

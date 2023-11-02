export async function appendTypeToHorse(input) {
  var horseType = "Stallion";
  if (input.isStallion === false) {
    horseType = "Mare";
  }
  const output = {
    ...input,
    horseType: horseType,
  };
  return output;
}

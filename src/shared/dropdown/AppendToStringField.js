export async function appendToStringFieldForList(inputList, field) {
  const outputList = [];
  for (var i = 0; i < inputList.length; i++) {
    const inputItem = inputList[i];
    const outputItem = await appendToStringField(inputItem, field);
    outputList.push(outputItem);
  }
  return outputList;
}

export async function appendToStringField(item, field) {
  const toStringValue = item[field];
  const toStringStringValue = toStringValue.toString();
  item["toStringCustom"] = toStringStringValue;
  return item;
}

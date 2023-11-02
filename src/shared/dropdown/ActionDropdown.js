import React, { useEffect, useState } from "react";
import {
  getActionTypesList,
  getAppointmentActionTypeDisplayablesList,
} from "../../service/ActionTypeService";
import ItemDropdown from "./ItemDropdown";
import {
  appendToStringField,
  appendToStringFieldForList,
} from "./AppendToStringField";

const ActionTypeDropdown = ({
  inputLabel,
  actionTypeChosen,
  setActionTypeChosen,
}) => {
  const [actionTypesList, setActionTypesList] = useState([]);
  const [initialActionTypeChosen, setInitialActionTypeChosen] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const initialActionTypesList = await getActionTypesList();
      console.log("initialActionTypesList: ");
      console.log(initialActionTypesList);
      const actionTypes = await appendToStringFieldForList(
        initialActionTypesList,
        "name"
      );
      console.log("action types in dropdown");
      console.log(actionTypes);
      await setActionTypesList(actionTypes);
      console.log("actionTypesList");
      console.log(actionTypes);
      const actionTypesListDisplayable =
        await getAppointmentActionTypeDisplayablesList();
      console.log("actionTypesDisplayablesList:");
      console.log(actionTypesListDisplayable);
      await setInitialActionTypeChosen(actionTypes[0]);
      await setActionTypeChosen(actionTypes[0]);
      await setIsReady(true);
    };
    fetchData().catch((e) => {
      console.log(e);
    });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {isReady && (
        <ItemDropdown
          inputLabel={inputLabel}
          itemsList={actionTypesList}
          itemChosen={actionTypeChosen}
          setItemChosen={setActionTypeChosen}
          initialValue={initialActionTypeChosen}
        />
      )}
    </div>
  );
};
export default ActionTypeDropdown;

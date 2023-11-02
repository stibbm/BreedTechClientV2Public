import React, { useEffect, useState } from "react";
import { getHorsesWithActiveAppointments } from "../../service/HorseService";
import { appendToStringFieldForList } from "./AppendToStringField";
import ItemDropdown from "./ItemDropdown";

const CheckedInHorseDropdown = ({
  inputLabel,
  checkedInHorseChosen,
  setCheckedInHorseChosen,
}) => {
  const [horsesList, setHorsesList] = useState([]);
  const [initialHorseChosen, setInitialHorseChosen] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const initialHorsesList = await getHorsesWithActiveAppointments();
      const horsesList = await appendToStringFieldForList(
        initialHorsesList,
        "horseName"
      );
      await setHorsesList(horsesList);
      await setInitialHorseChosen(horsesList[0]);
      await setCheckedInHorseChosen(horsesList[0]);
      await setIsReady(true);
    };
    fetchData().catch((e) => {
      console.log(e);
    });
  });

  return (
    <div className="CheckedInHorseDropdown" style={{ width: "100%" }}>
      {isReady && (
        <ItemDropdown
          inputLabel={inputLabel}
          itemsList={horsesList}
          itemChosen={checkedInHorseChosen}
          setItemChosen={setCheckedInHorseChosen}
          initialValue={initialHorseChosen}
        />
      )}
    </div>
  );
};
export default CheckedInHorseDropdown;

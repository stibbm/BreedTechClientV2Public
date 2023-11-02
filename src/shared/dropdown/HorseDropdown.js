import React, { useEffect, useState } from "react";
import {
  getHorsesList,
  getHorsesSortedByName,
} from "../../service/HorseService";
import ItemDropdown from "./ItemDropdown";
import { appendToStringFieldForList } from "./AppendToStringField";

const HorseDropdown = ({ inputLabel, horseChosen, setHorseChosen }) => {
  const [horsesList, setHorsesList] = useState([]);
  const [initialHorseChosen, setInitialHorseChosen] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const initialHorsesList = await getHorsesSortedByName();
      const horsesList = await appendToStringFieldForList(
        initialHorsesList,
        "horseName"
      );
      console.log(horsesList);
      await setHorsesList(horsesList);
      await setInitialHorseChosen(horsesList[0]);
      await setHorseChosen(horsesList[0]);
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
          itemsList={horsesList}
          itemChosen={horseChosen}
          setItemChosen={setHorseChosen}
          initialValue={initialHorseChosen}
        />
      )}
    </div>
  );
};
export default HorseDropdown;

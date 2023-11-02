import React, { useEffect, useState } from 'react';
import { getStallOccupanciesList } from "../../service/StallService";
import ItemDropdown from './ItemDropdown';
import { appendToStringFieldForList } from "./AppendToStringField";

const StallDropdown = ({
  inputLabel,
  stallChosen,
  setStallChosen
}) => {
  const [stallsList, setStallsList] = useState([]);
  const [initialStallChosen, setInitialStallChosen] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const initialStallsList = await getStallOccupanciesList();
      const stallsList = await appendToStringFieldForList(
        initialStallsList,
        "name"
      );
      await setStallsList(stallsList);
      await setInitialStallChosen(stallsList[0]);
      await setStallChosen(stallsList[0]);
      await setIsReady(true);
    }
    fetchData().catch((e) => {
      console.log(e);
    })
  }, [])

  return (
    <div style={{ width: '100%' }}>
      {isReady && (
        <ItemDropdown
          inputLabel={inputLabel}
          itemsList={stallsList}
          itemChosen={stallChosen}
          setItemChosen={setStallChosen}
          initialValue={initialStallChosen}
        />
      )}
    </div>
  )

}
export default StallDropdown;

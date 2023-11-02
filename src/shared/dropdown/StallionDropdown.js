import React, { useEffect, useState } from 'react';
import { getStallionsList } from '../../service/HorseService';
import ItemDropdown from './ItemDropdown';
import { appendToStringFieldForList } from './AppendToStringField';

const StallionDropdown = ({
  inputLabel,
  stallionChosen,
  setStallionChosen,
}) => {
  const [stallionsList, setStallionsList] = useState([]);
  const [initialStallionChosen, setInitialStallionChosen] = useState();
  const [isReady, setIsReady] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const initialStallionsList = await getStallionsList();
      const stallionsList = await appendToStringFieldForList(initialStallionsList, "horseName");
      console.log(stallionsList);
      await setStallionsList(stallionsList);
      await setInitialStallionChosen(stallionsList[0]);
      await setStallionChosen(stallionsList[0]);
      await setIsReady(true);
    }
    fetchData().catch(e => {
      console.log(e);
    })
  }, []);

  return (
    <div>
      {(isReady) &&
        <ItemDropdown
          inputLabel={inputLabel}
          itemsList={stallionsList}
          itemChosen={stallionChosen}
          setItemChosen={setStallionChosen}
          initialValue={initialStallionChosen}
        />
      }
    </div>
  )
}
export default StallionDropdown;



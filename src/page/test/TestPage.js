import React, { useEffect, useState } from 'react';
import ItemDropdown from '../../shared/dropdown/ItemDropdown';
import { getUsersList } from '../../service/UserService';
import UserDropdown from '../../shared/dropdown/UserDropdown';
import HorseDropdown from '../../shared/dropdown/HorseDropdown';
import StallionDropdown from '../../shared/dropdown/StallionDropdown';
const TestPage = () => {

  const [userChosen, setUserChosen] = useState();
  const userInputLabel = "User";

  const [horseChosen, setHorseChosen] = useState();
  const horseInputLabel = "Horse";

  const [stallionChosen, setStallionChosen] = useState();
  const stallionInputLabel = "Stallion";

  return (
    <div style={{ width: '100%' }}>
      <UserDropdown
        inputLabel={userInputLabel}
        userChosen={userChosen}
        setUserChosen={setUserChosen}
      ></UserDropdown>
      <HorseDropdown
        inputLabel={horseInputLabel}
        horseChosen={horseChosen}
        setHorseChosen={setHorseChosen}
      />
      <StallionDropdown
        inputLabel={stallionInputLabel}
        stallionChosen={stallionChosen}
        setStallionChosen={setStallionChosen}
      />
    </div>
  )

}
export default TestPage;
import React, { useEffect, useState } from 'react';
import { getUsersList } from '../../service/UserService';
import ItemDropdown from './ItemDropdown';
import { appendToStringFieldForList } from './AppendToStringField';

const UserDropdown = ({
  inputLabel,
  userChosen,
  setUserChosen,
}) => {

  const [usersList, setUsersList] = useState([])
  const [initialUserChosen, setInitialUserChosen] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const initialUsersList = await getUsersList();
      const usersList = await appendToStringFieldForList(initialUsersList, 'emailAddress');
      console.log(usersList);
      await setUsersList(usersList);
      await setInitialUserChosen(usersList[0]);
      await setUserChosen(usersList[0]);
      await setIsReady(true);
    }
    fetchData().catch(e => {
      console.log(e);
    });
  }, [])

  return (
    <div style={{ width: '100%' }}>
      {(isReady) &&
        <ItemDropdown
          inputLabel={inputLabel}
          itemsList={usersList}
          itemChosen={userChosen}
          setItemChosen={setUserChosen}
          initialValue={initialUserChosen}
        />
      }
    </div >
  )
}
export default UserDropdown;

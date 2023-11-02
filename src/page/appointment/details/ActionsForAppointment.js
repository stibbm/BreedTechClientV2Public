import React, {useEffect, useState} from 'react';

const ActionsForAppointment = (props) => {
  const [actionsList, setActionsList] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [refreshCounter, setRefreshCounter] = useState(0);

  useEffect(() => {
    const fetchData = async() => {
      
    };
    fetchData().catch(console.error);
  }, [refreshCounter, setRefreshCounter])
}
export default ActionsForAppointment;
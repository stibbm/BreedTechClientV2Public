import React from 'react';
import DamForm from '../form/damform/DamForm';
import Popup from '../../../shared/popup/Popup';

const DamPopup = ({
  openDamPopup,
  setOpenDamPopup,
  horse,
  refreshCounter,
  setRefreshCounter,
}) => {
  const title="Set Dam";
  return (
    <div className="DamPopup">
      <Popup
        title={title}
        openPopup={openDamPopup}
        setOpenPopup={setOpenDamPopup}
      >
        <DamForm
          currentHorse={horse}
          setOpenPopup={setOpenDamPopup}
          refreshCounter={refreshCounter}
          setRefreshCounter={setRefreshCounter}
        />
      </Popup>
    </div>
  )
}
export default DamPopup;

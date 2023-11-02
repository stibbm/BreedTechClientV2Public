import React from 'react';
import DamSireForm from '../form/damsireform/DamSireForm';
import Popup from '../../../shared/popup/Popup';

const DamSirePopup = ({
  openDamSirePopup,
  setOpenDamSirePopup,
  horse,
  refreshCounter,
  setRefreshCounter,
}) => {
  const title="Set Dam Sire";

  return (
    <div className="DamSirePopup">
      <Popup
        title={title}
        openPopup={openDamSirePopup}
        setOpenPopup={setOpenDamSirePopup}
      >
        <DamSireForm
          currentHorse={horse}
          setOpenPopup={setOpenDamSirePopup}
          refreshCounter={refreshCounter}
          setRefreshCounter={setRefreshCounter}
        />
      </Popup>
    </div>
  )
}
export default DamSirePopup;

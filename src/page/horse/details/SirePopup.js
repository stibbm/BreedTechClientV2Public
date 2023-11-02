import React from "react";
import SireForm from "../form/sireform/SireForm";
import Popup from "../../../shared/popup/Popup";

const SirePopup = ({
  openSirePopup,
  setOpenSirePopup,
  horse,
  refreshCounter,
  setRefreshCounter,
}) => {
  const title = "Set Sire";
  return (
    <div className="SirePopup">
      <Popup
        title={title}
        openPopup={openSirePopup}
        setOpenPopup={setOpenSirePopup}
      >
        <SireForm
          currentHorse={horse}
          setOpenPopup={setOpenSirePopup}
          refreshCounter={refreshCounter}
          setRefreshCounter={setRefreshCounter}
        />
      </Popup>
    </div>
  );
};
export default SirePopup;

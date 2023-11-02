import React from "react";
import { ClipLoader } from "react-spinners";
import VCentered from "../grid/VCentered";
import VHCenteredGrid from "../grid/VHCenteredGrid";
const LoadSpinner = ({ children, isLoading }) => {
  return (
    <div className="LoadSpinner">
      <VCentered>
        <ClipLoader loading={isLoading} size={150} aria-label="Loading..." />
      </VCentered>
      {!isLoading && <div>{children}</div>}
    </div>
  );
};
export default LoadSpinner;

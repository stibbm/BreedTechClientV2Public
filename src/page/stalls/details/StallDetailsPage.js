import React, { useState, useEffect } from "react";
import DetailsTable from "../../../shared/table/detailsTable/DetailsTable";
import { getStallOccupancyByStallId } from "../../../service/StallService";
import { useSearchParams } from "react-router-dom";

const StallDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const [stall, setStall] = useState({});
  const [isStallLoaded, setIsStallLoaded] = useState(false);

  const fields = {
    stallId: "Stall Id",
    name: "Stall Name",
    horsesList: "Horses List",
    capacity: "Capacity",
    notes: "Notes",
    description: "Description",
    companyId: "Company Id",
  };

  useEffect(() => {
    const fetchData = async () => {
      const stallId = await searchParams.get("stallId");
      const stall = await getStallOccupancyByStallId(stallId);
      await setStall(stall);
      await setIsStallLoaded(true);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="StallDetailsPage">
      {isStallLoaded && (
        <DetailsTable title={"Stall Details"} data={stall} fields={fields} />
      )}
    </div>
  );
};
export default StallDetailsPage;

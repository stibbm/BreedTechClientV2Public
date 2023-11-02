import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import ItemsTable from "../../../shared/table/itemsTable/ItemsTable";
import { COLUMNS } from "./UserColumns";

export const UsersTable = ({ data, isGlobalFieldFilterEnabled }) => {
  const navigate = useNavigate();

  async function goToUserDetailsPage(row) {
    console.log("goToUserDetailsPage");
    const userId = await row.values.id;
    navigate({
      pathname: "/userDetails",
      search: createSearchParams({
        userId: userId,
      }).toString(),
    });
  }

  return (
    <div className="UsersTable" style={{ width: "100%" }}>
      <ItemsTable
        columns={COLUMNS}
        data={data}
        goToItemDetailsPage={goToUserDetailsPage}
        isGlobalFieldFilterEnabled={isGlobalFieldFilterEnabled}
      ></ItemsTable>
    </div>
  );
};

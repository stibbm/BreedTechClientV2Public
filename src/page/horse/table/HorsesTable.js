import React from 'react';
import { useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';
import ItemsTable from '../../../shared/table/itemsTable/ItemsTable';
import { COLUMNS } from './HorseColumns';

const HorsesTable = (props) => {

  const navigate = useNavigate();
  const data = props.data;
  const isGlobalFilterEnabled = props.isGlobalFilterEnabled;

  async function goToHorseDetailsPage(row) {
    const registrationNumber = row.values.registrationNumber;
    navigate({
      pathname: '/horseDetails',
      search: createSearchParams({
        registrationNumber: await row.values.registrationNumber,
      }).toString()
    })
  }

  return (
    <div className="HorsesTable" style={{ width: '100%' }}>
      <ItemsTable
        columns={COLUMNS}
        data={data}
        goToItemDetailsPage={goToHorseDetailsPage}
        isGlobalFilterEnabled={isGlobalFilterEnabled}
      />
    </div>
  )
}
export default HorsesTable;

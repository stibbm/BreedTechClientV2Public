import React from 'react';
import { useNavigate } from 'react-router';
import ItemsTable from '../../shared/table/itemsTable/ItemsTable';
import { COST_SUMMARY_COLUMNS } from './CostSummaryColumns';

const CostSummaryTable = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  const isGlobalFilterEnabled = props.isGlobalFilterEnabled;

  console.log('data');
  console.log(data);
  console.log('endData');

  async function goToCostSummaryDetailsPage() {
    console.log('goToCostSummaryDetailsPage');
  }

  return (
    <div className="CostSummaryTable">
      <ItemsTable
        columns={COST_SUMMARY_COLUMNS}
        data={data}
        goToItemDetailsPage={goToCostSummaryDetailsPage}
        isGlobalFilterEnabled={isGlobalFilterEnabled}
      />
    </div>
  )
}
export default CostSummaryTable;
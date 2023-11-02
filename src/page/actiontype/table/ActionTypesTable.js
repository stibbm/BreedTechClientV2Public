import React from 'react';
import {COLUMNS} from './ActionTypeColumns';
import {createSearchParams} from 'react-router-dom';
import ItemsTable from "../../../shared/table/itemsTable/ItemsTable";
import {useNavigate} from "react-router";
import PropTypes from "prop-types";

const ActionTypesTable = (props) => {
    const navigate = useNavigate();
    const data = props.data;
    const isGlobalFilterEnabled = props.isGlobalFilterEnabled;

    async function goToActionTypeDetailsPage(row) {
        const actionTypeId = await row.values.id;
        await navigate({
            pathname: '/actionTypeDetails',
            search: createSearchParams({
                actionTypeId: actionTypeId
            }).toString()
        })
    }

    return (
        <div className="ActionTypesTable" style={{width: '100%'}}>
            <ItemsTable
                columns={COLUMNS}
                data={data}
                goToItemDetailsPage={goToActionTypeDetailsPage}
                isGlobalFilterEnabled={isGlobalFilterEnabled}
            />
        </div>
    )
}
ActionTypesTable.propTypes = {
    data: PropTypes.any,
    isGlobalFilterEnabled: PropTypes.bool
}
export default ActionTypesTable;




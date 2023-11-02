import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom";
import {getActionTypeById} from "../../../service/ActionTypeService";
import DetailsTable from "../../../shared/table/detailsTable/DetailsTable";
import {log} from '../../../log/Logger';

const ActionTypeDetailsPage = (props) => {
    const [searchParams] = useSearchParams();
    const [actionType, setActionType] = useState({});
    const [isActionTypeLoaded, setIsActionTypeLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const actionTypeId = await searchParams.get('actionTypeId');
            const actionType = await getActionTypeById(actionTypeId);
            log("actionTypeId: ", actionTypeId);
            log("actionType: ", actionType);
            await setActionType(actionType);
            await setIsActionTypeLoaded(true);
        }
        fetchData().catch(console.error);
    }, [])

    const fields = {
        id: "Id",
        name: "Name",
        description: "Description",
        amount: "Amount",
        smsMessage: "SMS Message"
    }

    return (
        <div className="ActionTypeDetailsPage">
            {isActionTypeLoaded && (
                <DetailsTable
                    title={"Action Type Details"}
                    data={actionType}
                    fields={fields}
                />
            )}
        </div>
    )

}
export default ActionTypeDetailsPage;
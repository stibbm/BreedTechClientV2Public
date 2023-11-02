import React, {useEffect, useState} from 'react';
import {log} from '../../log/Logger';
import PropTypes from "prop-types";
import VCentered from "../grid/VCentered";
import GridRowAuto from "../grid/GridRowAuto";
import {Button, Typography} from "@mui/material";
import VRight from "../grid/VRight";
import AddIcon from "@mui/icons-material/Add";
import StallsTable from "../../page/stalls/table/StallsTable";
import {ClipLoader} from "react-spinners";

// do this later if feel like it
const ItemsPage = (props) => {
    const {
        itemName,
        pageTitle,
        getItemsList,
        fields,
        name,
        getItemById
    } = props;

    const [itemsList, setItemsList] = useState([]);
    const [isItemsListLoaded, setIsItemsListLoaded] = useState(false);
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [refreshCounter, setRefreshCounter] = useState(0);

    useEffect(() => {
        const fetchData = async() => {
            const items = await getItemsList();
            log('items: ', items);
            await setItemsList(items);
            await setIsItemsListLoaded(true);
        }
        fetchData().catch(console.error);
    })

    return (
        <div className="ItemsPage">
            <VCentered>
                <GridRowAuto>
                    <Typography sx={{ marginTop: '30px', marginBottom: '30px' }} variant="h5">{pageTitle}</Typography>
                </GridRowAuto>
                <GridRowAuto>
                    <VRight border="0">
                        <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            onClick={() => {
                                setIsOpenPopup(true);
                            }}
                        >Create {itemName}</Button>
                    </VRight>
                </GridRowAuto>
                <GridRowAuto style={{ marginTop: '30px' }}>
                    {isItemsListLoaded && // probably need to change this to items table wrapper to do what current table wrappers are doing<ItemsTable data={itemsList} isGlobalFilterEnabled={true} />}
                    <ClipLoader
                        loading={!isItemsListLoaded}
                        size={150}
                        aria-label="Loading..."
                    />
                </GridRowAuto>
            </VCentered>
        </div>
    );
}
ItemsPage.propTypes = {
    getItemsList: PropTypes.func,
    fields: PropTypes.array,
    name: PropTypes.string,
    getItemById: PropTypes.func
}
export default ItemsPage;
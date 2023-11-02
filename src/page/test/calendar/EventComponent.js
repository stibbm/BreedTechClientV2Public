import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import VCentered from "../../../shared/grid/VCentered";

const EventComponent = (props) => {
    return (
        <div style={{ width: '100%' }}>
            <VCentered>
                <Box width="100%">
                    <Typography sx={{
                        border: '1px solid green',
                        backgroundColor: "lightblue"
                    }}>
                        Typo
                    </Typography>
                </Box>
            </VCentered>
        </div>
    )
}
export default EventComponent;


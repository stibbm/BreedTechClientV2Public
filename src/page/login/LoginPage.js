import React from 'react';
import VCentered from '../../shared/grid/VCentered';
import GridRowAuto from '../../shared/grid/GridRowAuto';
import { Paper } from '@mui/material';
import LoginForm from './form/LoginForm';

const LoginPage = (props) => {

  return (
    <div className="LoginPage">
      <VCentered>
        <GridRowAuto marginTop="30vh">
          <h3>Login</h3>
        </GridRowAuto>
        <GridRowAuto>
          <Paper
            className="LoginPage__paper"
            sx={{
              paddingTop: '20px',
              paddingBottom: '20px',
              width: '400px',
            }}
          >
            <LoginForm />
          </Paper>
        </GridRowAuto>
      </VCentered>
    </div>
  )
}
export default LoginPage;

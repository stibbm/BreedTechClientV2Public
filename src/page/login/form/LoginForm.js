import React from 'react';
import VCentered from '../../../shared/grid/VCentered';
import MInput from '../../../shared/grid/MInput';
import { useForm } from '../../../shared/grid/UseForm';
import MButton from '../../../shared/grid/MButton';
import GridRowAuto from '../../../shared/grid/GridRowAuto';
import { login } from '../../../service/LoginService';
import { useNavigate } from 'react-router';

const initialValues = {
  emailAddress: '',
  password: ''
}

const LoginForm = (props) => {

  const navigate = useNavigate();

  const validate = (fieldValues = values) => {
    return true;
  }

  async function handleLogin() {
    await login(await values.emailAddress, await values.password, navigate);
  }

  const {
    values,
    setValues,
    errors = {},
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialValues, true, validate);

  return (
    <div className="LoginForm">
      <VCentered>
        <GridRowAuto width="80%" marginTop="40px">
          <MInput
            name="emailAddress"
            label="Email Address"
            value={values.emailAddress}
            onChange={handleInputChange}
            error={errors.emailAddress}
            width="100%"
          />
        </GridRowAuto>
        <GridRowAuto width="80%" paddingTop="20px">
          <MInput
            name='password'
            label='Password'
            value={values.password}
            onChange={handleInputChange}
            type='password'
            error={errors.password}
          />
        </GridRowAuto>
        <GridRowAuto width="80%" paddingTop="20px">
          <MButton
            type="submit"
            text="Sign in"
            onClick={handleLogin}
          >Sign in</MButton>
        </GridRowAuto>
        <GridRowAuto width="80%" marginTop="20px">
          <a href="https://google.com">Forgot Password?</a>
        </GridRowAuto>
        <GridRowAuto width="80%" marginTop='10px'>
          <a href="https://google.com">Register for an account</a>
        </GridRowAuto>
      </VCentered>
    </div>
  )
}
export default LoginForm;
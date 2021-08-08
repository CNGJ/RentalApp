import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import Input from '../../lib/Input';
import { Subtitle, Title, FormWrapper, Button, ButtonContainer, User, Separator } from './styles';
import 'react-toastify/dist/ReactToastify.css';
import { AUTHENTICATE } from '../../gql/Users';
import { ModalContext } from '../../Context/ModalContext';
import { ProfileContext } from '../../Context/ProfileContext';

const initialValuesLogin = {
  email: '',
  password: ''
};

const FilerPublication = () => {
  const [Usernew, setnewUser] = useState(false);
  const [authenticate] = useMutation(AUTHENTICATE);
  const { ToastError, ToastSuccess, setShowModal, setshowSpinner } = useContext(ModalContext);
  const { refetch } = useContext(ProfileContext);

  const loginService = async values => {
    const { data } = await authenticate({
      variables: {
        input: {
          ...values
        }
      }
    });
    localStorage.setItem('travel-token', data.authenticate.token);
  };

  const formikLogin = useFormik({
    initialValues: initialValuesLogin,
    onSubmit: async values => {
      try {
        setshowSpinner(true);
        await loginService(values);
        refetch();
        ToastSuccess('Iniciaste sesion');
        setShowModal(false);
        setshowSpinner(false);
      } catch (error) {
        setshowSpinner(false);
        ToastError('Tus credenciales son incorrectas, vuelve a intentarlo');
      }
    }
  });

  return (
    <div>
      <FormWrapper onSubmit={formikLogin.handleSubmit}>
        <Title>
          Inicia Sesion
          <span style={{ marginLeft: '1rem' }}>
            <User />
          </span>
        </Title>
        <Separator />
        <Input
          name={'email'}
          message={
            formikLogin.errors.email && formikLogin.touched.email
              ? { text: formikLogin.errors.email, type: 'error' }
              : null
          }
          placeholder={'Email'}
          disabled={false}
          onChange={formikLogin.handleChange}
          value={formikLogin.values.email}
          onBlur={formikLogin.handleBlur}
        />
        <Input
          name={'password'}
          message={
            formikLogin.errors.password && formikLogin.touched.password
              ? { text: formikLogin.errors.password, type: 'error' }
              : null
          }
          type="password"
          placeholder={'Contraseña'}
          disabled={false}
          onChange={formikLogin.handleChange}
          value={formikLogin.values.password}
          onBlur={formikLogin.handleBlur}
        />
        <ButtonContainer>
          <Button>Iniciar sesion</Button>
        </ButtonContainer>
      </FormWrapper>
      <Subtitle
        onClick={() => {
          setnewUser(!Usernew);
        }}
      ></Subtitle>
    </div>
  );
};

export default FilerPublication;

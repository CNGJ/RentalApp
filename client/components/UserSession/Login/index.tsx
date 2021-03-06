import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import Input from '../../../lib/Input';
import { Subtitle, Title, FormWrapper, Button, ButtonContainer, User, UserEdit } from './styles';
import 'react-toastify/dist/ReactToastify.css';
import { ValidationsLogin, ValidationsRegister } from './validations';
import { NEW_USER, AUTHENTICATE } from '../../../gql/Users';
import { ModalContext } from '../../../Context/ModalContext';
import { ProfileContext } from '../../../Context/ProfileContext';

const initialValuesLogin = {
  email: '',
  password: ''
};
const initialValuesRegister = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  password2: ''
};

const Login = () => {
  const [Usernew, setnewUser] = useState(false);
  const [newUser] = useMutation(NEW_USER);
  const [authenticate] = useMutation(AUTHENTICATE);
  const { ToastError, ToastSuccess, setShowModal, setshowSpinner } = useContext(ModalContext);
  const { refetch } = useContext(ProfileContext);

  // ESTO TIENE QUE IR EN OTRO LADO servicios

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
  const registerService = async values => {
    const { name, lastname, email, password } = values;
    const { data } = await newUser({
      variables: {
        input: {
          name,
          lastname,
          email,
          password
        }
      }
    });
  };

  const formikLogin = useFormik({
    initialValues: initialValuesLogin,
    validationSchema: ValidationsLogin,
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
        console.log('error', error);
        ToastError('Tus credenciales son incorrectas, vuelve a intentarlo');
      }
    }
  });

  const formikRegister = useFormik({
    initialValues: initialValuesRegister,
    validationSchema: ValidationsRegister,
    onSubmit: async values => {
      const { email, password } = values;
      try {
        setshowSpinner(true);
        await registerService(values);
        ToastSuccess('Usuario creado con exito');
        await loginService({ email, password });
        refetch();
        setShowModal(false);
        setshowSpinner(false);
      } catch (error) {
        setshowSpinner(false);
        console.log('error', error);
        ToastError('Ocurrio un error, no logramos crear tu cuenta');
      }
    }
  });

  return (
    <div>
      {!Usernew ? (
        <FormWrapper onSubmit={formikLogin.handleSubmit}>
          <Title>
            Inicia Sesion
            <span style={{ marginLeft: '1rem' }}>
              <User />
            </span>
          </Title>
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
            placeholder={'Contrase??a'}
            disabled={false}
            onChange={formikLogin.handleChange}
            value={formikLogin.values.password}
            onBlur={formikLogin.handleBlur}
          />
          <ButtonContainer>
            <Button>Iniciar sesion</Button>
          </ButtonContainer>
        </FormWrapper>
      ) : (
        <FormWrapper onSubmit={formikRegister.handleSubmit}>
          <Title>
            Crea tu cuenta
            <span style={{ marginLeft: '1rem' }}>
              <UserEdit />
            </span>
          </Title>
          <Input
            name={'name'}
            message={
              formikRegister.errors.name && formikRegister.touched.name
                ? { text: formikRegister.errors.name, type: 'error' }
                : null
            }
            style={{ marginBottom: '0.5rem' }}
            placeholder={'Nombre'}
            disabled={false}
            onChange={formikRegister.handleChange}
            value={formikRegister.values.name}
            onBlur={formikRegister.handleBlur}
          />
          <Input
            name={'lastname'}
            message={
              formikRegister.errors.lastname && formikRegister.touched.lastname
                ? { text: formikRegister.errors.lastname, type: 'error' }
                : null
            }
            style={{ marginBottom: '0.5rem' }}
            placeholder={'Apellido'}
            disabled={false}
            onChange={formikRegister.handleChange}
            value={formikRegister.values.lastname}
            onBlur={formikRegister.handleBlur}
          />
          <Input
            name={'email'}
            message={
              formikRegister.errors.email && formikRegister.touched.email
                ? { text: formikRegister.errors.email, type: 'error' }
                : null
            }
            type={'email'}
            placeholder={'Email'}
            disabled={false}
            onChange={formikRegister.handleChange}
            value={formikRegister.values.email}
            onBlur={formikRegister.handleBlur}
          />
          <Input
            name={'password'}
            message={
              formikRegister.errors.password && formikRegister.touched.password
                ? { text: formikRegister.errors.password, type: 'error' }
                : null
            }
            style={{ marginBottom: '0.5rem' }}
            type="password"
            placeholder={'Contrase??a'}
            disabled={false}
            onChange={formikRegister.handleChange}
            value={formikRegister.values.password}
            onBlur={formikRegister.handleBlur}
          />
          <Input
            name={'password2'}
            message={
              formikRegister.errors.password2 && formikRegister.touched.password2
                ? { text: formikRegister.errors.password2, type: 'error' }
                : null
            }
            style={{ marginBottom: '0.5rem' }}
            type="password"
            placeholder={'Confirma tu contrase??a'}
            disabled={false}
            onChange={formikRegister.handleChange}
            value={formikRegister.values.password2}
            onBlur={formikRegister.handleBlur}
          />
          <ButtonContainer>
            <Button type="submit">Crear cuenta</Button>
          </ButtonContainer>
        </FormWrapper>
      )}
      <Subtitle
        onClick={() => {
          setnewUser(!Usernew);
        }}
      >
        {!Usernew ? '??No tienes cuenta? registrate aqui.' : '??Ya tienes cuenta? Inicia sesion aqui. '}
      </Subtitle>
    </div>
  );
};

export default Login;

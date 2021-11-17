import { useState } from 'react';

import login from '../../helpers/login';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(state.email, state.password);
      alert('Logeado con exito!');
    } catch(error) {
        console.log(error);
        alert("Correo o contraseña invalida.");
    };
    setState(initialState);
  };

  return (
    <Form className='d-grid gap-2' onSubmit={handleSubmit}>
        <Form.Group id='email'>
          <Form.Control
              type="text"
              name="email"
              value={state.email}
              className='mb-2 text-primary'
              placeholder="E-mail"
              autoComplete="off"
              onChange={handleChange}
          />
        </Form.Group>
        <Form.Group id='password'>
          <Form.Control
              type='password'
              name="password"
              value={state.password}
              className='text-primary'
              placeholder="Senha"
              autoComplete="off"
              onChange={handleChange}
          />  
        </Form.Group>
        <a href='#' className='text-end text-primary mt-2 mb-4'>
            Esqueceu sua senha?
        </a>
        { 
          state.email === '' || state.password === ''
          ?
          <Button 
            className='mb-4'
            type="submit" 
            variant="primary" 
            size="lg" 
            disabled
          >
            Entrar
          </Button>
          :
          <Button 
            className='mb-4'
            type="submit"
            variant="primary" 
            size="lg"
          >
            Entrar
          </Button>
        }
    </Form>
  );
};

export default LoginForm;
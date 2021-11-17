import React from 'react';

import LoginForm from '../Form/LoginForm';

import Container from 'react-bootstrap/Container';
import styles from './LogIn.module.css';

import { RiFacebookCircleFill } from 'react-icons/ri';
import { FaGoogle } from 'react-icons/fa';

const LogIn = () => {

  return (
    <Container className='w-75 p-3 text-primary'>
      {/* <div style={{width: 3 + 'vw', height: .5 + 'vh', backgrounColor: '#1d69e5', borderRadius: 20 + '%'}}></div> */}
      <div className={styles.div}></div>
      <h2 className='mt-3'>Bem-vindo de volta!</h2>
      <p className='mt-3 mb-4 w-75'>Estamos felizes que esteja de volta para retomar seus projectos no Projectolist.</p>
      <LoginForm />
      <p className='text-primary text-center'>OU ENTRE COM</p>
      <div className=' w-25 align-self-center d-flex align-items-center justify-content-center mb-3' style={{marginLeft: 'auto', marginRight: 'auto'}}> 
        <div className='d-flex align-items-center justify-content-center me-3' style={{backgroundColor:'#1d69e5', width: 2 + 'rem', height:1.8 + 'rem', borderRadius: 10 + '%'}}>
          <RiFacebookCircleFill color='white' size={20} />
        </div>
        <FaGoogle size={20} />
      </div>
      <p className='text-primary text-center'>Ainda nao tem uma conta? <b>Cadastre-se</b></p>
    </Container>
  );
};

export default LogIn;
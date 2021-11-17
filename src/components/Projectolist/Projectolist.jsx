import React from 'react';

import Container from 'react-bootstrap/Container';

import { FaRegImage } from "react-icons/fa";

const Projectolist = () => {
  return (
    <Container 
      className='d-flex align-items-center justify-content-center bg-primary text-white' 
      style={{height:100 + 'vh', borderTopLeftRadius: 10 + '%', borderBottomLeftRadius: 10 + '%'}}
    >
      <div 
        className='position-relative d-flex flex-column align-items-center justify-content-center' 
        style={{width: 90 + '%', height: 90 + '%'}}
      >
        <div className='position-absolute mt-5 top-0 w-100 d-flex align-items-center justify-content-between'>
            <p>projectolist</p>
            <a className='mb-3 text-white' href="#">Ajuda</a>
        </div>
        <FaRegImage size={400} color='#1a39e5'/>
        <div className='position-absolute bottom-0 w-100 d-flex align-items-center justify-content-between'>
            <p>©2021, Projeclist</p>
            <p>UI/UX Design and Front-end by SA</p>
        </div>
      </div>
    </Container>
  );
};

export default Projectolist;
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import {UserButton} from '@clerk/clerk-react';


import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' , direction:"row-reverse" }} px="20px">
    
    <Link to="/" className=''>
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
     
    >
      
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625', fontFamily:'Arial' }} >
      
      Home
     
      </Link>
      
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' , fontFamily:'Arial'}}  fontFamily='Arial'>Exercises </a>
      <Stack direction="row-reverse" gap="10px " alignItems="flex-center">
      <h1 className='mt-3 pt-3' style={{ textDecoration: 'none', color: "rgb(10,100,250)" , fontFamily:'Arial'}}  fontFamily='Arial'> Profile</h1>
      <div className='mt-3 pt-3'> <UserButton /></div> 
      </Stack>
      
    </Stack>
   
  </Stack>
);

export default Navbar;

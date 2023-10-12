import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Footer2 from './components/footer2';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";


if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

 
const App = () => (
  <ClerkProvider publishableKey={clerkPubKey}>
   <SignedIn>
      
  
 
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
 
    <Navbar />

    
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />

    </Routes>
    <Footer2/>
    <Footer />
  </Box>
  </SignedIn>
  <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
  </ClerkProvider >
 
);

export default App;

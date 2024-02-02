import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { EmergencyContextProvider } from './contextos/EmergencyContext';


const App = () => {

  return (
    <div>
    <EmergencyContextProvider>
      <div className='centered-content'>
      <Header></Header>
      </div>
    </EmergencyContextProvider>
    </div>
  );
}

export default App;

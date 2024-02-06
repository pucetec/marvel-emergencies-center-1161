import './App.css';
import React from 'react';
import { AuthContextProvider } from './contexts/AuthContext/AuthContext';
import { AppRouter } from './routers/AppRouter';

const App = () => {
  return (
    <AuthContextProvider>
      <AppRouter/>
    </AuthContextProvider>
  );
}

export default App;
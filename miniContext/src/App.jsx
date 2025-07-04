import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/userContextProvider';

function App() {

  return (
    <UserContextProvider>
      <h2>Welcome !</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
      
  )
}

export default App

import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './page/SignIn';

function App() {


  return (
    <Routes>
      <Route path='/' element={<SignIn/>} />
    </Routes>
  )
}

export default App

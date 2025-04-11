import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from "./pages/profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/"  element={<Profile />} />
    
            </Routes>
        </Router>
    </>
  )
}

export default App;

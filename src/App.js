import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import ErrorPage from './components/ErrorPage';

function App() {
  const [mode, setMode] = useState('light');
  const [textcolor, setColor] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) =>{
    setAlert({
      message : msg,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () =>{
    if(mode==='dark'){
      setMode('light');
      setColor('dark');
      showAlert('Light mode', 'success')
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - light'

      setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 1000);
      setInterval(() => {
        document.title = 'Install TextUtils';
      }, 1300);
      
    } else {
      setMode('dark')
      setColor('light')
      showAlert('dark mode', 'success')
      document.title = 'TextUtils - light'
      document.body.style.backgroundColor = '#161618';
    }
  }
  return (
    <>     
        <Router>
        <Navbar title="TextUtils" mode={mode} textcolor={textcolor} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
            <Route path="about/" element={<About mode={mode} />} />
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
          </div>
        </Router>      
      
    </>
  );
}

export default App;

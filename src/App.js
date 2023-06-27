// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

import React ,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [currentMode , setCurrentMode] = useState('Light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type : type,
    },
    setTimeout(() => {
      setAlert(null)
    }, 2000)
    )
  }
  // const toggleMode=()=>{
  //       if(mode==='light' ){
  //           setMode('dark');
  //           document.body.style.backgroundColor = 'black';
  //           document.body.style.color = 'white';
  //           showAlert('Dark Mode Enabled Succesfully','success');
  //       }
  //       else{
  //           setMode('light');
  //           document.body.style.backgroundColor = 'white';
  //           document.body.style.color = 'black';
  //           showAlert('Light Mode Enabled Succesfully','success');
  //       }

  // }
  const changeMode=(event , colour)=>{
    if(colour === 'light'){
      setMode('light');
      setCurrentMode('Light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode Enabled Succesfully','success');
    }
    if(colour === 'dark'){
      setMode('dark');
      setCurrentMode('Dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark Mode Enabled Succesfully','success');
      
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Dark Mode';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Mode is Dark';
      // }, 2000);
    }
    if(colour === 'red'){
      setMode('danger');
      setCurrentMode('Red');
      document.body.style.backgroundColor = 'red';
      document.body.style.color = 'white';
      showAlert('Red Mode Enabled Succesfully','success');
    }
    if(colour === 'blue'){
      setMode('primary');
      setCurrentMode('Blue');
      document.body.style.backgroundColor = 'blue';
      document.body.style.color = 'white';
      showAlert('Blue Mode Enabled Succesfully','success');
    }
    if(colour === 'green'){
      setMode('success');
      setCurrentMode('Green');
      document.body.style.backgroundColor = 'green';
      document.body.style.color = 'white';
      showAlert('Green Mode Enabled Succesfully','success');
    }
  }


  return (
    <>
        
        
        {/* <Navbar/> */}
        {/* <TextForm textTitle="Enter your text to analyze below " mode={mode} showAlert={showAlert}/> */}

        {/* <About/> */}
    <Router>
    <Navbar title="Text-Utils" about='About' mode={mode} changeMode={changeMode}  currentMode = {currentMode}/>
    <Alerts alert={alert}/>
      <Routes>
        <Route path="/" element={<TextForm textTitle="Enter your text to analyze below " mode={mode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About  mode={mode} currentMode={currentMode} />} />
      </Routes>
    </Router>
        

    
    </>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';

import React ,{useState} from 'react'


function App() {
  const [mode, setMode] = useState('light');
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
  const toggleMode=()=>{
        if(mode==='light' ){
            setMode('dark');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            showAlert('Dark Mode Enabled Succesfully','success');
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            showAlert('Light Mode Enabled Succesfully','success');
        }

  }
  // const changeMode=()=>{

  // }
      const light=()=>{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            showAlert('Light Mode Enabled Succesfully','success');
      }
      const dark=()=>{
        setMode('dark');
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        showAlert('Dark Mode Enabled Succesfully','success');
      }
      const red=()=>{
        setMode('danger');
        document.body.style.backgroundColor = 'red';
        document.body.style.color = 'white';
        showAlert('Red Mode Enabled Succesfully','success');
      }
      const blue=()=>{
        setMode('primary');
        document.body.style.backgroundColor = 'blue';
        document.body.style.color = 'white';
        showAlert('Blue Mode Enabled Succesfully','success');
      }
      const green=()=>{
        setMode('success');
        document.body.style.backgroundColor = 'green';
        document.body.style.color = 'white';
        showAlert('Green Mode Enabled Succesfully','success');
      }

  return (
    <>
        <Navbar title="Text-Utils" about="About" mode={mode} toggleMode={toggleMode} light={light} dark={dark} blue={blue} green={green} red={red} />
        <Alerts alert={alert}/>
        {/* <Navbar/> */}
        <TextForm textTitle="Enter your text to analyze below " mode={mode} showAlert={showAlert}/>

        {/* <About/> */}
        

    
    </>
  );
}

export default App;

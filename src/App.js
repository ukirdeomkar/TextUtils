// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {

  return (
    <>
        <Navbar title="Text-Utils" about="About" />
        {/* <Navbar/> */}
        <TextForm textTitle="Enter your text to analyze below "/>
    
    </>
  );
}

export default App;

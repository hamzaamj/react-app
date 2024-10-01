import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
    const [mode, setMode] = useState('light');
    const [modeText, setModeText] = useState('Enable Dark Mode');
    const [alertText, setAlertText] = useState(null);

    const toggleAlert = (message,type) => {
      setAlertText({
        msg: message,
        type: type
      })
        setTimeout(() => {
            setAlertText(null);
        },1500);
    }
    const changeMode = () => {
        if (mode === 'light') {
            setMode('dark');
            setModeText('Disable Dark Mode');
            document.body.style.backgroundColor = '#042743';
            toggleAlert('Dark mode has been enabled', 'success');
        }
        else {
            setMode('light');
            setModeText('Enable Dark Mode');
            document.body.style.backgroundColor = 'white';
            toggleAlert('Light mode has been enabled', 'success');
        }
    }
  return (
    <>
      <Navbar title="ReactApp" aboutText="About ReactApp" modeText={modeText} changeMode={changeMode} mode={mode}/>
      <Alert alert={alertText}/>
      <TextForm toggleAlert={toggleAlert} heading="Enter Text Here To Analyize" mode={mode}/>
    </>
  );
}
export default App;

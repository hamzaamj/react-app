import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';
import ContactUs from './components/ContactUs';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
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
        <Router>
            <Navbar title="ReactApp" contactUsText="Contact Us" aboutText="About ReactApp" modeText={modeText} changeMode={changeMode} mode={mode}/>
            <Alert alert={alertText}/>
            <Routes>
                <Route path="/about" element={<AboutUs mode={mode} />} />
                <Route path="/" element={<TextForm toggleAlert={toggleAlert} heading="Enter Text Here To Analyze" />} />
            </Routes>
            <Routes>
                <Route path="/contact" element={<ContactUs mode={mode} />} />
            </Routes>
        </Router>
    </>
  );
}
export default App;

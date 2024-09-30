import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
function App() {
  return (
    <>
      <Navbar title="ReactApp" aboutText="About ReactApp"/>
      <TextFrom heading="Enter Text Here To Analyize"/>
    </>
  );
}
export default App;

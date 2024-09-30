import '../App.css';
import React, { useState } from "react";
export default function TextFrom(props) {
    const [textAreaText, setTextAreaText] = useState('Enter Text Here');
    const handleUpperCaseClicked = () => {
        let newTextAreaText = textAreaText.toUpperCase();
        setTextAreaText(newTextAreaText);
    }
    const handleUpperCaseChange = (event) => {
        setTextAreaText(event.target.value);
    }
    return (
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={textAreaText}
                          onChange={handleUpperCaseChange}
                          id="exampleFormControlTextarea1" rows="8">

                </textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpperCaseClicked}>Convert To UpperCase</button>
        </div>
    )
}

import '../App.css';
import React, { useState } from "react";
export default function TextFrom(props) {
    const [textAreaText, setTextAreaText] = useState('Enter Text Here');
    const [emails, setEmails] = useState([]);
    const handleUpperCaseChange = (event) => {
        setTextAreaText(event.target.value);
    }
    const handleUpperCaseClicked = () => {
        let newTextAreaText = textAreaText.toUpperCase();
        setTextAreaText(newTextAreaText);
    }
    const handleLowerCaseClicked = () => {
        let newTextAreaText = textAreaText.toLowerCase();
        setTextAreaText(newTextAreaText);
    }
    const handleClearClicked = () => {
        setTextAreaText('');
    }
    const handleReverseClicked = () => {
        let newTextAreaText = textAreaText.split('').reverse().join('');
        setTextAreaText(newTextAreaText);
    }
    const handleFindEmailsClicked = () => {
        // Regular expression to match email addresses
        let emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        let foundEmails = textAreaText.match(emailRegex) || [];
        setEmails(foundEmails);
    };
    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={textAreaText}
                              onChange={handleUpperCaseChange}
                              id="exampleFormControlTextarea1" rows="8">
                    </textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpperCaseClicked}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerCaseClicked}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleReverseClicked}>Reverse Text</button>
                <button className="btn btn-primary mx-1" onClick={handleFindEmailsClicked}>Find Emails</button>
                <button className="btn btn-danger mx-1" onClick={handleClearClicked}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>{textAreaText.split(" ").length} words and {textAreaText.length} characters</p>
                <p>{0.008 * textAreaText.split(" ").length} Minutes read</p>
                <h3>Emails</h3>
                <ul>
                    {emails.length > 0 ? emails.map((email, index) => (
                        <li key={index}>{email}</li>
                    )) : <p>No emails found</p>}
                </ul>
                <h3>Preview</h3>
                <p style={{textAlign: 'justify', color: '#e1116e'}}>{textAreaText}</p>
            </div>
        </>
    )
}

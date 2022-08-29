import React, { useState } from "react";

export default function Textform(props) {
  const handleUpperClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to UpperCase!!", "success");
  };

  const handleLowerClick = () => {
    // console.log("LowerrCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LowerCase!!", "success");
  };

  const handleClearClick = () => {
    // console.log("Clear was Clicked" + text);
    setText("");
    props.showAlert(" Textbox Cleared!!", "success");
  };

  const handleFirstCapitalClick = () => {
    // console.log("First Capital was Clicked" + text);
    let words = text.split(" ");
    let newText = "";
    for (let i = 0; i < words.length; i++) {
      newText += words[i][0].toUpperCase() + words[i].slice(1) + " ";
    }
    setText(newText);
  };

  const handleCopyToClipboard = () => {
    // console.log("Copy To Clipboard Clicked" + text);
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert(" Copied to Clipboard!!", "success");
  };

  const handleExtraSpaces = () => {
    // console.log("To Remove Extra Spaces" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces removed!!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text='new Text' -->wrong way to change the text
  // setText('new Text') -->correct way to change the text
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperClick}>
          To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          To Lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleFirstCapitalClick}
        >
          To Capitalize
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCopyToClipboard}
        >
          Copy To Clipboard
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.08 * (text.split(" ").length - 1)} minutes to read the text</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Text to Preview it here"}</p>
      </div>
    </>
  );
}

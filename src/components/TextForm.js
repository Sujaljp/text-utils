import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    // console.log("UpperCase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  
  const handleClearClick = ()=>{
    // console.log("UpperCase was clicked"+text);
    let newText = "";
    setText(newText);
  }
  const heck = () =>{
    let newText = "Beluga Beluga Beluga Beluga Beluga Beluga Beluga Beluga Beluga Beluga Beluga \n";
    setText(newText);
  }

  const copyBtn= () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const onChange =(event)=>{
    // console.log("onChange");
    setText(event.target.value);
  }
  
  //text is the variable and setText is the updation function.
  const [text, setText] = useState("");

  //text= "New text" this is the wrong way to setText
  //setText("New text comes here");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb3">
            <textarea className="form-control" value={text} onChange={onChange} id="myBox" rows="10"></textarea>
        </div>
        <br></br>
        <button className="btn btn-primary mb3 mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary mb3 mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mb3 mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mb3 mx-2" onClick={heck}>Heck</button>
        <button className="btn btn-primary mb3 mx-2" onClick={copyBtn}>Copy Text</button>
    </div>
    <div className="container my-3">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{text.split(" ").length*0.008} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

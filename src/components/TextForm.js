import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const onChange =(event)=>{
    // console.log("onChange");
    setText(event.target.value);
  }
  
  //text is the variable and setText is the updation function.
  const [text, setText] = useState("Enter your text here");

  //text= "New text" this is the wrong way to setText
  //setText("New text comes here");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb3">
            <textarea className="form-control" value={text} onChange={onChange} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <br></br>
        <button className="btn btn-primary mb3" onClick={handleUpClick}>Convert to UPPERCASE</button>
    </div>
  )
}

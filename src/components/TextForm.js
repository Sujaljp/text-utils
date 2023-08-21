import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  }

  const handleLoClick = ()=>{
    // console.log("UpperCase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  }
  
  const handleClearClick = ()=>{
    // console.log("UpperCase was clicked"+text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "success")
  }
  const heck = () =>{
    let newText = "Beluga Beluga Beluga Beluga Beluga Beluga Beluga Beluga Beluga Beluga Beluga \n";
    setText(newText);
  }

  const copyBtn= () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard", "success")
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
    <div className='container' style={{color:  props.mode ==='light'? 'black':'#FFFFFF'}}>
        <h1>{props.heading}</h1>
        <div className="mb3">
            <textarea className="form-control" value={text} onChange={onChange} style={{backgroundColor: props.mode ==='light'? '#FFFFFF':'#3d3d3d' , color:  props.mode ==='light'? 'black':'#FFFFFF'}} id="myBox" rows="10"></textarea>
        </div>
        <br></br>
        <button disabled={text.length===0} className="btn btn-primary mb3 mx-2 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mb3 mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mb3 mx-2 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mb3 mx-2 my-1" onClick={heck}>Heck</button>
        <button disabled={text.length===0} className="btn btn-primary mb3 mx-2 my-1" onClick={copyBtn}>Copy Text</button>
    
    <div className="container my-3">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length !==0? text: 'Nothing to preview'}</p>
    </div>
    </div>
    </>
  )
}

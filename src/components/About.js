import React, { useState } from 'react'

export default function About(props) {
//   const [myStyle, setMyStyle] =  useState({
//       color : 'black',
//       backgroundColor: 'white'
//   })
    let myStyle = {
        color: props.mode === 'dark'? 'white' : 'black',
        backgroundColor: props.mode === 'dark'? '#161618': 'white'
    }
    let myStyle1 = {
        color: props.mode === 'dark'? 'white' : 'black',
        backgroundColor: props.mode === 'dark'? '#3d3d3d': 'white',
        border: '2px solid white'
    }
  return (
    <>
    <div className="container">
    <div className="container " style={myStyle}>
        <h2 className='my-3'>About Us</h2>      
        <div id="accordion">
            <div className="card" style={myStyle1}>
                <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze Your Text
                    </button>
                </h5>
                </div>

                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    TextUtils gives you a way to analyze your text quickly and efficiently. 
                    Be it word count, character or some other features you should explore
                </div>
                </div>
            </div>
            <div className="card" style={myStyle1}>
                <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to Use
                    </button>
                </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                    TextUtil is a completly free tool to use, just load the site and you are ready to go.
                </div>
                </div>
            </div>
            <div className="card" style={myStyle1}>
                <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                    </button>
                </h5>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                    Works in any Web Browser such as Chrome, Brave, Edge, Firefox etc.
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

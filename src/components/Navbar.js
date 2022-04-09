import React from 'react'
import PropTypes from 'prop-types';
import { Link, Router } from 'react-router-dom';

export default function Navbar(props) {
  const capitalize=(word)=>{
    const lower = word.toLowerCase();
    return lower[0].toUpperCase() + lower.slice(1);
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mx-2" >{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
            <Link to="/about" className="nav-item nav-link" >About</Link>
          </div>
          
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'} my-2 mx-2`}>
            <input type="checkbox" onClick={props.toggleMode} className="form-check-input " id="customSwitch1"/>
            <label className="form-check-label" htmlFor="customSwitch1">Enable {capitalize(props.textcolor)}mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string.isRequired

};

Navbar.defaultProps ={
    title : "Set title here"
};
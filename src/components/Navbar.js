import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} border-bottom border-bottom-${props.mode}`} data-bs-theme={props.mode}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
                
            </li>
            <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.currentMode} Theme
            </a>
            <ul className="dropdown-menu" style={{backgroundColor:'transparent'}}>
                <li><a className="dropdown-item" onClick={event => props.changeMode(event , 'light')} style={{backgroundColor:'lightcyan' , color:'black'}}>Light</a></li>
                <li><a className="dropdown-item" onClick={event => props.changeMode(event , 'dark')} style={{backgroundColor:'black' , color:'white'}}>Dark</a></li>
                <li><a className="dropdown-item" onClick={event => props.changeMode(event , 'blue')} style={{backgroundColor:'blue' , color:'white'}}>Blue</a></li>
                <li><a className="dropdown-item" onClick={event => props.changeMode(event , 'green')} style={{backgroundColor:'green' , color:'white'}}>Green</a></li>
                <li><a className="dropdown-item" onClick={event => props.changeMode(event , 'red')} style={{backgroundColor:'red' , color:'white'}}>Red</a></li>

            </ul>
            </li>

            </ul>
        </div>
        {/* <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} `} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
        </div> */}
        </div>
    </nav>
  )

}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
}

Navbar.defaultProps={
    title : "Title Here",
    about : "About Here",

}

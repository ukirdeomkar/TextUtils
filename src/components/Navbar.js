import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} border-bottom border-bottom-${props.mode}`} data-bs-theme={props.mode}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button"  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
            </li>
            </ul>
        </div>
        {/* <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} `} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
        </div> */}
        <h5>Select Theme : </h5>
        <button type="button" className="btn btn-light mx-2 border border-black rounded-pill border-2" onClick={event => props.changeMode(event , 'light')} value="light">Light</button>
        <button type="button" className="btn btn-dark mx-2 border border-black rounded-pill border-2" onClick={event => props.changeMode(event , 'dark')}>Dark</button>
        <button type="button" className="btn btn-primary mx-2 border border-black rounded-pill border-2" onClick={event => props.changeMode(event , 'blue')}>Blue</button>
        <button type="button" className="btn btn-danger mx-2 border border-black rounded-pill border-2" onClick={event => props.changeMode(event , 'red')}>Red</button>
        <button type="button" className="btn btn-success mx-2 border border-black rounded-pill border-2" onClick={event => props.changeMode(event , 'green')}>Green</button>



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

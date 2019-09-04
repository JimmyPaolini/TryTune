import React from 'react'

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Trytune</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/freeinput">Free Input</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/guidedinput">GuidedInput</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/tuningsystems" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tuning Systems
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/tuningsystems/justintonation">Just Intonation</a>
              <a className="dropdown-item" href="/tuningsystems/limit">Limit</a>
              <a className="dropdown-item" href="/tuningsystems/meantone">Meantone</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;

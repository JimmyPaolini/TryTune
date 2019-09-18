import React from 'react'

export default function Nav(props) {
  return (
    <nav>
      <a href='/' id='nav-home'>Trytune</a>

      <a href='/guidedinput'>Guided Input</a>
      <a href='/freeinput'>Free Input</a>
      <div className='dropdown'>
        <a href='/tuningsystems'>Tuning Systems</a>
        <div className='dropdown-content'>
          <a href='/tuningsystems/just'>Just</a>
          <a href='/tuningsystems/limit'>Limit</a>
          <a href='/tuningsystems/meantone'>Meantone</a>
        </div>
      </div>


      <a id='hamburger' href='#mobile-menu'>&#9776;</a>
      <div id='mobile-menu'>
        <a href='/guidedinput'>Guided Input</a>
        <a href='/freeinput'>Free Input</a>
        <a href='/tuningsystems'>Tuning Systems</a>
      </div>
    </nav>
  )
}

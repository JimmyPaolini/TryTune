import React from 'react'

export default function Nav(props) {
  return (
    <nav className='nav'>
      <a className='nav__logo nav__link' href='/'>Trytune</a>

      <a className='nav__link' href='/guidedinput'>Guided Input</a>
      <a className='nav__link' href='/freeinput'>Free Input</a>
      <div className='nav__dropdown nav__link'>
        <a className='nav__link' href='/tuningsystems'>Tuning Systems</a>
        <div className='nav__dropdown--content'>
          <a className='nav__dropdown--link' href='/tuningsystems/just'>Just</a>
          <a className='nav__dropdown--link' href='/tuningsystems/5-limit'>5-Limit</a>
          <a className='nav__dropdown--link' href='/tuningsystems/meantone'>Meantone</a>
        </div>
      </div>

      <a className='nav__hamburger nav__link' href='#mobile-menu'>&#9776;</a>
      <div className='nav__mobile-menu' id='mobile-menu'>
        <a className='nav__mobile-menu--link' href='/guidedinput'>Guided Input</a>
        <a className='nav__mobile-menu--link' href='/freeinput'>Free Input</a>
        <a className='nav__mobile-menu--link' href='/tuningsystems'>Tuning Systems</a>
      </div>
    </nav>
  )
}

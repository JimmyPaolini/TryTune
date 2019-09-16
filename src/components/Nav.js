import React from 'react'

function toggleMobileMenu() {
  console.log(document)
  let x = document.getElementById("mobileMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

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

      <a id='hamburger'>&#9776;</a>
      <div className='mobileMenu'>
        <a href='/guidedinput'>Guided Input</a>
        <a href='/freeinput'>Free Input</a>
        <a href='/tuningsystems'>Tuning Systems</a>
      </div>
    </nav>
  )
}

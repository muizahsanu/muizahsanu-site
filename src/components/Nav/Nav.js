import { useState } from 'react'
import './Nav.scss'

export default function Nav(){

  const [showDropdown, setShowDropdown] = useState(false)

  const handleClick = () =>{
    setShowDropdown(!showDropdown)
  }

  return (
    <nav className="nav">
      <div className={"closeDropdown" + (showDropdown ? ' show' : '') } onClick={handleClick}></div>
      <div className="nav__brand">Emtwnty</div>
      <div className={"nav__list" + (showDropdown ? ' show' : '') }>
        <a href="1" className="nav__item">Works</a>
        <a href="2" className="nav__item">Skills</a>
        <a href="3" className="nav__item">About</a>
        <a href="4" className="nav__item">Contact</a>
      </div>
      <i className="bx bx-menu menu-button" onClick={handleClick}></i>
    </nav>
  )
}
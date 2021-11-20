import { useState } from 'react'
import './FloatingButton.scss'

export default function FloatingButton(){

  const [showContent, setShowContent] = useState(false)

  const handleClick = () =>{
    setShowContent(!showContent)
  }

  return (
    <div className="float-button">
      <div className={"float-button__content" + (showContent ? ' show' : '') }>
        <a href="https://www.linkedin.com/in/muizahsanu/" target="blank" rel="noreferrer" className="icon">
          <i className='bx bxl-linkedin-square'></i>
        </a>
        <a href="https://github.com/muizahsanu" target="blank" rel="noreferrer" className="icon">
          <i className='bx bxl-github' ></i>
        </a>
      </div>
      <div className="indicator icon" onClick={handleClick}>
        <i className='bx bxs-info-circle' ></i>
      </div>
    </div>
  )
}
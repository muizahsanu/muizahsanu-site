import './Footer.scss'

export default function Footer(){
  return (
    <div className="footer">
      <div className="section">
        <div className="copyright">
          <i className='bx bxs-copyright icon'></i>
          <span className="text">Muiz Ahsanu 2021</span>
        </div>
        <a href="https://www.linkedin.com/in/muizahsanu/" className="link" target="blank" rel="noreferrer">
          <i className='bx bxl-linkedin-square' ></i>
          <span>LinkedIn</span>
        </a>
        <a href="https://www.instagram.com/muiz.ahsanu/" className="link" target="blank" rel="noreferrer">
          <i className='bx bxl-instagram-alt' ></i>
          <span>Instagram</span>
        </a>
        <a href="https://github.com/muizahsanu" className="link" target="blank" rel="noreferrer">
          <i className='bx bxl-github' ></i>
          <span>Github</span>
        </a>
      </div>
      <div className="section">
        <a className="link" href="/">Terms of Use</a>
        <span>|</span>
        <a className="link" href="/">Privacy Policy</a>
      </div>
    </div>
  )
}
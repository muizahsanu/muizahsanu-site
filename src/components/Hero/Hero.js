import './Hero.scss'

export default function Hero(){
  return (
    <div className="hero">
      <div className="hero__text-left">
        <div className="hero__image">
          <img src="./images/eyes-left.png" alt="eyes-left" />
        </div>
        <div className="text">
          <span>Hello, I'm</span>
          <span>Muiz Ahsanu</span>
        </div>
      </div>
      <div className="hero__text-right">
        <div className="text">
          <span>I like everything I like, and i love myself more than anything</span>
        </div>
        <div className="hero__image">
          <img src="./images/eyes-right.png" alt="eyes-left" />
        </div>
      </div>
    </div>
  )
}
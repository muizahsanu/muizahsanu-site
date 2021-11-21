import './App.scss';
import FloatingButton from './components/FloatingButton/FloatingButton';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';

const portfolioData = [
  {
    "id": "1",
    "image": "./images/content/tip-calculator-app.jpg",
    "title": "Tip calculator app using React JS",
    "link": "https://muizahsanu-tip-calculator-app.netlify.app/"
  },
  {
    "id": "2",
    "image": "./images/content/re-membah.jpg",
    "title": "Re-membah (Memory Game)",
    "link": "https://re-membah.pages.dev/"
  },
  {
    "id": "3",
    "image": "./images/content/e-commerce-product-page.jpg",
    "title": "E-commerce product page",
    "link": "https://muizahsanu-e-commerce-product-page.netlify.app/"
  }
]

const skillData = [
  {
    "skill": "Javascript",
    "classIcon": "bx bxl-javascript"
  },
  {
    "skill": "PHP",
    "classIcon": "bx bxl-php"
  },
  {
    "skill": "React JS",
    "classIcon": "bx bxl-react"
  },
  {
    "skill": "Laravel",
    "classIcon": "fab fa-laravel"
  },
  {
    "skill": "SASS",
    "classIcon": "bx bxl-sass"
  }
]

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="content">
        <div id="works" className="content-title reverse">
          Apps I've Build
        </div>
        <div className="portfolio">
          {portfolioData.map(item=>(
            <a href={item.link} className="portfolio__item" key={item.id} target="_blank" rel="noreferrer">
              <div className="thumb">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="title"> {item.title} </div>
            </a>
          ))}
        </div>
        
        <div id="skills" className="content-title">
          Skills & Technologies
        </div>
        <div className="skills">
          {skillData.map((item, index)=>(
            <div className="text-card" key={index}>
              <i className={ "icon " + (item.classIcon)}></i>
              <div className="text">{item.skill}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;

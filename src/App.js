import logo from './images/Frame274.png';
import { FaBeer } from 'react-icons/fa';
import './App.css';

function App(){
  return(
    <div className="main-portfolio">
      <div id="stars"></div>
      <div className="header-portfolio">
        <div className="header-container">
        <img className="logo" src={logo} alt="Logo"/>
        <nav className="navbar">
          <ul>
            <li>
              <a href="https://www.w3schools.com">home</a>
            </li>
            <li>
              <a href="https://www.w3schools.com">about</a>
            </li>
            <li>
              <a href="https://www.w3schools.com">products</a>
            </li>
          </ul>
        </nav>
        <div className="buttondiv">
          <button className="btn-wb">contact</button>
        </div>
        </div>
      </div>
      <section className="main-section">
        <h1>Hi, my name is <span>Ervin</span>!</h1>
        <h4>I'm 22 years old and I study <span>Software Engineering</span> at Faculty of Information Technologies</h4>
        <button type="submit" className="btn-sbw">learn more</button>
      </section>
      <section className="secondary-section">
        <h4>Check my socials!</h4>
        <hr className="line"></hr>
        <div className="icons">
            <a className="icon" href="https://www.google.com"><FaBeer />?</a>
            <a className="icon" href="https://www.google.com"><i className="bi bi-github btn-wb"></i></a>
            <a className="icon" href="https://www.google.com"><i className="bi bi-linkedin btn-wb"></i></a>
        </div>
      </section>
    </div>
  );
}

export default App;

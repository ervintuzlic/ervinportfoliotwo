import logo from './images/Frame274.png';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Your Mama
//         </a>
//       </header>
//     </div>
//   );
// }


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
        <a className="btn-wb" href="https://www.w3schools.com">contact</a>
        </div>
      </div>
      <section>
        <h1>Hi, my name is <span>Ervin</span>!</h1>
        <h4>I'm 22 years old and I study <span>Software Engineering</span> at Faculty of Information Technologies</h4>
        <button>learn more</button>
      </section>
    </div>
  );
}

export default App;

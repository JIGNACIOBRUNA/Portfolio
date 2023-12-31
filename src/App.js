import style from "./App.module.css";
import {Routes, Route} from "react-router-dom";
import {About, Home, Projects, CV} from "./views";
import React /*{useState}*/  from "react";

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => 
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className={style.body}>
      {/* <button className={style.button} onClick={toggleDarkMode}>Toggle Dark Mode</button> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route path="cv" element={<CV />} />

      </Routes>
    </div>
  );
}

export default App;

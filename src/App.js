import React from "react";
import {
  BrowserRouter as Router,  
  Routes,  
  Route,
  Link,
} from "react-router-dom";
import { ModalSwitch } from "./Pages/ModalSwitch";
import { Gallery } from "./Pages/Gallery/Gallery";
import { IMAGES } from "./data";


function App() {
  return (
    <Router>
       <Routes>
           <Route path="/" element={<ModalSwitch/>}/>
           <Route path="/gallery" element={<Gallery/>}/>           
       </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";
import {
  Vhome,
  Vheader,
  Vfooter,
  Vabout,
  Vproducts,
  Vstore
} from "./components";

ReactDOM.render(
  <Router>
    <Vheader/>
    <Routes>
      <Route path="/" element={<Vhome/>}/>
      <Route path="/about" element={<Vabout/>}/>
      <Route path="/products" element={<Vproducts/>}/>
      <Route path="/store" element={<Vstore/>}/>
    </Routes>
    <Vfooter/>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();

reportWebVitals();

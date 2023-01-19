import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pro from './Pro';
import Contact from './Contact';
import Test from './Test';
import Education from './Education';
import AboutMe from './AboutMe';
import {Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';


// const  routing =  (
//   <Router>
//       <div style={{textAlign: 'center'}}>
//         <Link to="/">Professional</Link>
//         <Link to="/Contact">Contact</Link>
//         <Link to="/Education">Education</Link>           
//       </div>
//       <Routes>
//           <Route path="/" element={ <Pro/> } />
//           <Route path="/Contact" element={<Contact/>} />
//           <Route path="/Education" element={<Education/>}/>
//       </Routes>
//   </Router>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* {routing} */}
    <header>
      <h1 align="center">My Portfolio</h1>
    </header>
    <Router>
      <div className='outer'>
        <div className='inner1'>
          <Link to="/">
          <i class="bi bi-person-circle"></i>
            About Me</Link><br/><br/>
          <Link to="/Pro">
          <i class="bi bi-person-workspace"></i>
            Professional</Link><br/><br/>
          <Link to="/Contact">
          <i class="bi bi-telephone"></i>
            Contact</Link><br/><br/>
          <Link to="/Education">
          <i class="bi bi-book"></i>
            Education</Link><br/><br/>
        </div>
        <div className='inner2'>
          <AboutMe/>
        </div>
        <div className='inner3'>
        <Routes>
          <Route path="/Pro" element={ <Pro/> } />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Education" element={<Education/>}/>
      </Routes>
        </div>
      </div>           
  </Router>
    {/* <Contact />
    <Education /> */}
    {/* <Test /> */} 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

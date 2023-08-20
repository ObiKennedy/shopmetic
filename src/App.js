//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App(){
  return(
    <div className="App">
        <Router>
          <Routes>
          <Route path='*' element={<MainApp/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

const MainApp = () =>{
  return(
    <div>
        <Header/>
        <Routes>
            <Route path='*' element={<Home/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

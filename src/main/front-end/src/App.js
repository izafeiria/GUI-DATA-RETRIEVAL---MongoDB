import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FirstPage from './components/FirstPage.jsx'
import Header from './components/Header.jsx'
import AllModels from './components/AllModels.jsx'
import Footer from './components/Footer'
import Appliances from './components/Appliances'
import Characteristics from './components/Characteristics'
import DateComparison from './components/DateComparison'
import CharsResults from './components/CharsResults'
import ApplianceResults from './components/ApplianceResults'
import DateResults from './components/DateResults'
import IDs from './components/IDs'
import ApplianceDate from './components/ApplianceDate'


function App() {
  return (
  <div >
    <Router>
      <Header/>
        <Routes> 
              <Route path = "/" element = {<FirstPage />}></Route>
              <Route path = "/models" element = {<AllModels/>}></Route>
              <Route path = "/models/ids" element = {<IDs/>}></Route>
              
              <Route path = "/models/appliances" element = {<Appliances/>}></Route>
              <Route path = "/models/appliances/results" element = {<ApplianceResults/>}></Route>

              <Route path = "/models/characteristics" element = {<Characteristics/>}></Route>
              <Route path = "/models/characteristics/results" element = {<CharsResults/>}></Route>

              <Route path = "/models/date-value" element = {<DateComparison/>}></Route>
              <Route path = "/models/date-value/results" element = {<DateResults/>}></Route>

              <Route path = "/models/applianceDate" element = {<ApplianceDate/>}></Route>
              <Route path = "/models/applianceDate/results" element = {<DateResults/>}></Route>
        </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;



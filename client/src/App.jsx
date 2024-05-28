import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/home'
import "./styles/header.css"
import "./styles/section1.css"
import "./styles/section2.css"
import "./styles/section3.css"
import "./styles/section4.css"
import "./styles/section5.css"
import "./styles/section6.css"
import "./styles/footer.css"
import "./styles/chatbot.css"
import "./styles/contact.css"
import "./styles/medi.css"
import "./styles/login.css"

import Contact from './components/contact'

import Medi from './components/medi'

import TherpyChatbot from './components/therpychatbot'
import DiagosisChatbot from './components/diagonis'
import Mood from './components/mood'

import Service from './components/Service'
import Login from './components/login'
import Yoga from './components/yoga'
import Awareness from './components/awareness'

function App() {
 

  return (
  
     
    <>
    <Router>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/diagnosis' element={<DiagosisChatbot />} />
          <Route path='/therpy' element={<TherpyChatbot />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service/>} />
          <Route path='/medi' element={<Medi/>} />
          <Route path='/mood' element={<Mood/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/yoga' element={<Yoga/>} />
          <Route path='/awareness' element = {<Awareness/>}/>
            
          </Routes>
        </Router></>
  )
}

export default App

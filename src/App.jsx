import React from 'react'
import './App.css'
import User from './components/User'
import Pet from './components/Pet'
import ClinicHistory from './components/ClinicHistory'
import Appointment from './components/Appointment'
import Vet from './components/Vet'
import Treatment from './components/Treatment'
import Exam from './components/Exam'


function App() {


  return (
    <>
    <div className='app'>
     <h1>API-PETS</h1>
     <hr className='hr__title'/>
     <div className='content__img-tables'>
      <h2>Tablas-Relaciones</h2>
      <img src="images/relaciones.png" alt="" />
     </div>
     <User />
     <Pet />
     <ClinicHistory />
     <Appointment />
     <Vet />
     <Treatment />
     <Exam />
     </div>
    </>
  )
}

export default App

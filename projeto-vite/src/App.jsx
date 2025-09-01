import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensagem from './components/Mensagem'
import Infoaluno from './components/infoaluno'
import InfoCurso from './components/infocurso'

function App() {
  

  return (
    <>
      <h1> Aula ReactJS</h1>
      <Mensagem />
      <hr />
      <Infoaluno />
      <hr />
      <InfoCurso />
    </>
  )
}

export default App

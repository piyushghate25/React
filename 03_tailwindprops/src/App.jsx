import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let newArr = [24,53]

  return (
    <>
    <Card  temple="Puri" price="100$"/>
    <Card  temple="shegoan" />
    </>
  )
}

export default App

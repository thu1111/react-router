import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <Navbar/>
      <MainContainer/>
      <Footer/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenMoviList from './components/GenMoviList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
       <Header /> 
       <Slider />
       <ProductionHouse />
       <GenMoviList />

    </div>
  )
}

export default App
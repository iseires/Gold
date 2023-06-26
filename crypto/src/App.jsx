import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './Components/Navbar'
import './App.css'
import List from './Components/List'
import Carousel from './Components/Carousel'
import Text from './Components/Text'
function App() {

  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <div className="side-1">
          <List />
          <Text />
        </div>
        <Carousel />
      </div>
    </div>
  );
}

export default App


import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Blue from './components/Blue.jsx'
import Red from './components/Red.jsx'
import Home from './components/Home.jsx'

function App() {


  return (
    <>
      <div id="container">
      
       <div id="navbar">
         <Link to="/blue"><h3>Blue</h3></Link>
         <Link to="/red"><h3>Red</h3></Link>
         <Link to="/"><h3>Home</h3></Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/Blue" element={<Blue/>}/>
          <Route path="/Red" element={<Red/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </div>
   </> 
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Pages/Home';
import Donate from './component/Pages/Donate'
import About from './component/Pages/About'
import Gallery from './component/Pages/Gallery'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Header/>
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/donate' element={<Donate/>} />
          <Route path='/about' element= {<About/>} />
          <Route path='/gallery' element= {<Gallery/>} />
      </Routes>
     </Router>
  
  )
}

export default App;

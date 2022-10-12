import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    
  <>
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />

      
      
      </Routes>
    </Router>
    <ToastContainer toastClassName=" relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer" />
  </>
  );
}

export default App;

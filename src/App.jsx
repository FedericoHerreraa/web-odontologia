import './App.css'
import Header from './components/header/Header'
import Contactanos from './pages/contactanos/Contactanos'
import NuestrosServicios from './pages/nuestros-servicios/NuestrosServicios'
import SobreNosotros from './pages/sobre-nosotros/SobreNosotros'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactanos' element={<Contactanos/>}/>
        <Route path='/sobreNosotros' element={<SobreNosotros/>}/>
        <Route path='/nuestrosServicios' element={<NuestrosServicios/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import Header from './components/header/Header'
import Contactanos from './pages/contactanos/Contactanos'
import NuestrosServicios from './pages/nuestros-servicios/NuestrosServicios'
import SobreNosotros from './pages/sobre-nosotros/SobreNosotros'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/contactanos' element={<Contactanos/>}/>
        <Route path='/sobreNosotros' element={<SobreNosotros/>}/>
        <Route path='/nuestrosServicios' element={<NuestrosServicios/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

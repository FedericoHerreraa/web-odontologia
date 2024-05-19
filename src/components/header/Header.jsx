import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import { useState } from 'react';
import {useStickyBox} from "react-sticky-box"; // para uso de sticky en el headerinferior

export default function Header() {

  const stickyRef = useStickyBox({offsetTop: 40, offsetBottom: 0})
  return (
    <div className={styles.contenedor}>
      <header className={styles.header}>
        <div className={styles.headerSuperior}>
          <div className={styles.telefono}>
            <LocalPhoneIcon/>
            <p>+54 (911) 6296-4493</p>
          </div>
          <div className={styles.nombre}>
            <p>Christian Saad</p>
          </div>
          <div className={styles.redes}>
            <WhatsAppIcon fontSize='large'/>
            <MailOutlineIcon fontSize='large'/>
            <InstagramIcon fontSize='large'/>
          </div>
        </div>
    
        <div ref={stickyRef} className={styles.headerInferior}>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Inicio</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/nuestrosServicios'>Nuestros servicios</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/sobreNosotros'>Sobre nosotros</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/contactanos'>Contactanos</Link>
        </div>
        
      </header>
      <div className={styles.infoImg}>
        <h1>Dr. Christian Saad</h1>
        <div>
          <h2>Especialidades</h2>
          <ul>
            <li>Odontología General</li>
            <li>Ortodoncia</li>
            <li>Implantología</li>
            <li>Endodoncia</li>
            <li>Periodoncia</li>
            <li>Cirugía Oral y Maxilofacial</li>
            <li>Estética Dental</li>
          </ul>
        </div>
      </div>
    </div>


  )
}
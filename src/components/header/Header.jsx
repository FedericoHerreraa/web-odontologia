import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Header() {
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
        <div className={styles.headerInferior}>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Inicio</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/nuestrosServicios'>Nuestros servicios</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/sobreNosotros'>Sobre nosotros</Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/contactanos'>Contactanos</Link>
        </div>
      </header>
      <div className={styles.infoImg}>
        <h1>Dr. Christian Saad</h1>
        <div>
          <h2>Doctor of Dental Medicine</h2>
          <p>Dr. Shannons has over 10 years of experience in dentistry. He is committed to providing personalized care to his clients, and keeping his.</p>
        </div>
      </div>
    </div>


  )
}
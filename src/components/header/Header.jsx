import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import img from './../../../img/LOGO.jpg'

export default function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.telefono}>
          <img src={img} className={styles.logo} alt="" />
        </div>
        <div className={styles.navegacion}>
          <Link className={styles.link} to="/">
            Inicio
          </Link>
          <Link className={styles.link} to="/nuestrosServicios">
            Nuestros servicios
          </Link>
          <Link className={styles.link} to="/sobreNosotros">
            Sobre nosotros
          </Link>
          <Link className={styles.link} to="/contactanos">
            Contactanos
          </Link>
        </div>
        <div className={styles.redes}>
          <WhatsAppIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }}/>
          <MailOutlineIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }}/>
          <InstagramIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }}/>
        </div>
      </header>
  );
}

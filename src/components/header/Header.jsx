import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import img from './../../../img/ChristianSaad-07.png'
import imgfixed from './../../../img/ChristianSaad-02.png'
import { useState } from "react";

export default function Header() {
  const [fix, setFix] = useState(false)

  function setFixedSideBar(){
    if (window.scrollY >= 300){
      setFix(true)
    } else{
      setFix(false)
    }

  }

  window.addEventListener("scroll", setFixedSideBar)
  return (
      <header className={fix ? styles.headerfixed : styles.header}>
        <div className={styles.telefono}>
          <img src={ fix ? imgfixed : img} className={styles.logo} alt="" />
        </div>
        <div className={styles.navegacion}>
          <Link className={fix ? styles.linkfixed : styles.link} to="/">
            Inicio
          </Link>
          <Link className={fix ? styles.linkfixed : styles.link} to="/nuestrosServicios">
            Nuestros servicios
          </Link>
          <Link className={fix ? styles.linkfixed : styles.link} to="/sobreNosotros">
            Sobre nosotros
          </Link>
          <Link className={fix ? styles.linkfixed : styles.link} to="/contactanos">
            Contactanos
          </Link>
        </div>
        <div className={fix ? styles.redesfixed : styles.redes}>
          <WhatsAppIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }}/>
          <MailOutlineIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }}/>
          <InstagramIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }}/>
        </div>
      </header>
  );
}

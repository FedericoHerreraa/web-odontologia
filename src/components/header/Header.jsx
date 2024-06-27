import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import img from './../../../img/ChristianSaad-07.png';
import imgfixed from './../../../img/ChristianSaad-02.png';
import { useState, useEffect } from "react";
import SideMenu from "../menuSlider/SideMenu";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppComponent from "../whatsapp/WhatsApp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFix(window.scrollY >= 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={fix ? styles.headerfixed : styles.header}>
        <div className={styles.telefono}>
          <img src={fix ? imgfixed : img} className={styles.logo} alt="" />
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
          <WhatsAppComponent />
          <MailOutlineIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }} className="text-red-500" />
          <InstagramIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }} className="text-pink-500" />
        </div>
        <div className={styles.menuButton}>
          <button onClick={toggleMenu} className="p-2 text-white-500">
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </header>
      <SideMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}

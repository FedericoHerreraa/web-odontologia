import styles from "./Header.module.css";
import { Link } from "react-router-dom";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
import img from './../../../img/ChristianSaad-07.png';
import imgfixed from './../../../img/ChristianSaad-02.png';
import { useState, useEffect } from "react";
import SideMenu from "../menuSlider/SideMenu";
import MenuIcon from "@mui/icons-material/Menu";
// import WhatsAppComponent from "../whatsapp/WhatsApp";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [fix, setFix] = useState(false);

  // const updateMetaThemeColor = (color) => {
  //   let metaThemeColor = document.querySelector("meta[name=theme-color]");
  //   if (metaThemeColor) {
  //     metaThemeColor.setAttribute("content", color);
  //   } else {
  //     metaThemeColor = document.createElement('meta');
  //     metaThemeColor.name = "theme-color";
  //     metaThemeColor.content = color;
  //     document.head.appendChild(metaThemeColor);
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      setFix(window.scrollY >= 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const headerColor = fix ? 'white' : '#00173A'; 
  //   updateMetaThemeColor(headerColor);
  // }, [fix]);

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
          {/* <WhatsAppComponent/> */}
          {/* <MailOutlineIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }} className="text-red-400" />
          <InstagramIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }} className="text-pink-800" /> */}
        </div>
        <div className={fix? styles.menuButtonFixed : styles.menuButton}>
          <button onClick={toggleMenu} className="p-2">
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </header>
      <SideMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}

import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import img from './../../../img/ChristianSaad-07.png'
import imgfixed from './../../../img/ChristianSaad-02.png'
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export default function Header() {
  const [fix, setFix] = useState(false)
  const phoneNumber = 541170266735;
  const message = "¡Hola!, quisiera hacer una consulta";
  const encodedMessage = encodeURIComponent(message);

  function setFixedSideBar(){
    if (window.scrollY >= 300){
      setFix(true)
    } else{
      setFix(false)
    }

  }
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

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
          <AlertDialog>
            <AlertDialogTrigger><WhatsAppIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }}/></AlertDialogTrigger>
            <AlertDialogContent className="p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <WhatsAppIcon className="text-customBlue" style={{ fontSize: '3rem' }} />
              </div>
              <AlertDialogTitle className="text-2xl font-bold text-customBlue text-center mb-4">WhatsApp</AlertDialogTitle>
              <AlertDialogDescription className="text-lg text-center mb-4">
                Esta acción te redireccionará a WhatsApp, ¿Estás seguro/a?
              </AlertDialogDescription>
              <div className="flex justify-center space-x-4">
                <AlertDialogCancel className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md">Cancelar</AlertDialogCancel>
                <AlertDialogAction className="px-6 py-2 bg-customBlue text-white rounded-md" ><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Abrir WhatsApp
                    </a></AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
          <MailOutlineIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }}/>
          <InstagramIcon fontSize="medium" style={{ opacity: 0.8, cursor: 'pointer' }}/>
        </div>
      </header>
  );
}

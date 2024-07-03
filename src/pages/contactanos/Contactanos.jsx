import { useState } from "react";
import styles from "./Contactanos.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { CiPaperplane } from "react-icons/ci";
import PinDropIcon from '@mui/icons-material/PinDrop';
import Iframe from 'react-iframe'

import ScrollToTop from "@/components/scroll/ScrollToTop";

// import img from "./../../../img/image.png";

export default function Contactanos() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [asunto, setAsunto] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("enviando");
    // const response = await sendMail({nombre, email, mensaje})
    // console.log(response)
  };

  return (
    <div >
      <ScrollToTop/>
      <div className={styles.contenedor}>
        <div className={styles.ContForm}>
          <div className={styles.titulo}>
            <h1 className={styles.h1}>Contactanos</h1>
            <CiPaperplane size={'40px'}/>
          </div>
          <form onSubmit={handleSubmit} className={styles.campoForm}>
            <div className={styles.section}>
              <div>
                <input
                  className={styles.inputs}
                  type="text"
                  value={nombre}
                  placeholder="Nombre Completo"
                  onChange={(e) => setNombre(e.target.value)}
                />
                <input
                  className={styles.inputs}
                  type="text"
                  value={asunto}
                  placeholder="Asunto"
                  onChange={(e) => setAsunto(e.target.value)}
                />
              </div>
              <div>
                <input
                  className={styles.inputs}
                  type="email"
                  value={email}
                  placeholder="Correo electrónico"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className={styles.inputs}
                  type="text"
                  value={telefono}
                  placeholder="Teléfono Celular"
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.campoTexto}>
              <input
                className={styles.txt}
                type="text"
                value={mensaje}
                placeholder="Escriba aquí su mensaje..."
                onChange={(e) => setMensaje(e.target.value)}
              />
            </div>
            <input className={styles.enviar} type="submit" value="Enviar"/>
          </form>
        </div>
        <div className={styles.contEncontranos}>
          <div>
            <div className={styles.contenedorUbicacion}>
              <h1>Encontranos</h1>
              <PinDropIcon/>
            </div>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.280204830463!2d-58.400699325341755!3d-34.59707537295656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca969cdfeaff%3A0xabffacf5462f059a!2sMarcelo%20Torcuato%20de%20Alvear%202149%2C%20C1122AAG%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1718206805718!5m2!1ses-419!2sar"
              
            className={styles.ubi}
            display="block"
            position="relative"/>
    
          </div>
          <div className={styles.redes}>
            <ul>
              <li>
                <InstagramIcon /> 
                 <a href="https://www.instagram.com/dr.christiansaad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Dr.ChristianSaad</a>
                
              </li>
              <li>
                <WhatsAppIcon /> 
                 +54 9 11 7026-6735
              </li>
              <li >
                <MailOutlineIcon /> 
                       ChristianSaad@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

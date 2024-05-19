import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Header() {
  return (
    <div className={styles.contenedor}>
      <header className={styles.header}>
        <div className={styles.telefono}>
          <p>LOGO DE LA WEB</p>
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
          <WhatsAppIcon fontSize="medium" />
          <MailOutlineIcon fontSize="medium" />
          <InstagramIcon fontSize="medium" />
        </div>
      </header>
      <div className={styles.infoImg}>
        <h1>Dr. Christian Saad</h1>
        <p className={styles.descripcion}>
          Consultorio de odontologia segura, confiable y la mejor de la zona.
        </p>
        <div className={styles.especialidades}>
          <p>Odontología General</p>
          <p>Ortodoncia</p>
          <p>Implantología</p>
          <p>Endodoncia</p>
          <p>Periodoncia</p>
          <p>Cirugía Oral y Maxilofacial</p>
          <p>Estética Dental</p>
        </div>
      </div>
    </div>
  );
}

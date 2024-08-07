import { useRef } from "react";
import styles from "./Contactanos.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { CiPaperplane } from "react-icons/ci";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Iframe from "react-iframe";
import emailjs from "emailjs-com";
import ScrollToTop from "@/components/scroll/ScrollToTop";
import "sweetalert2/dist/sweetalert2.css";
import Swal from "sweetalert2";

export default function Contactanos() {
  const form = useRef();

  const isMobile = () => window.innerWidth <= 768;

  const show = () => {
    Swal.fire({
      text: "Se ha enviado correctamente!",
      icon: "success",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_626vxf9",
        "template_6rl4o8e",
        form.current,
        "Ph0qV7aDICmYHOLkB"
      )
      .then(
        (result) => {
          console.log(result.text);
          show();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Ocurrió un error, por favor intente nuevamente");
        }
      );

    emailjs
      .sendForm(
        "service_626vxf9",
        "template_h1tmw45",
        form.current,
        "Ph0qV7aDICmYHOLkB"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      <ScrollToTop />
      <div className={styles.contenedor}>
        <div className={styles.ContForm}>
          <div className={styles.titulo}>
            <h1 className={styles.h1}>Contactanos</h1>
            <CiPaperplane size={isMobile() ? "25px" : "40px"} />
          </div>
          <form ref={form} onSubmit={sendEmail} className={styles.campoForm}>
            <div className={styles.section}>
              <div>
                <input
                  className={styles.inputs}
                  type="text"
                  name="from_name"
                  placeholder="Nombre Completo"
                  required
                />
                <input
                  className={styles.inputs}
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  required
                />
              </div>
              <div>
                <input
                  className={styles.inputs}
                  type="email"
                  name="from_email"
                  placeholder="Correo electrónico"
                  required
                />
                <input
                  className={styles.inputs}
                  type="tel"
                  placeholder="Teléfono Celular"
                  name="from_phone"
                  required
                />
              </div>
            </div>
            <div className={styles.campoTexto}>
              <input
                className={styles.txt}
                type="text"
                name="message"
                placeholder="Escriba aquí su mensaje..."
                required
              />
            </div>
            <input className={styles.enviar} type="submit" value="Enviar" />
          </form>
        </div>
        <div className={styles.contEncontranos}>
          <div className={styles.tituloMapa}>
            <div className={styles.contenedorUbicacion}>
              <h1>Encontranos</h1>
              <PinDropIcon fontSize="small" />
            </div>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.280204830463!2d-58.400699325341755!3d-34.59707537295656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca969cdfeaff%3A0xabffacf5462f059a!2sMarcelo%20Torcuato%20de%20Alvear%202149%2C%20C1122AAG%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1718206805718!5m2!1ses-419!2sar"
              className={styles.ubi}
              display="block"
              position="relative"
            />
          </div>
          <div className={styles.redes}>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/dr.christiansaad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  style={{ display: "flex", alignItems: "center", gap: "7px" }}
                  target="blank"
                >
                  <InstagramIcon
                    style={{ opacity: 0.8, cursor: "pointer" }}
                    fontSize="small"
                  />
                  <p>Dr.ChristianSaad</p>
                </a>
              </li>
              <li>
                <WhatsAppIcon style={{ opacity: 0.8 }} fontSize="small" />
                <p>+54 9 11 7026-6735</p>
              </li>
              <li>
                <MailOutlineIcon style={{ opacity: 0.8 }} fontSize="small" />
                <p>doctorsaadcenturion@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

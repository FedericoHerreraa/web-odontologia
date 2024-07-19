import { Cards } from "../../components/cards/Cards";
import styles from "./Home.module.css"
import Comentarios from "../../components/comentarios/Comentarios";
import img from './../../../img/ChristianSaad-04.png'
import ScrollToTop from "@/components/scroll/ScrollToTop";
import WhatsAppComponent from '../../components/whatsapp/WhatsApp'

export default function Home() {  
  return (
    <>
      <WhatsAppComponent/>
      <div className={styles.home}>
        <ScrollToTop/>
        <div className={styles.infoImg}>
          <div className={styles.encabezado}>
            <img src={img} alt="" style={{ width: 700 }}/>
            <p className={styles.descripcion}>
              Consultorio privado de odontología seguro y confiable.
            </p>
          </div>
          <div className={styles.containerSlider}>
            <div className={styles.especialidades}>
              <p>Odontología General</p>
              <p>Ortodoncia</p>
              <p>Implantología</p>
              <p>Endodoncia</p>
              <p>Periodoncia</p>
              <p>Estética Dental</p>
              <p>Odontología General</p>
              <p>Ortodoncia</p>
              <p>Implantología</p>
              <p>Endodoncia</p>
              <p>Periodoncia</p>
              <p>Estética Dental</p>
            </div>
          </div>
          <Cards/>
        </div>
        <Comentarios/>
      </div>
    </>
  );
}

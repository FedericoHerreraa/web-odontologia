import { Cards } from "../../components/cards/Cards";
import styles from "./Home.module.css"
import Footer from "../../components/footer/Footer";
import Comentarios from "../../components/comentarios/Comentarios";
import img from './../../../img/ChristianSaad-04.png'
import ScrollToTop from "@/components/scroll/ScrollToTop";


export default function Home() {  
  return (
    <div className={styles.home}>
      <ScrollToTop/>
      <div className={styles.infoImg}>
        <div className={styles.encabezado}>
          <img src={img} alt=""  style={{ width: 700 }}/>
          <p className={styles.descripcion}>
            Consultorio privado de odontología seguro, confiable y el mejor de la zona.
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
  
      <Footer/>
    </div>
  );
}

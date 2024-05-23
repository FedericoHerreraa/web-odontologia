import { Cards } from "../../components/cards/Cards";
import styles from "./Home.module.css"
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.infoImg}>
        <h1>Dr. Christian Saad</h1>
        <p className={styles.descripcion}>
          Consultorio de odontología seguro, confiable y el mejor de la zona.
        </p>
        <div className={styles.containerSlider}>
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
      <Cards/>
    
      <Footer/>
    </div>
  );
}

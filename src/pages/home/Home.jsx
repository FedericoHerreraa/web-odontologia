import { Cards } from "../../components/cards/Cards";
import Description from "../../components/description/Description";
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
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
      <Description />
      <Cards/>
    </div>
  );
}

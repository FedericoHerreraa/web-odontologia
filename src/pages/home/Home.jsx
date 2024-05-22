import Description from "../../components/description/Description";
import styles from "./Home.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

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
      <Description />
    </div>
  );
}

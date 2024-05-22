import { Cards } from "../../components/cards/Cards";
import Description from "../../components/description/Description";
<<<<<<< HEAD

// import Slider from "react-slick";
=======
import { Footer } from "../../components/footer/Footer";
>>>>>>> ae2a987c37712c3d4fb8ef519412560c3e02f761

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
      <Cards/>
      <Footer/>
    </div>
  );
}

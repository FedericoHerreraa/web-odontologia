import styles from "/src/components/cards/Cards.module.css";
import CustomSeparator from "../custom-separator/CustomSeparator";
import img from "./../../../img/Imagen-consultorio.png";
import img3 from './../../../img/imagen-tratamiento.jpg'
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <div className={styles.contenedorFondo}>
      <CustomSeparator />
      <div className={styles.contenedor}>
        <div className={styles.card}>
          <img src={img} alt="imagenConocenos" />
          <div>
            <h3>Conocenos</h3>
            <p className={styles.texto}>
              Conocé nuestro consultorio, donde la salud y la estética dental se
              unen para brindarte una experiencia única. Nuestro equipo de
              expertos está comprometido con tu bienestar, utilizando tecnología
              de punta y tratamientos personalizados para garantizarte los
              mejores resultados
            </p>
            <Link to="/sobreNosotros" className={styles.boton}>Ver Más <ArrowRight size={20} strokeWidth={1.7}className={styles.icono}/> </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <h3>Tratamientos</h3>
            <p className={styles.texto}>
              En nuestro consultorio, estamos dedicados a cuidar de tu salud
              bucal con una amplia gama de servicios diseñados para ti y tu
              familia. Nuestro equipo de profesionales altamente capacitados
              utiliza la última tecnología para garantizarte una atención de
              calidad y resultados excepcionales.
            </p>
            <Link to="/nuestrosServicios" className={styles.boton}>Ver Más <ArrowRight size={20} strokeWidth={1.7}className={styles.icono}/> </Link>
          </div>
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  )
};

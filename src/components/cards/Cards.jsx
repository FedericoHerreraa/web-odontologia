import styles from "/src/components/cards/Cards.module.css";
import CustomSeparator from "../custom-separator/CustomSeparator";
import img from "./../../../img/Imagen-consultorio.jpg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

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
            <button className={styles.boton}>Ver más <MdOutlineKeyboardDoubleArrowRight/></button>
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
            <button className={styles.boton}>Ver más <MdOutlineKeyboardDoubleArrowRight/></button>
          </div>
          <div className={styles.imagen1}>
            <div>
              <h2>tratamientos</h2>
              <p>Ortodoncia</p>
              <p>Odontologia</p>
              <p>Blanqueamiento</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imagen1}>
            <div>
              <h2>tratamientos</h2>
              <p>Ortodoncia</p>
              <p>Odontologia</p>
              <p>Blanqueamiento</p>
            </div>
          </div>
          <div>
            <h3>Otro titulo</h3>
            <p className={styles.texto}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod eligendi eveniet earum consequuntur dignissimos fugit, provident maiores autem non sit iusto dolorum, error porro veritatis. Eum ea deleniti iusto?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit quia, ipsam consequatur mollitia quidem, dignissimos pariatur eos reiciendis assumenda ad dolor sint nesciunt ea ullam praesentium laborum sit cumque!
            </p>
            <button className={styles.boton}>Ver más <MdOutlineKeyboardDoubleArrowRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

import styles from '/src/components/cards/Cards.module.css'
import CustomSeparator from "../custom-separator/CustomSeparator";

export const Cards = () => {
  return (
    <>
      <CustomSeparator/>
      <div className={styles.contenedor}>
      
        <div className={styles.card}>
          <h3>Conocenos</h3>
            <p>Conocé nuestro consultorio, donde la salud y la estética dental se unen para brindarte una experiencia única. Nuestro equipo de expertos está comprometido con tu bienestar, utilizando tecnología de punta y tratamientos personalizados para garantizarte los mejores resultados</p>
            <button>Ver más</button>
        </div>
        <div className={styles.card}>
          <h3>Conocenos</h3>
          <p>Conocé nuestro consultorio, donde la salud y la estética dental se unen para brindarte una experiencia única. Nuestro equipo de expertos está comprometido con tu bienestar, utilizando tecnología de punta y tratamientos personalizados para garantizarte los mejores resultados</p>
          <button>Ver más</button>
        </div>
        <div className={styles.card}>
          <h3>Tratamientos</h3>
          <p>En nuestro consultorio, estamos dedicados a cuidar de tu salud bucal con una amplia gama de servicios diseñados para ti y tu familia. Nuestro equipo de profesionales altamente capacitados utiliza la última tecnología para garantizarte una atención de calidad y resultados excepcionales.</p>
          <button>Ver más</button>
        </div>
        
      </div>
    </>
  )
}

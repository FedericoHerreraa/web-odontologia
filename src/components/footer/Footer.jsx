import styles from './Footer.module.css'
import img from './../../../img/image.png'
import imgLogo from './../../../img/LOGO.jpg'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLogo}>
        <img alt="Logo" src={imgLogo}/>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Coultorio Dr. Christian Saad</h3>
        <p className={styles.footerText}>
          <a href="#" className={styles.footerLink}>Conocé el consultorio</a><br />
          <a href="#" className={styles.footerLink}>Inicio</a><br />
          <a href="#" className={styles.footerLink}>Sobre nosotros</a><br />
          <a href="#" className={styles.footerLink}>Nuestros Servicios</a><br />
          <a href="#" className={styles.footerLink}>Contactanos</a><br />
          <a href="#" className={styles.footerLink}>Trabaja con Nosotros</a><br />
        </p>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Ubicacion</h3>
        <p className={styles.footerText}>
          <img src={img} alt="Imagen con link a google maps" />
        </p>
      </div>
      <div className={styles.footerBottom}>
        <p>© Dr. christian saad 2024 - Todos los derechos reservados - Recoleta - Buenos Aires</p>
        <p>Superintendencia de Servicios de Salud</p>
      </div>
    </footer>
  )
}

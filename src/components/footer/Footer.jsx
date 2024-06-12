import styles from './Footer.module.css'
import Iframe from 'react-iframe'
import imgLogo from './../../../img/LOGO.jpg'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLogo}>
        <img alt="Logo" src={imgLogo}/>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>Consultorio Dr. Christian Saad</h3>
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
        <h3 className={styles.footerTitle}>Ubicación</h3>
        <p className={styles.footerText}>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.280204830463!2d-58.400699325341755!3d-34.59707537295656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca969cdfeaff%3A0xabffacf5462f059a!2sMarcelo%20Torcuato%20de%20Alvear%202149%2C%20C1122AAG%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1718206805718!5m2!1ses-419!2sar"
            width="350px"
          height="250px"
          className=""
          display="block"
          position="relative"/>
        </p>
      </div>
      <div className={styles.footerBottom}>
        <p>© Dr. christian saad 2024 - Todos los derechos reservados - Recoleta - Buenos Aires</p>
        <p>Superintendencia de Servicios de Salud</p>
      </div>
    </footer>
  )
}

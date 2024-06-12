import SimpleSlider from '../carousel/SimpleSlider';
import styles from './Comentarios.module.css';

export default function Comentarios() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Calificaciones de Nuestros Clientes</h1>
            <SimpleSlider/>
        </div>
    )
}
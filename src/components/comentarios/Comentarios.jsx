import SimpleSlider from '../carousel/SimpleSlider';
import styles from './Comentarios.module.css';

export default function Comentarios() {
    return (
        <div className={styles.container}>
            <h3 className={styles.titulo}>Comentarios de nuestros clientes</h3>
            <SimpleSlider/>
        </div>
    )
}
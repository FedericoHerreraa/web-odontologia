import SimpleSlider from '../carousel/SimpleSlider';
import CustomSeparator from '../custom-separator/CustomSeparator';
import styles from './Comentarios.module.css';

export default function Comentarios() {
    return (
        <div className={styles.container}>
            <CustomSeparator/>
            <h1 className={styles.titulo}>Calificaciones de Nuestros Clientes</h1>
            <SimpleSlider/>
        </div>
    )
}
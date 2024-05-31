import styles from './Comentarios.module.css';

export default function Comentarios() {
    return (
        <div className={styles.container}>
            <h3 className={styles.titulo}>Comentarios de la Gente</h3>
            <p>Excelente atención, muy recomendable</p>
            <p>Me encantó el consultorio, muy moderno</p>
            <p>El doctor es muy amable y profesional</p>
        </div>
    )
}
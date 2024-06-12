
import styles from './SobreNosotros.module.css';

export default function SobreNosotros() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Conócenos</h1>
            </div>
            <div className={styles.grid}>
                <div className={styles.cardContainer}>
                    <div className={styles.item}>
                        <h2>Misión</h2>
                        <p>
                            Brindar atención dental de alta calidad con un enfoque personalizado, utilizando tecnología avanzada y un equipo de profesionales comprometidos con la salud y el bienestar bucal de nuestros pacientes.
                        </p>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.item}>
                        <h2>Visión</h2>
                        <p>
                            Ser la clínica dental líder en la comunidad, reconocida por nuestra excelencia en el cuidado dental y nuestro compromiso con la innovación y la educación continua.
                        </p>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.item}>
                        <h2>Valores</h2>
                        <div className={styles.valuesGrid}>
                            <div className={styles.valueCard}>Excelencia</div>
                            <div className={styles.valueCard}>Integridad</div>
                            <div className={styles.valueCard}>Compasión</div>
                            <div className={styles.valueCard}>Innovación</div>
                            <div className={styles.valueCard}>Educación</div>
                            <div className={styles.valueCard}>Colaboración</div>
                            <div className={styles.valueCard}>Responsabilidad</div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.item}>
                        <h2>Objetivos</h2>
                        <p>
                            Mejorar la calidad de vida de nuestros pacientes promoviendo una salud bucal óptima y fomentando hábitos saludables para toda la vida.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

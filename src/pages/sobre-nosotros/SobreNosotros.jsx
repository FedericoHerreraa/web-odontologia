
import { AccordionDemo } from '@/components/preguntas/Preguntas';
import styles from './SobreNosotros.module.css';
import Footer from '@/components/footer/Footer';
import CustomSeparator from '@/components/custom-separator/CustomSeparator';
import ScrollToTop from '@/components/scroll/ScrollToTop';

export default function SobreNosotros() {
    return (
        <>
            <ScrollToTop/>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Conócenos</h1>
                    <p>El fin de este apartado es que nos conozcas un poco mejor: sobre cual es nuestra visión, nuestros valores, la visión que tenemos y la misión que buscamos! </p>
                    <p>Además encontrarás preguntas frecuentes con sus repuestas.</p>
                    <CustomSeparator/>
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
                <div className={styles.containerOpiniones}>
                    <h2>Preguntas frecuentes</h2>
                    <AccordionDemo/>
                </div>
                
            </div>
            <Footer/>
        </>
    );
}

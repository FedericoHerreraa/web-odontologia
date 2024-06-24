import Footer from '@/components/footer/Footer';
import styles from './NuestrosServicios.module.css';
import { FaTeeth, FaTooth, FaTeethOpen } from 'react-icons/fa';
import CustomSeparator from '@/components/custom-separator/CustomSeparator';
import ScrollToTop from '@/components/scroll/ScrollToTop';

export default function NuestrosServicios() {
    return (
        <>
            <ScrollToTop/>
            <div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1>Tratamientos</h1>
                        <p>En este apartado se encuentran todos los servicios que ofrecemos en nuestro consultorio</p>
                        <p>Si necesita mas información sobre alguno de estos tratamientos, ¡No dude en consultarnos!</p>
                        <CustomSeparator/>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.cardContainer}>
                            <FaTeeth className={styles.icono} />
                            <div className={styles.item}>
                                <h2>BLANQUEAMIENTO DENTAL</h2>
                                <p>Tratamientos de blanqueamiento dental interno o externo para obtener una sonrisa más blanca y radiante en poco minutos.</p>
                            </div>
                        </div>
                        <div className={styles.cardContainer}>
                            <FaTooth className={styles.icono} />
                            <div className={styles.item}>
                                <h2>PRÓTESIS DENTALES</h2>
                                <p>Restauración de piezas dentales a través de Coronas, Puentes, Prótesis o Incrustaciones. Contamos con Fresadora 3D ultra precisa.</p>
                            </div>
                        </div>
                        <div className={styles.cardContainer}>
                            <FaTeethOpen className={styles.icono} />
                            <div className={styles.item}>
                                <h2>ORTODONCIA</h2>
                                <p>Alineación dental por medio de Brackets o Placas Alineadoras. Disponemos de sistemas de Ortodoncia Cosmética casi invisibles.</p>
                            </div>
                        </div>
                        <div className={styles.cardContainer}>
                            <FaTooth className={styles.icono} />
                            <div className={styles.item}>
                                <h2>ODONTOLOGÍA GENERAL</h2>
                                <p>Diagnóstico y restauración de piezas dentarias afectadas por pequeñas caries o traumatismos leves que no requieren prótesis.</p>
                            </div>
                        </div>
                        <div className={styles.cardContainer}>
                            <FaTooth className={styles.icono} />
                            <div className={styles.item}>
                                <h2>ENDODONCIA</h2>
                                <p>Tratamiento de conducto radicular para la eliminación del nervio causante del dolor, debido a infección por caries, o fractura de la raíz.</p>
                            </div>
                        </div>
                        <div className={styles.cardContainer}>
                            <FaTeeth className={styles.icono} />
                            <div className={styles.item}>
                                <h2>PERIODONCIA</h2>
                                <p>Tratamiento de enfermedades relacionadas a los tejidos de soporte del diente, como sangrado de encías, sensibilidad y movilidad dental.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

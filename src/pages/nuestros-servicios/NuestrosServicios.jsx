import Footer from '@/components/footer/Footer';
import styles from './NuestrosServicios.module.css';
import { FaTeeth, FaTooth, FaTeethOpen } from 'react-icons/fa';
import CustomSeparator from '@/components/custom-separator/CustomSeparator';
import ScrollToTop from '@/components/scroll/ScrollToTop';
import img from "./../../../img/ChristianSaad-02.png"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

export default function NuestrosServicios() {
    return (
        <>
            <ScrollToTop/>
            <div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1>Tratamientos</h1>
                        <CustomSeparator/>
                        <div>
                            <p>En este apartado se encuentran todos los servicios que ofrecemos en nuestro consultorio</p>
                            <p>Si necesita mas información sobre alguno de estos tratamientos, ¡No dude en consultarnos!</p>
                        </div>
                        
                    </div>
                    <div className={styles.grid}>
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className={styles.cardContainer}>
                                    <FaTeeth className={styles.icono} />
                                    <div className={styles.item}>
                                        <h2>BLANQUEAMIENTO DENTAL</h2>
                                        <p>Tratamientos de blanqueamiento dental interno o externo para obtener una sonrisa más blanca y radiante en poco minutos.</p>
                                    </div>
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogTitle>Blanqueamiento Dental</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <img src={img} alt="" />
                                    Tratamientos de blanqueamiento dental interno o externo para obtener una sonrisa más blanca y radiante en poco minutos.
                                </AlertDialogDescription>
                                <AlertDialogCancel>Salir</AlertDialogCancel>
                            </AlertDialogContent>   
                        </AlertDialog>
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className={styles.cardContainer}>
                                    <FaTooth className={styles.icono} />
                                    <div className={styles.item}>
                                        <h2>PRÓTESIS DENTALES</h2>
                                        <p>Restauración de piezas dentales a través de Coronas, Puentes, Prótesis o Incrustaciones. Contamos con Fresadora 3D ultra precisa.</p>
                                    </div>
                                </div>                                
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogTitle>Protésis Dentales</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <img src={img} alt="" />
                                    Restauración de piezas dentales a través de Coronas, Puentes, Prótesis o Incrustaciones. Contamos con Fresadora 3D ultra precisa.
                                </AlertDialogDescription>
                                <AlertDialogCancel>Salir</AlertDialogCancel>
                            </AlertDialogContent>
                            
                        </AlertDialog>
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className={styles.cardContainer}>
                                    <FaTeethOpen className={styles.icono} />
                                    <div className={styles.item}>
                                        <h2>ORTODONCIA</h2>
                                        <p>Alineación dental por medio de Brackets o Placas Alineadoras. Disponemos de sistemas de Ortodoncia Cosmética casi invisibles.</p>
                                    </div>
                                </div>                            
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogTitle>Ortodoncia</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <img src={img} alt="" />
                                    Alineación dental por medio de Brackets o Placas Alineadoras. Disponemos de sistemas de Ortodoncia Cosmética casi invisibles.
                                </AlertDialogDescription>
                                <AlertDialogCancel>Salir</AlertDialogCancel>
                            </AlertDialogContent>
                            
                        </AlertDialog>
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className={styles.cardContainer}>
                                    <FaTooth className={styles.icono} />
                                    <div className={styles.item}>
                                        <h2>ODONTOLOGÍA GENERAL</h2>
                                        <p>Diagnóstico y restauración de piezas dentarias afectadas por pequeñas caries o traumatismos leves que no requieren prótesis.</p>
                                    </div>
                                </div>                           
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogTitle>Odontología General</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <img src={img} alt="" />
                                    Diagnóstico y restauración de piezas dentarias afectadas por pequeñas caries o traumatismos leves que no requieren prótesis.
                                </AlertDialogDescription>
                                <AlertDialogCancel>Salir</AlertDialogCancel>
                            </AlertDialogContent>
                            
                        </AlertDialog>
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className={styles.cardContainer}>
                                    <FaTooth className={styles.icono} />
                                    <div className={styles.item}>
                                        <h2>ENDODONCIA</h2>
                                        <p>Tratamiento de conducto radicular para la eliminación del nervio causante del dolor, debido a infección por caries, o fractura de la raíz.</p>
                                    </div>
                                </div>                        
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogTitle>Endodoncia</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <img src={img} alt="" />
                                    Tratamiento de conducto radicular para la eliminación del nervio causante del dolor, debido a infección por caries, o fractura de la raíz.
                                </AlertDialogDescription>
                                <AlertDialogCancel>Salir</AlertDialogCancel>
                            </AlertDialogContent>
                            
                        </AlertDialog>
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className={styles.cardContainer}>
                                    <FaTeeth className={styles.icono} />
                                    <div className={styles.item}>
                                        <h2>PERIODONCIA</h2>
                                        <p>Tratamiento de enfermedades relacionadas a los tejidos de soporte del diente, como sangrado de encías, sensibilidad y movilidad dental.</p>
                                    </div>
                                </div>                    
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogTitle>Periodoncia</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <img src={img} alt="" />
                                    Tratamiento de enfermedades relacionadas a los tejidos de soporte del diente, como sangrado de encías, sensibilidad y movilidad dental.
                                </AlertDialogDescription>
                                <AlertDialogCancel>Salir</AlertDialogCancel>
                            </AlertDialogContent>
                            
                        </AlertDialog>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

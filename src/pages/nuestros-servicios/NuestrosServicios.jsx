import Footer from '@/components/footer/Footer';
import styles from './NuestrosServicios.module.css';
import { FaTeeth, FaTooth, FaTeethOpen } from 'react-icons/fa';
import CustomSeparator from '@/components/custom-separator/CustomSeparator';
import ScrollToTop from '@/components/scroll/ScrollToTop';
import img1 from "./../../../img/modals/blanqueamiento.jpg"
import img2 from "./../../../img/modals/protesis.jpg"
import img3 from "./../../../img/modals/ortodoncia.jpg"
import img4 from "./../../../img/modals/odontologia.jpg"
import img5 from "./../../../img/modals/endodoncia.jpg"
import img6 from "./../../../img/modals/periodoncia.jpg"


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
                                        <p>Tratamientos de blanqueamiento dental interno o externo para obtener una sonrisa más blanca y radiante en pocos minutos.</p>
                                    </div>
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-3xl">
                                <AlertDialogTitle className="text-2xl font-bold text-customBlue text-center mb-4">Blanqueamiento Dental</AlertDialogTitle>
                                <AlertDialogDescription className="flex text-lg flex-col sm:flex-row items-center sm:items-start w-full">
                                    <img src={img1} className='w-full sm:w-1/2 h-auto mb-4 sm:mb-0 sm:mr-4' alt="" />
                                    Tratamientos de blanqueamiento dental interno o externo para obtener una sonrisa más blanca y radiante en pocos minutos.
                                </AlertDialogDescription>
                                <AlertDialogCancel className="mt-4 px-6 py-2 bg-customBlue text-white rounded-md">Salir</AlertDialogCancel>
                            </AlertDialogContent>   
                        </AlertDialog>

                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className={styles.cardContainer}>
                                    <FaTooth className={styles.icono} />
                                    <div className={styles.item}>
                                        <h2 className="text-xl font-semibold">PRÓTESIS DENTALES</h2>
                                        <p>Restauración de piezas dentales a través de Coronas, Puentes, Prótesis o Incrustaciones. Contamos con Fresadora 3D ultra precisa.</p>
                                    </div>
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-3xl">
                                <AlertDialogTitle className="text-2xl font-bold text-customBlue text-center mb-4">Protésis Dentales</AlertDialogTitle>
                                <AlertDialogDescription className="flex text-lg flex-col sm:flex-row items-center sm:items-start w-full">
                                    <img src={img2} className='w-full sm:w-1/2 h-auto mb-4 sm:mb-0 sm:mr-4' alt="" />
                                    Restauración de piezas dentales a través de Coronas, Puentes, Prótesis o Incrustaciones. Contamos con Fresadora 3D ultra precisa.
                                </AlertDialogDescription>
                                <AlertDialogCancel className="mt-4 px-6 py-2 bg-customBlue text-white rounded-md">Salir</AlertDialogCancel>
                            </AlertDialogContent>
                        </AlertDialog>

                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className={styles.cardContainer}>
                                    <FaTeethOpen className={styles.icono} />
                                    <div className={styles.item}>
                                        <h2 className="text-xl font-semibold">ORTODONCIA</h2>
                                        <p>Alineación dental por medio de Brackets o Placas Alineadoras. Disponemos de sistemas de Ortodoncia Cosmética casi invisibles.</p>
                                    </div>
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-3xl">
                                <AlertDialogTitle className="text-2xl font-bold text-customBlue text-center mb-4">Ortodoncia</AlertDialogTitle>
                                <AlertDialogDescription className="flex text-lg flex-col sm:flex-row items-center sm:items-start w-full">
                                    <img src={img3} className='w-full sm:w-1/2 h-auto mb-4 sm:mb-0 sm:mr-4' alt="" />
                                    Alineación dental por medio de Brackets o Placas Alineadoras. Disponemos de sistemas de Ortodoncia Cosmética casi invisibles.
                                </AlertDialogDescription>
                                <AlertDialogCancel className="mt-4 px-6 py-2 bg-customBlue text-white rounded-md">Salir</AlertDialogCancel>
                            </AlertDialogContent>
                        </AlertDialog>

                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className={styles.cardContainer}>
                                    <FaTooth className={styles.icono} />
                                    <div className={styles.item}>
                                        <h2 className="text-xl font-semibold">ODONTOLOGÍA GENERAL</h2>
                                        <p>Diagnóstico y restauración de piezas dentarias afectadas por pequeñas caries o traumatismos leves que no requieren prótesis.</p>
                                    </div>
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-3xl">
                                <AlertDialogTitle className="text-2xl font-bold text-customBlue text-center mb-4">Odontología General</AlertDialogTitle>
                                <AlertDialogDescription className="flex text-lg flex-col sm:flex-row items-center sm:items-start w-full">
                                    <img src={img4} className='w-full sm:w-1/2 h-auto mb-4 sm:mb-0 sm:mr-4' alt="" />
                                    Diagnóstico y restauración de piezas dentarias afectadas por pequeñas caries o traumatismos leves que no requieren prótesis.
                                </AlertDialogDescription>
                                <AlertDialogCancel className="mt-4 px-6 py-2 bg-customBlue text-white rounded-md">Salir</AlertDialogCancel>
                            </AlertDialogContent>
                        </AlertDialog>

                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className={styles.cardContainer}>
                                    <FaTooth className={styles.icono} />
                                    <div className={styles.item}>
                                        <h2 className="text-xl font-semibold">ENDODONCIA</h2>
                                        <p>Tratamiento de conducto radicular para la eliminación del nervio causante del dolor, debido a infección por caries, o fractura de la raíz.</p>
                                    </div>
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-3xl">
                                <AlertDialogTitle className="text-2xl font-bold text-customBlue text-center mb-4">Endodoncia</AlertDialogTitle>
                                <AlertDialogDescription className="flex text-lg flex-col sm:flex-row items-center sm:items-start w-full">
                                    <img src={img5} className='w-full sm:w-1/2 h-auto mb-4 sm:mb-0 sm:mr-4' alt="" />
                                    Tratamiento de conducto radicular para la eliminación del nervio causante del dolor, debido a infección por caries, o fractura de la raíz.
                                </AlertDialogDescription>
                                <AlertDialogCancel className="mt-4 px-6 py-2 bg-customBlue text-white rounded-md">Salir</AlertDialogCancel>
                            </AlertDialogContent>
                        </AlertDialog>

                        <AlertDialog>
                            <AlertDialogTrigger>
                                <div className={styles.cardContainer}>
                                    <FaTeeth className={styles.icono} />
                                    <div className={styles.item}>
                                        <h2 className="text-xl font-semibold">PERIODONCIA</h2>
                                        <p>Tratamiento de enfermedades relacionadas a los tejidos de soporte del diente, como sangrado de encías, sensibilidad y movilidad dental.</p>
                                    </div>
                                </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-3xl">
                                <AlertDialogTitle className="text-2xl font-bold text-customBlue text-center mb-4">Periodoncia</AlertDialogTitle>
                                <AlertDialogDescription className="flex text-lg flex-col sm:flex-row items-center sm:items-start w-full">
                                    <img src={img6} className='w-full sm:w-1/2 h-auto mb-4 sm:mb-0 sm:mr-4' alt="" />
                                    Tratamiento de enfermedades relacionadas a los tejidos de soporte del diente, como sangrado de encías, sensibilidad y movilidad dental.
                                </AlertDialogDescription>
                                <AlertDialogCancel className="mt-4 px-6 py-2 bg-customBlue text-white rounded-md">Salir</AlertDialogCancel>
                            </AlertDialogContent>
                        </AlertDialog>  
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

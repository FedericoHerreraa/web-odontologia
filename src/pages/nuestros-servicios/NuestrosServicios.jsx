import styles from "./NuestrosServicios.module.css";
import { FaTeeth, FaTooth, FaTeethOpen } from "react-icons/fa";
// import CustomSeparator from "@/components/custom-separator/CustomSeparator";
import ScrollToTop from "@/components/scroll/ScrollToTop";
import WhatsAppComponent from "../../components/whatsapp/WhatsApp";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { serviciosInfo } from "./serviciosInfo";

export default function NuestrosServicios() {
  return (
    <>
      <WhatsAppComponent />
      <ScrollToTop />
      <div>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Nuestros Tratamientos</h1>
            {/* <CustomSeparator /> */}
            <div>
              <p>
                En este apartado se encuentran todos los servicios que ofrecemos
                en nuestro consultorio
              </p>
              <p>
                Si necesita mas información sobre alguno de estos tratamientos,
                <span className="font-bold"> ¡No dude en consultarnos!</span>
              </p>
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.grid}>
              {serviciosInfo.map((treatment) => (
                <AlertDialog key={treatment.id}>
                  <AlertDialogTrigger>
                    <div className={styles.cardContainer}>
                      {treatment.icon === 1 && (
                        <FaTeeth className={styles.icono} />
                      )}
                      {treatment.icon === 2 && (
                        <FaTooth className={styles.icono} />
                      )}
                      {treatment.icon === 3 && (
                        <FaTeethOpen className={styles.icono} />
                      )}
                      <div className={styles.item}>
                        <h2>{treatment.title}</h2>
                        <p>{treatment.description}</p>
                      </div>
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="flex flex-col items-center p-4 md:p-6 bg-white rounded-lg shadow-lg md:max-w-3xl w-4/5">
                    <AlertDialogTitle className="text-4xl text-customBlue text-center mb-4 font-light">
                      {treatment.dialogTitle}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="flex text-base flex-col sm:flex-row items-center sm:items-start w-full text-customBlue">
                      <img
                        src={treatment.imgSrc}
                        className="w-full sm:w-1/2 h-auto mb-4 sm:mb-0 sm:mr-4 rounded-lg shadow-lg"
                        alt=""
                      />
                      <div className="sm:w-1/2">
                        {treatment.dialogDescription}
                      </div>
                    </AlertDialogDescription>
                    <AlertDialogCancel className="mt-4 px-6 py-2 bg-customBlue text-white rounded-md hover:bg-black hover:text-white transition duration-300">
                      Salir
                    </AlertDialogCancel>
                  </AlertDialogContent>

                </AlertDialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

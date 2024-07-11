import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import WhatsAppIcon from "@mui/icons-material/WhatsApp";
  import imgWhatsapp from '../../../img/whatsapp-svgrepo-com.svg';
  
  const WhatsAppComponent = () => {
    const phoneNumber = 541170266735;
    const message = "¡Hola!, quisiera hacer una consulta";
    const encodedMessage = encodeURIComponent(message);
  
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
    return (
      <AlertDialog>
        <AlertDialogTrigger>
            <img 
              src={imgWhatsapp} 
              alt="" 
              style={{ zIndex: 500 }}
              className="fixed z-100 md:w-[60px] md:h-[60px] w-[50px] h-[50px] bottom-0 m-4 cursor-pointer rounded-full border-[3px] border-white shadow-2xl"
            />
          {/* <WhatsAppIcon style={{ opacity: 0.8, cursor: "pointer" }} fontSize="large" className="text-green-500 opacity-80 cursor-pointer " /> */}
        </AlertDialogTrigger>
        <AlertDialogContent className="p-6 bg-white rounded-lg shadow-lg w-2/3 md:max-w-3xl md:mx-auto">
          <div className="flex items-center justify-center mb-4">
            <WhatsAppIcon className="text-green" style={{ fontSize: "4rem" }} />
          </div>
          <AlertDialogTitle className="text-2xl font-bold text-customBlue text-center mb-4">
            WhatsApp
          </AlertDialogTitle>
          <AlertDialogDescription className="md:text-lg text-center mb-4">
            Esta acción te redireccionará a WhatsApp, ¿Estás seguro/a?
          </AlertDialogDescription>
          <div className="flex md:flex-row flex-col gap-2 justify-center items-center md:space-x-4">
            <AlertDialogAction className="px-6 py-2 bg-customBlue text-white rounded-md">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Abrir WhatsApp
              </a>
            </AlertDialogAction>
            <AlertDialogCancel className="md:px-6 md:py-2 px-2 py-1 bg-gray-200 text-gray-700 rounded-md">
              Cancelar
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default WhatsAppComponent;
  
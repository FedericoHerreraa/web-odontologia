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
  
  const WhatsAppComponent = () => {
    const phoneNumber = 541170266735;
    const message = "¡Hola!, quisiera hacer una consulta";
    const encodedMessage = encodeURIComponent(message);
  
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <WhatsAppIcon style={{ opacity: 0.8, cursor: "pointer" }} fontSize="medium" className="text-green-500 opacity-80 cursor-pointer " />
        </AlertDialogTrigger>
        <AlertDialogContent className="p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <WhatsAppIcon className="text-customBlue" style={{ fontSize: "3rem" }} />
          </div>
          <AlertDialogTitle className="text-2xl font-bold text-customBlue text-center mb-4">
            WhatsApp
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-center mb-4">
            Esta acción te redireccionará a WhatsApp, ¿Estás seguro/a?
          </AlertDialogDescription>
          <div className="flex justify-center space-x-4">
            <AlertDialogCancel className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction className="px-6 py-2 bg-customBlue text-white rounded-md">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Abrir WhatsApp
              </a>
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default WhatsAppComponent;
  
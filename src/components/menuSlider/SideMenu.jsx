import { Accordion, AccordionDetails} from "@mui/material";
import { useSpring, animated } from '@react-spring/web';

import { Link } from "react-router-dom";
import WhatsAppComponent from "../whatsapp/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ArrowForwardIos } from "@mui/icons-material";

export default function SideMenu({ isOpen, toggleMenu }) {
  
 

  const props = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
  });

  return (
    <animated.div style={props} className='fixed right-0 top-0 z-50 h-full w-72 bg-white p-4 text-black shadow-lg'>
      <button className='absolute right-0 mr-[10px] mt-[10px]' onClick={toggleMenu}>
      
      </button>
      <div className='ml-[10%] mt-[40%]'>
        <Accordion className='m-0 p-0 font-semibold uppercase shadow-none mb-[20px]'>
          
          <AccordionDetails>
          <WhatsAppComponent/>
          <MailOutlineIcon fontSize="medium" className="text-blue-500 opacity-80 cursor-pointer mr-[30px] ml-[30px]" />
          <InstagramIcon fontSize="medium" className="text-pink-500 opacity-80 cursor-pointer mr-[30px]" />
          </AccordionDetails>
        </Accordion>
        
        <Link className='block font-semibold uppercase mb-[30px]' to='/'>
          Inicio
          <ArrowForwardIos fontSize="smaller"  className="ml-[10px] text-justify"/>
        </Link>
        
        <Link className='block font-semibold uppercase mb-[30px]' to='/sobreNosotros'>
          Sobre nosotros
        </Link>
        <Link className='block font-semibold uppercase mb-[30px]' to='/nuestrosServicios'>
          Nuestros servicios
        </Link>
        <Link className='block font-semibold uppercase mb-[30px]' to='/contactanos'>
            Contactanos
        </Link>
      </div>
    </animated.div>
  );
}

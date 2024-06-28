import { Accordion, AccordionDetails} from "@mui/material";
import { useSpring, animated } from '@react-spring/web';
import { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import WhatsAppComponent from "../whatsapp/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from '@mui/icons-material/Close';
import { ArrowForwardIos } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
export default function SideMenu({ isOpen, toggleMenu }) {

  const location = useLocation();
  
  useEffect(() => {
    if (isOpen) {
      toggleMenu();
    }
  }, [location]);

  const props = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
  });

  return (
    <animated.div style={props} className='fixed right-0 top-0 z-50 h-full w-72 bg-white p-4 text-black shadow-lg'>
      <button className='absolute right-0 mr-[10px] mt-[10px]' onClick={toggleMenu}>
        <CloseIcon color="black" fontSize="large"/>
      </button>
      <div className='ml-[10%] mt-[40%]'>
        <Accordion className='m-0 p-0 font-semibold uppercase shadow-none mb-[20px] items-center'>
          <AccordionDetails className="flex justify-center">
            <WhatsAppComponent />
            <MailOutlineIcon fontSize="large" className="text-blue-500 opacity-80 cursor-pointer mr-[30px] ml-[30px]" />
            <InstagramIcon fontSize="large" className="text-pink-500 opacity-80 cursor-pointer" />
          </AccordionDetails>
        </Accordion>
        
        <Link className='block font-semibold uppercase mb-[30px]' to='/'>
          Inicio
          <ArrowForwardIos fontSize="smaller"  className="ml-[10px] text-justify"/>
        </Link>
        
        <Link className='block font-semibold uppercase mb-[30px]' to='/sobreNosotros'>
          Sobre nosotros
          <ArrowForwardIos fontSize="smaller"  className="ml-[10px] text-justify"/>
        </Link>
        <Link className='block font-semibold uppercase mb-[30px]' to='/nuestrosServicios'>
          Nuestros servicios
          <ArrowForwardIos fontSize="smaller"  className="ml-[10px] text-justify"/>
        </Link>
        <Link className='block font-semibold uppercase mb-[30px]' to='/contactanos'>
            Contactanos
            <ArrowForwardIos fontSize="smaller"  className="ml-[10px] text-justify"/>
        </Link>
      </div>
    </animated.div>
  );
}

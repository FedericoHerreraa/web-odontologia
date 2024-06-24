
import { IoMdStar } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const SimpleSlider = () => {


  const stars = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px'}}>
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
        <IoMdStar />
      </div>
    )
  }

  return (
    <div style={{ width: '80%', margin: '20px auto'}}>
      <Carousel
        style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)", padding: '20px', borderRadius: '10px'}}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem >
            {stars()}
            Fui a este consultorio para un tratamiento de ortodoncia y no puedo
            estar más contenta con los resultados. Desde la primera consulta, el
            doctor fue muy claro sobre lo que esperaba y me explicó todo el
            proceso. Las instalaciones son de primera y siempre me sentí bien
            atendida. El personal de recepción siempre fue amable y coordinó mis
            citas de manera eficiente. ¡Altamente recomendable!
          </CarouselItem>
          <CarouselItem >
            {stars()}
            El mejor servicio dental que he recibido. La clínica está muy bien
            equipada y el personal es muy atento. Me hicieron sentir muy cómoda
            durante todo el tratamiento. ¡Gracias!
          </CarouselItem>
          <CarouselItem >
            {stars()}
            Estoy muy contento con mi nueva sonrisa. El equipo fue muy profesional
            y me dieron un trato personalizado. La clínica es moderna y muy
            limpia. Sin duda volveré para mis próximas revisiones
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  
  );
};

export default SimpleSlider;

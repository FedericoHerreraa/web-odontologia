import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './SimpleSlider.css'
import { IoMdStar } from "react-icons/io";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.container}>
      
      <Slider {...settings}>
        <div>
          <div className={styles.estrellas}><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
          <h3>Fui a este consultorio para un tratamiento de ortodoncia y no puedo estar más contenta con los resultados. Desde la primera consulta, el doctor fue muy claro sobre lo que esperaba y me explicó todo el proceso. Las instalaciones son de primera y siempre me sentí bien atendida. El personal de recepción siempre fue amable y coordinó mis citas de manera eficiente. ¡Altamente recomendable!</h3>
          <p>-persona1</p>
        </div>
        <div>
          <div className={styles.estrellas}><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
          <h3>El mejor servicio dental que he recibido. La clínica está muy bien equipada y el personal es muy atento. Me hicieron sentir muy cómoda durante todo el tratamiento. ¡Gracias!</h3>
          <p>-persona2</p>
        </div>
        <div>
          <div className={styles.estrellas}><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
          <h3>Estoy muy contento con mi nueva sonrisa. El equipo fue muy profesional y me dieron un trato personalizado. La clínica es moderna y muy limpia. Sin duda volveré para mis próximas revisiones</h3>
          <p>-persona3</p>
        </div>
        <div>
          <div className={styles.estrellas}><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
          <h3>Excelente atención desde el momento en que entras por la puerta. El dentista es muy paciente y explica todo de manera detallada. Además, el ambiente es muy relajante. Muy recomendable</h3>
          <p>-persona4</p>
        </div>
        <div>
          <div className={styles.estrellas}><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
          <h3>Fui por una limpieza y quedé impresionado con la tecnología y el cuidado del lugar. El personal es muy amable y se aseguraron de que estuviera cómodo durante todo el procedimiento. ¡Gran consultorio dental</h3>
          <p>-persona5</p>
        </div>
  
      </Slider>
    </div>
  );
};

export default SimpleSlider;

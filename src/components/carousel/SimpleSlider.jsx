import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from './SimpleSlider.css'

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
  };

  return (
    <div className={styles.container}>
      
      <Slider {...settings}>
        <div>
          <h3>aqui habra comentarios sobre la experiencia del usuario y su opinion positiva</h3>
          <p>-persona1</p>
        </div>
        <div>
          <h3>aqui habra comentarios sobre la experiencia del usuario y su opinion positiva</h3>
          <p>-persona2</p>
        </div>
        <div>
          <h3>aqui habra comentarios sobre la experiencia del usuario y su opinion positiva</h3>
          <p>-persona3</p>
        </div>
        <div>
          <h3>aqui habra comentarios sobre la experiencia del usuario y su opinion positiva</h3>
          <p>-persona4</p>
        </div>
        <div>
          <h3>aqui habra comentarios sobre la experiencia del usuario y su opinion positiva</h3>
          <p>-persona5</p>
        </div>
        <div>
          <h3>aqui habra comentarios sobre la experiencia del usuario y su opinion positiva</h3>
          <p>-persona6</p>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;

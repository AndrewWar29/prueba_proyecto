import Carousel from 'react-bootstrap/Carousel';
import Foto_stock_1 from '../images/Foto_stock_1.jpg';
import foto_uai_penalolen2 from '../images/foto_uai_penalolen2.jpg';
import Foto_practica from '../images/Foto_practica.jpg';
import "../css/Carrusel.css";

function Carrusel() {
    return (
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Foto_stock_1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Universidad Adolfo ibañez</h3>
              <p>Se parte del programa de pasantías
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={foto_uai_penalolen2}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Campus Peñalolen</h3>
              <p>Contacto con prestigiosas empresas</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Foto_practica}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>¡Se parte!</h3>
              <p>
               Más de 60 alumnos han optado por el programa
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }

export {Carrusel};
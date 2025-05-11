import Slider from 'react-slick';
import Arrow from './Arrow';
import { works } from '../data/work';
import WorkCard from './WorkCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const arrowClass = 'absolute top-1/2 -translate-y-1/2 z-10 text-dark opacity-70 hover:opacity-100';

const Works = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '18%',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { centerPadding: '12%' }
      },
      {
        breakpoint: 640,
        settings: { centerMode: false, slidesToShow: 1 }
      }
    ]
  } 

  

  return (
    <section className="container py-20">
      <h2 className="mb-10 text-center text-3xl font-bold">Наши работы</h2>

      <div className="relative overflow-hidden" >
        <Slider
           {...settings}
                prevArrow={<Arrow className="left-3" aria-label="Prev">‹</Arrow>}
                nextArrow={<Arrow className="right-3" aria-label="Next">›</Arrow>}
        >
          {works.map((item) => (
            <WorkCard key={item.id} {...item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Works;

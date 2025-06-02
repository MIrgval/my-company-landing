import Slider from 'react-slick';
import Arrow from './Arrow';
import { works } from '../data/work';
import WorkCard from './WorkCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Works = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: '15%',
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
    <section className="container py-20 bg-[#f6f4f0]" id="works">
      <h2 className="mb-10 text-center text-3xl font-bold ">Наши работы</h2>

      <div className="relative overflow-hidden " >
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

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => (
  <section className="grid min-h-screen grid-cols-1 sm:grid-cols-2" id="about">
    {/* левый столбец (картинка, белый фон) */}
    <div className="order-1 flex items-center justify-center bg-[#f6f4f0] sm:order-1">
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        src="/assets/logo2.svg"
        alt="Строитель"
        className="w-72 sm:w-80 md:w-[1000px]"
      />
    </div>

    {/* правый столбец (текст, чёрный фон) */}
    <div className="order-2 flex flex-col items-start justify-center gap-6 bg-dark px-10 text-white sm:order-2">
         {/* слой звёзд */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 35 }, (_, i) => (
          <span
            key={i}
            className="star"
            style={
              {
                left: `${(Math.random() * 100).toFixed(1)}%`,
                top: `${(Math.random() * 100).toFixed(1)}%`,
                animationDelay: `${(Math.random() * 6).toFixed(2)}s`,
                '--dur': `${(5 + Math.random() * 4).toFixed(2)}s`
              } as React.CSSProperties
            }
          />
        ))}
      </div>
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold md:text-5xl"
      >
        Мы строим будущее
      </motion.h1>

      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-md text-lg text-gray-300 md:text-xl"
      >
        Генподряд, проектирование и инжиниринг полного цикла
      </motion.h2>

      <Link
        to="contact"
        smooth
        duration={600}
        offset={-80}
        className="inline-block rounded-full bg-white px-6 py-3 text-dark transition hover:opacity-90"
      >
        Связаться
      </Link>
    </div>
  </section>
);

export default Hero;

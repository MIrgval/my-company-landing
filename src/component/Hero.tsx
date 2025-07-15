import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => (
  <section
    className="relative flex flex-col items-center justify-center min-h-screen bg-[rgb(246,244,240)] text-black px-4 text-center "
    id="about"
  >
    {/* Слой звёзд (сохраняем как в оригинале) */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {Array.from({ length: 35 }, (_, i) => (
        <span
          key={i}
          className="star"
          style={
            {
              left: `${(Math.random() * 100).toFixed(1)}%`,
              top: `${(Math.random() * 100).toFixed(1)}%`,
              animationDelay: `${(Math.random() * 6).toFixed(2)}s`,
              '--dur': `${(5 + Math.random() * 4).toFixed(2)}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>

    {/* Центрированный логотип */}
    <motion.img
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      src="./assets/logo2.svg"
      alt="Строитель"
      className="w-72 sm:w-96 md:w-[900px] z-10"
    />

    {/* Подпись под логотипом */}
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-8 text-xl sm:text-2xl md:text-3xl font-light z-10"
    >
      Мы строим как наши отцы и деды
    </motion.p>
  </section>
);

export default Hero;

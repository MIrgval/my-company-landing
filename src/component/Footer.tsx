import { Link } from 'react-scroll';
import clsx from 'clsx';

const NAV = [
  { to: 'hero',    label: 'Главная'   },
  { to: 'works',   label: 'Портфолио' },
  { to: 'team',    label: 'О нас'     },
  { to: 'contact', label: 'Контакты'  }
];

const Footer = () => (
  <footer className="relative mt-auto bg-dark px-6 py-8 text-white overflow-hidden">
    {/* ▲ звёзды из star.css */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 30 }, (_, i) => {
        const delay = (Math.random() * 6).toFixed(2);         // 0‑6 s
        const duration = (5 + Math.random() * 4).toFixed(2);  // 5‑9 s
        const left = (Math.random() * 100).toFixed(1);
        const top = (Math.random() * 100).toFixed(1);

        return (
          <span
            key={i}
            className="star"
            style={
              {
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                '--dur': `${duration}s`
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>

    {/* контент футера */}
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
      {/* копирайт/бренд */}
      <p className="text-xs text-gray-300">
        © Все права защищены |{' '}
        <a
          href="https://matronet.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Работает на MatroNet
        </a>
      </p>

      {/* навигация */}
      <nav className="flex flex-wrap items-center gap-6 text-xs font-medium tracking-wide text-gray-200 sm:text-sm">
        {NAV.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            smooth
            duration={500}
            offset={-80}
            spy
            activeClass="text-white after:opacity-100"
            className={clsx(
              'relative cursor-pointer transition hover:text-white',
              'after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white after:opacity-0 after:transition'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;

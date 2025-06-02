import { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import clsx from 'clsx';

const navItems = [
  { to: 'about', label: 'О нас' },
  { to: 'works', label: 'Наши работы' },
  { to: 'team', label: 'Команда' },
  { to: 'contact', label: 'Контакты' }
] as const;

const Header = () => {
  const [open, setOpen] = useState(false);

  const commonProps = {
    smooth: true,
    duration: 600,
    offset: -80
  } as const;

  return (
    <header className="fixed z-50 w-full bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container flex h-16 items-center">
        <img src="./assets/logo.svg" alt="Логотип MyCompany" className="h-14 w-auto" />

        {/* десктоп‑меню */}
        <nav className="hidden gap-8 sm:flex ml-[105rem]">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              {...commonProps}
              className="cursor-pointer text-sm font-medium text-gray-800 hover:text-black"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* бургер */}
        <button
          aria-label="Открыть меню"
          className="sm:hidden"
          onClick={() => setOpen((p) => !p)}
        >
          {open ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* mobile‑drawer */}
      <nav
        className={clsx(
          'fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-white text-lg font-medium transition-transform duration-300 sm:hidden',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        onClick={() => setOpen(false)}
      >
        {navItems.map(({ to, label }) => (
          <Link key={to} to={to} {...commonProps}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;

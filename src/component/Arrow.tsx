/* components/Arrow.tsx */
/* components/Arrow.tsx */
import type { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  currentSlide?: number;
  slideCount?: number;
}

export default function Arrow({ className, ...rest }: Props) {
  // удаляем служебные, оставляем onClick / aria-label …
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { currentSlide, slideCount, ...btnProps } = rest;
  return (
    <button
      type="button"
      className={clsx(
        'absolute top-1/2 -translate-y-1/2 z-10 text-dark opacity-70 hover:opacity-100',
        className
      )}
      {...btnProps}
    />
  );
}

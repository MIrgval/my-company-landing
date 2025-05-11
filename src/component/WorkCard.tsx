import type { WorkCard as WorkCardType } from '../data/work';
import clsx from 'clsx';

interface Props extends WorkCardType {
  active?: boolean;
}

const WorkCard = ({ title, description, img, active }: Props) => (
  <div
    className={clsx(
      'relative mx-4 overflow-hidden rounded-2xl',
      active ? 'shadow-2xl' : 'shadow-lg'
    )}
  >
    <img
      src={img}
      alt={title}
      loading="lazy"
      className="h-72 w-full object-cover sm:h-80 md:h-96"
    />
    {/* overlay */}
    <div className="absolute inset-0 bg-black/50 opacity-0 transition hover:opacity-100">
      <div className="flex h-full flex-col items-center justify-center text-center text-white">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mx-4 max-w-xs text-sm">{description}</p>
      </div>
    </div>
  </div>
);

export default WorkCard;

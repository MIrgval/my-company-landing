import type { TeamMate } from '../data/team';

const TeamCard = ({ photo, name, role }: TeamMate) => (
  <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y- hover:shadow-lg">
    <img src={photo} alt={name} className="mb-4 h-40 w-40 rounded-full object-cover" />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
);

export default TeamCard;

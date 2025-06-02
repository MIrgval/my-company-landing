import { team } from '../data/team';
import TeamCard from './TeamCard';

const Team = () => (
  <section className="container py-20 bg-[#f6f4f0]" id="team">
    <h2 className="mb-10 text-center text-3xl font-bold">Наша команда</h2>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((mate) => (
        <TeamCard key={mate.id} {...mate} />
      ))}
    </div>
  </section>
);

export default Team;

import { TeamMemberCard } from '../TeamMemberCard';

export default function TeamMemberCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <TeamMemberCard
        name="João Victor Moreira"
        rm="563608"
        role="Scrum Master | Firebase e Front-end"
        linkedinUrl="https://www.linkedin.com"
        githubUrl="https://github.com/tavares-fiap/NeuroRace"
      />
      <TeamMemberCard
        name="Maria Silva"
        rm="123456"
        role="Developer | Backend e API"
        linkedinUrl="https://www.linkedin.com"
        githubUrl="https://github.com"
      />
    </div>
  );
}

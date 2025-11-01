import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";

export default function Equipe() {
  //todo: remove mock functionality - replace with real team data
  const teamMembers = [
    {
      name: "João Victor Moreira",
      rm: "563608",
      role: "Scrum Master | Firebase e Front-end",
      linkedinUrl: "https://www.linkedin.com",
      githubUrl: "https://github.com/tavares-fiap/NeuroRace",
    },
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container max-w-6xl mx-auto px-6 py-12">
        <PageHeader
          title="Nossa Equipe"
          subtitle="Conheça os desenvolvedores por trás do projeto."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="grid-team">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.rm} {...member} />
          ))}
        </div>
      </main>
    </div>
  );
}

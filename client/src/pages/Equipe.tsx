import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";

export default function Equipe() {
  const teamMembers = [
    {
      name: "Ester Santos da Silva",
      rm: "1",
      role: "Desenvolvedora | Front-end",
      linkedinUrl: "https://www.linkedin.com/in/ester-silvaa/",
    },
    {
      name: "João Victor Moreira",
      rm: "2",
      role: "Desenvolvedor | Front-end",
      linkedinUrl: "https://www.linkedin.com/in/jvmadv/",
      githubUrl: "https://github.com/tavares-fiap/NeuroRace",
    },
    {
      name: "Nikolas Rodrigues Moura dos Santos",
      rm: "3",
      role: "Desenvolvedor | Backend e Banco de Dados",
      linkedinUrl: "https://www.linkedin.com/in/nikolas-dos-santos/",
    },
    {
      name: "Pedro Henrique Pedrosa Tavares",
      rm: "4",
      role: "Desenvolvedor | Backend",
      linkedinUrl: "https://www.linkedin.com/in/phptavares/",
    },
    {
      name: "Thiago Jardim de Oliveira",
      rm: "5",
      role: "Desenvolvedor | Backend",
      linkedinUrl: "https://www.linkedin.com/in/thiago-jardim-de-oliveira-490164298/",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container max-w-6xl mx-auto px-4 md:px-6 py-12">
        <PageHeader
          title="Nossa Equipe"
          subtitle="Conheça os desenvolvedores por trás do projeto NeuroRace."
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

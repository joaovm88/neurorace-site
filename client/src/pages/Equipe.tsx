import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { TeamMemberCard } from "@/components/TeamMemberCard";

export default function Equipe() {
  const teamMembers = [
    {
      name: "Ester Santos da Silva",
      rm: "558710",
      role: "Desenvolvedora | UX/UI e Front-end",
    },
    {
      name: "João Victor Moreira",
      rm: "563608",
      role: "Scrum Master | Firebase e Front-end",
      githubUrl: "https://github.com/tavares-fiap/NeuroRace",
    },
    {
      name: "Nikolas Rodrigues Moura dos Santos",
      rm: "563466",
      role: "Desenvolvedor | Backend e Banco de Dados",
    },
    {
      name: "Pedro Henrique Pedrosa Tavares",
      rm: "563467",
      role: "Desenvolvedor | Hardware e IoT",
    },
    {
      name: "Thiago Jardim de Oliveira",
      rm: "563656",
      role: "Desenvolvedor | Integração e Testes",
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

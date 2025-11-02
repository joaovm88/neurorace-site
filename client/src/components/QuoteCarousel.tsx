import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const quotes = [
  "Sua mente no controle. O resto é só o jogo.",
  "Onde sua atenção está, sua vitória estará.",
  "Foco não é força. É direção.",
  "No NeuroRace, seu foco é o seu combustível.",
  "Concentre-se. Respire. Domine.",
  "A corrida mais difícil é a que acontece dentro da sua mente.",
  "Não é mágica, é neurociência. E você está no comando.",
  "Seu cérebro é o controle mais avançado já criado.",
  "A concentração é visível. E aqui, ela vira pontos.",
  "O poder de vencer já está na sua cabeça.",
  "Em um mundo de distrações, o foco é o seu superpoder.",
  "A diferença entre o bom e o lendário é um segundo a mais de foco.",
  "O dashboard não mente: seu foco é sua maior pontuação.",
  "Domine sua mente. Domine a corrida.",
  "Vence quem aprende a silenciar o ruído.",
  "Seu maior oponente é a sua própria distração."
];

export function QuoteCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full"
      data-testid="quote-carousel"
    >
      <CarouselContent>
        {quotes.map((quote, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-lg p-8 md:p-12 flex items-center justify-center min-h-[120px]">
                <p className="text-lg md:text-2xl font-medium text-center text-foreground" data-testid={`quote-${index}`}>"{quote}"</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" data-testid="button-prev-quote" />
      <CarouselNext className="hidden md:flex" data-testid="button-next-quote" />
    </Carousel>
  );
}

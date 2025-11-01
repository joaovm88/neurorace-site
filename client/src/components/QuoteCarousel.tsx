import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div className="relative bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-lg p-8 md:p-12" data-testid="quote-carousel">
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="flex-shrink-0"
          data-testid="button-prev-quote"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <div className="flex-1 text-center min-h-[80px] flex items-center justify-center">
          <p className="text-lg md:text-2xl font-medium text-foreground transition-all duration-500" data-testid="text-current-quote">
            "{quotes[currentIndex]}"
          </p>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="flex-shrink-0"
          data-testid="button-next-quote"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-primary w-8" 
                : "bg-muted-foreground/30"
            }`}
            data-testid={`dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

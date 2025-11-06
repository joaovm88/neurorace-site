import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  rm: string;
  role: string;
  linkedinUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export function TeamMemberCard({ name, rm, role, linkedinUrl, githubUrl, imageUrl }: TeamMemberCardProps) {
  return (
    <Card className="hover-elevate text-center" data-testid={`card-team-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="flex justify-center">
          <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mb-4" />
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 min-h-[48px]">{role}</p>
        <div className="flex gap-2 justify-center">
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2" data-testid="button-linkedin">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2" data-testid="button-github">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

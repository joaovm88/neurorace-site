import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function InfoCard({ icon, title, description, children }: InfoCardProps) {
  return (
    <Card className="hover-elevate" data-testid={`card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
}

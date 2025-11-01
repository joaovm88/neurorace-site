import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Ranking from "@/pages/Ranking";
import Equipe from "@/pages/Equipe";
import Dashboard from "@/pages/Dashboard";
import RaceFinished from "@/pages/RaceFinished";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/equipe" component={Equipe} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/race-finished" component={RaceFinished} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

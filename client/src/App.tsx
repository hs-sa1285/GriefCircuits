import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Home from "@/pages/home";
import SessionStory from "@/pages/session-story";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-warm-gray">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/session-story" component={SessionStory} />
        <Route component={NotFound} />
      </Switch>
    </div>
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

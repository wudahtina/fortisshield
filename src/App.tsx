
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AssetTracker from "./pages/AssetTracker";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout><Index /></PageLayout>} />
          <Route 
            path="/about" 
            element={
              <PageLayout>
                <About />
              </PageLayout>
            } 
          />
          <Route 
            path="/services" 
            element={
              <PageLayout>
                <Services />
              </PageLayout>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PageLayout>
                <Contact />
              </PageLayout>
            } 
          />
          <Route 
            path="/asset-tracker" 
            element={
              <PageLayout>
                <AssetTracker />
              </PageLayout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

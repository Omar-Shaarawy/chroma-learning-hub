
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";

import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <html lang="ar" dir="rtl" />
    </Helmet>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Index />} />
            <Route path="courses" element={<Courses />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<About />} />
          </Route>
          
          <Route path="/" element={<AuthLayout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

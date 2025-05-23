
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";

import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

// Dashboard Pages
import Dashboard from "./pages/Dashboard";
import DashboardCourses from "./pages/dashboard/Courses";
import DashboardLive from "./pages/dashboard/Live";
import DashboardEngagement from "./pages/dashboard/Engagement";
import DashboardPayments from "./pages/dashboard/Payments";
import DashboardFiles from "./pages/dashboard/Files";
import DashboardAnalytics from "./pages/dashboard/Analytics";

// Content Pages
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/HelpCenter";
import VideoLessons from "./pages/VideoLessons";
import Legal from "./pages/Legal";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";

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
            
            {/* Content Pages */}
            <Route path="resources" element={<Resources />} />
            <Route path="blog" element={<Blog />} />
            <Route path="help-center" element={<HelpCenter />} />
            <Route path="video-lessons" element={<VideoLessons />} />
            <Route path="legal" element={<Legal />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
          </Route>
          
          <Route path="/" element={<AuthLayout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="courses" element={<DashboardCourses />} />
            <Route path="live" element={<DashboardLive />} />
            <Route path="engagement" element={<DashboardEngagement />} />
            <Route path="payments" element={<DashboardPayments />} />
            <Route path="files" element={<DashboardFiles />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform your teaching with <span className="text-purple-600">EduPro</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              The all-in-one platform designed for educators to create, share, and monetize their knowledge through engaging online courses.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Teaching Today
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Browse Courses
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-10 w-10 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-white font-medium">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">1,000+ educators</span> already using EduPro
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src="/placeholder.svg" 
                  alt="EduPro Platform Demo"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4 pb-2">
                <div className="h-2 bg-purple-200 rounded mb-2"></div>
                <div className="h-2 bg-purple-200 rounded w-2/3"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="hidden md:block absolute -right-12 -bottom-12 w-32 h-32 bg-purple-100 rounded-full z-[-1]"></div>
            <div className="hidden md:block absolute -left-8 -top-8 w-24 h-24 bg-blue-100 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

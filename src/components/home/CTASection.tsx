
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to transform your teaching experience?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of educators who are creating engaging online courses and growing their audience with EduPro.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/signup">
            <Button size="lg" className="w-full sm:w-auto bg-white text-purple-600 hover:bg-purple-50">
              Start Free Trial
            </Button>
          </Link>
          <Link to="/demo">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-purple-700">
              Request Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

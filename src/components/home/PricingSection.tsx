
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "29",
    description: "Perfect for new educators just getting started.",
    features: [
      "Create up to 5 courses",
      "Basic analytics",
      "Standard video hosting",
      "Email support",
      "Upload course materials",
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "79",
    description: "For educators ready to scale their online presence.",
    features: [
      "Unlimited courses",
      "Advanced analytics",
      "HD video hosting",
      "Priority email support",
      "Live streaming",
      "Student engagement tools",
      "Course certificates",
    ],
    cta: "Start 14-day Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "199",
    description: "Custom solutions for educational institutions.",
    features: [
      "Everything in Professional",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Advanced integrations",
      "SSO authentication",
      "24/7 premium support",
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for your teaching needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden ${plan.popular ? 'border-2 border-purple-500 shadow-xl' : 'border border-gray-200 shadow'}`}
            >
              {plan.popular && (
                <div className="bg-purple-500 text-white py-2 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">${plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </div>
                <p className="mt-4 text-gray-600">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to={plan.name === "Enterprise" ? "/contact" : "/signup"}>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


import { Check } from "lucide-react";

const features = [
  {
    title: "Create & Manage Courses",
    description: "Build engaging courses with video lectures, assignments, quizzes and more.",
    icon: "book"
  },
  {
    title: "Live Streaming",
    description: "Host interactive live sessions with real-time student participation.",
    icon: "file-video"
  },
  {
    title: "Student Engagement",
    description: "Get detailed analytics and feedback on student performance and course effectiveness.",
    icon: "star"
  },
  {
    title: "Payment Processing",
    description: "Easily manage subscriptions and accept payments through multiple gateways.",
    icon: "credit-card"
  },
  {
    title: "File Management",
    description: "Upload and organize course materials, PDFs, and resources for your students.",
    icon: "file-video"
  },
  {
    title: "Robust Analytics",
    description: "Track student progress and engagement with comprehensive analytics tools.",
    icon: "search"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Teach Online
          </h2>
          <p className="text-xl text-gray-600">
            Our platform provides all the tools educators need to create and manage successful online courses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon === "book" && (
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                  </div>
                )}
                {feature.icon === "file-video" && (
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m10 11 5 3-5 3v-6Z"></path></svg>
                  </div>
                )}
                {feature.icon === "star" && (
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                )}
                {feature.icon === "credit-card" && (
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                  </div>
                )}
                {feature.icon === "search" && (
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

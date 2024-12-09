import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/820e458f-e667-40ee-b3af-c3ec8bfcb6bc.png"
              alt="Leal Health Logo"
              className="h-8"
            />
          </div>
          <Button variant="ghost" className="text-forest-500 hover:text-forest-600">
            Login
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-500 mb-6 animate-fade-down">
            Genelux Patients Come First Support Program
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-up">
            The OnPrime Study is evaluating innovative treatments for platinum-resistant/refractory ovarian cancer, focusing on patient care and support.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-coral-50">
        <div className="container mx-auto">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-500 mb-8 text-center">
              Welcome To Leal!
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Leal is a Patient-First Precision Cancer Care Platform dedicated to improving your access to cancer treatments, and direct support with financial, scheduling, and other needs.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-500 mb-8">
              Getting Support:
            </h2>
            <div className="glass-card p-8 rounded-lg max-w-3xl">
              <p className="text-lg text-gray-600 mb-6">
                Leal's Support Program is 100% free for all people with cancer. There are no hidden fees, no insurance requirements, and this service is fully available in the United States & Canada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-coral-300 hover:bg-coral-400 text-white">
                  About Leal
                </Button>
                <Button variant="outline" className="text-forest-500 border-forest-500">
                  Genelux, and OnPrime
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-500 mb-12 text-center animate-on-scroll opacity-0">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover-lift animate-on-scroll opacity-0">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-forest-500 mb-4">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="link" className="text-coral-400 hover:text-coral-500 p-0">
                    Read more →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="container mx-auto text-center text-gray-600">
          <p>© 2024 by Leal Health</p>
        </div>
      </footer>
    </div>
  );
};

const resources = [
  {
    title: "Money Tips for People with Cancer",
    description: "A cancer diagnosis will necessitate a series of scans, meetings with doctors, second opinions, biopsies, surgeries, treatment, recovery, and so much more.",
  },
  {
    title: "Take back control",
    description: "I have been thinking a lot about Control lately. How the second you get diagnosed you lose control over your life. It doesn't matter if you are a control freak [...]",
  },
  {
    title: "Managing Sleep and Fatigue During Cancer Treatment",
    description: "Dr. Sonia Ancoli-Israel Ph.D. is Professor Emeritus and Professor of Research in the Center of Circadian Biology at the University of California San Diego School of Medicine.",
  },
];

export default Index;
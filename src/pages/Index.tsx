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
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/4528e0f2-36fc-484b-a35d-ce538e29ffee.png"
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
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-500 mb-6 animate-fade-down text-center">
            Genelux Patients Come First Support Program
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start max-w-6xl mx-auto">
            <div className="text-lg md:text-xl text-gray-600 text-left animate-fade-up space-y-4 flex-1">
              <p>
                The OnPrime study is a multi-center, randomized open-label phase 3 study evaluating the safety and efficacy of Olvi-Vec followed by platinum-doublet chemotherapy and bevacizumab compared to the Active Comparator Arm with Physician's Choice of chemotherapy and bevacizumab in women diagnosed with platinum-resistant/refractory ovarian cancer (includes fallopian tube cancer and primary peritoneal cancer).
              </p>
              <p>
                This Phase III trial builds on the efficacy and safety data reported in the previous Phase II VIRO-15 trial with promising objective response rate and progression-free survival observed in heavily pre-treated patients with platinum-resistant/refractory ovarian cancer.
              </p>
              <p>
                The phase II results also showed that the intra-peritoneal route of delivery was efficient in generating tumor cell killing and immune activation, and led to clinical reversal of platinum-resistance or refractoriness in this difficult-to-treat patient population.
              </p>
            </div>
            <div className="md:w-48 flex-shrink-0 animate-fade-up">
              <img
                src="/lovable-uploads/8299ecd8-58d8-420e-b0cf-d2ff2307010d.png"
                alt="Genelux Logo"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F68B6A' }}>
        <div className="container mx-auto">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Welcome To Leal!
            </h2>
            <p className="text-lg text-white max-w-3xl mb-6">
              Leal is a patient-first precision cancer care platform dedicated to improving your access to cancer treatments, and direct support with financial, scheduling, and other needs. We've helped more than 225,000 people with cancer and are ready to help you too in partnership with Genelux.
            </p>
            <p className="text-lg text-white max-w-3xl mb-8">
              <span className="font-semibold">Getting Started:</span> Genelux has partnered with Leal to help you stay on schedule for testing, diagnostics, doctors visits, as well as help direct you to key support resources such as lodging, transportation, and more.
            </p>
            <div className="text-center">
              <Button 
                className="bg-forest-500 hover:bg-forest-600 text-white text-lg px-8 py-6 h-auto"
                onClick={() => window.open('https://webapp.leal.health/signup?condition=ovarian-cancer&customer_ref=genelux', '_blank')}
              >
                Patients Come First Support Program →
              </Button>
            </div>
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
              <p className="text-lg text-gray-600 mb-6 text-left">
                Leal's Support Program is 100% free for all people with cancer. There are no hidden fees, no insurance requirements, and this service is fully available in the United States & Canada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-coral-300 hover:bg-coral-400 text-white flex items-center justify-center gap-2"
                  onClick={() => window.open('https://www.leal.health', '_blank')}
                >
                  Learn more about Leal
                  <span className="inline-block transform translate-y-[1px]">→</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="text-forest-500 border-forest-500 flex items-center justify-center gap-2"
                  onClick={() => window.open('https://genelux.com/', '_blank')}
                >
                  Learn more about Genelux, & OnPrime
                  <span className="inline-block transform translate-y-[1px]">→</span>
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
                  <Button variant="link" className="text-coral-400 hover:text-coral-500 p-0" onClick={() => window.open(resource.url, '_blank')}>
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
    url: "https://www.leal.health/post/money-tips-from-a-cancer-survivor"
  },
  {
    title: "Take back control",
    description: "I have been thinking a lot about Control lately. How the second you get diagnosed you lose control over your life. It doesn't matter if you are a control freak [...]",
    url: "https://www.leal.health/post/take-back-control"
  },
  {
    title: "Managing Sleep and Fatigue During Cancer Treatment",
    description: "Dr. Sonia Ancoli-Israel Ph.D. is Professor Emeritus and Professor of Research in the Center of Circadian Biology at the University of California San Diego School of Medicine.",
    url: "#"
  },
];

export default Index;

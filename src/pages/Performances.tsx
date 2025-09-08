import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";
import { useVideoManager } from "@/hooks/useVideoManager";

const Performances = () => {
  const billBourneRef = useVideoManager(true);
  const notreDameRef = useVideoManager(true);
  const pianoRef = useVideoManager(true);
  const bandRef = useVideoManager(true);
  const oudRef = useVideoManager(true);
  
  const videos = [
    {
      title: "Live at Massey Hall",
      description: "Full concert performance in Toronto's historic venue"
    },
    {
      title: "Acoustic Sessions", 
      description: "Intimate acoustic performances and behind-the-scenes"
    }
  ];

  const eventPosters = [
    {
      title: "LORCA NIGHT",
      image: "/lovable-uploads/84083fd4-89a9-4ca6-8197-ae74c3f952f2.png",
      alt: "Lorca Night - August 24 at 7:00 PM featuring Ehab Guitarrista with flamenco dancer"
    },
    {
      title: "INSPIRED BY SPAIN",
      image: "/lovable-uploads/34f4cef6-dd7e-425d-9bc2-c31f848591c1.png", 
      alt: "Inspired by Spain Guitar Night - June 19, 2025 featuring Ehab Guitarrista and Gareth Owen"
    },
    {
      title: "WE TEACH LIFE",
      image: "/lovable-uploads/f8e15299-5222-4da8-99c8-d5bc24f794ab.png",
      alt: "We Teach Life fundraising night featuring Ehab Guitarrista - April 6th at York Theatre"
    },
    {
      title: "MOZAICO FLAMENCO",
      image: "/lovable-uploads/617f75cf-e773-4dd7-af5a-0c4565bbf44d.png",
      alt: "Ehab Guitarrista Ensemble at Mozaico Flamenco - March 2nd, 2025"
    },
    {
      title: "BOHEMIAN TRAVELLER", 
      image: "/lovable-uploads/836c4efe-41ca-4413-8219-9390a8cdb451.png",
      alt: "Bohemian Traveller Flamenco Night - December 20 featuring Ehab Guitarrista"
    },
    {
      title: "EHAB GUITARRISTA ENSEMBLE",
      image: "/lovable-uploads/b385d23d-aa6f-4d0a-a0d5-b5adde069a09.png",
      alt: "August 8th Ehab Guitarrista Ensemble performance poster - Doors open at 7pm, Music at 8pm"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-6 pb-8 bg-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-glow mb-8">
              Live Performances
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-inter">
              Experience the passion and artistry of flamenco guitar across Canada's most prestigious venues.
            </p>
            
            {/* Performance Videos */}
            <div className="space-y-16">
              {/* Bill Bourne Collaboration */}
              <div className="w-full">
                <h3 className="text-xl font-playfair font-semibold text-center text-foreground mb-8">
                  With Renowned Artist Bill Bourne
                </h3>
                <div className="w-full max-w-5xl mx-auto">
                  <video 
                    ref={billBourneRef}
                    className="w-full rounded-lg object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    style={{ aspectRatio: '16/9', minHeight: '300px' }}
                  >
                    <source src="/Ehab with Bill Bourne.mov" type="video/quicktime" />
                    <source src="/Ehab with Bill Bourne.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Notre Dame Chapel */}
              <div className="w-full">
                <h3 className="text-xl font-playfair font-semibold text-center text-foreground mb-8">
                  Notre Dame Chapel Performance
                </h3>
                <div className="w-full max-w-md mx-auto">
                  <video 
                    ref={notreDameRef}
                    className="w-full rounded-lg object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    style={{ aspectRatio: '9/16', maxHeight: '600px' }}
                  >
                    <source src="/Notre-DameChapel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Piano Performance */}
              <div className="w-full">
                <h3 className="text-xl font-playfair font-semibold text-center text-foreground mb-8">
                  Piano Performance
                </h3>
                <div className="w-full max-w-md mx-auto">
                  <video 
                    ref={pianoRef}
                    className="w-full rounded-lg object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    style={{ aspectRatio: '9/16', maxHeight: '600px' }}
                  >
                    <source src="/Piano.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Band Performance */}
              <div className="w-full">
                <h3 className="text-xl font-playfair font-semibold text-center text-foreground mb-8">
                  Ensemble Performance
                </h3>
                <div className="w-full max-w-md mx-auto">
                  <video 
                    ref={bandRef}
                    className="w-full rounded-lg object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    style={{ aspectRatio: '9/16', maxHeight: '600px' }}
                  >
                    <source src="/band.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Oud Performance */}
              <div className="w-full">
                <h3 className="text-xl font-playfair font-semibold text-center text-foreground mb-8">
                  Oud Performance
                </h3>
                <div className="w-full max-w-md mx-auto">
                  <video 
                    ref={oudRef}
                    className="w-full rounded-lg object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    style={{ aspectRatio: '9/16', maxHeight: '600px' }}
                  >
                    <source src="/Instrument.mov" type="video/quicktime" />
                    <source src="/Instrument.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Posters */}
        <section className="py-12 bg-background">
          <div className="container-max">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-glow text-center mb-6">
              Upcoming & Recent Events
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto font-inter">
              From intimate venues to grand concert halls, discover Ehab's upcoming performances and recent highlights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container-max">
              {eventPosters.map((poster, index) => (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
                  <div className="aspect-[3/4] bg-muted overflow-hidden">
                    <img 
                      src={poster.image}
                      alt={poster.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-foreground text-center">
                      {poster.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                  Book Your Experience
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ready to bring the magic of flamenco guitar to your event? Let's create 
                  something extraordinary together.
                </p>
                <button 
                  className="btn-primary"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Performances;
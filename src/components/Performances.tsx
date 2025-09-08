import { Play } from "lucide-react";

const Performances = () => {
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

  return (
    <section id="performances" className="section-padding bg-background">
      <div className="container-max">
        {/* Performance Videos */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-glow text-center mb-16">
            Performance Videos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videos.map((video, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-muted flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Flamenco Performance Photos */}
          <div className="mt-16">
            <h3 className="text-2xl font-playfair font-bold text-center text-foreground mb-8">
              Live Performance Moments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/6bee10db-84db-4163-a5f6-1c7fc4620eba.png"
                  alt="Ehab performing flamenco guitar with red-dressed dancer and ensemble on dramatic stage"
                  className="w-full aspect-video object-cover"
                />
              </div>
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/a526d375-a627-4e2d-82d3-7471807434d9.png"
                  alt="Dynamic flamenco performance featuring dancer in flowing red dress with Ehab's guitar ensemble"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Performances & Tours */}
        <div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-glow text-center mb-6">
            Performances & Tours
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto font-inter">
            From coast to coast, experience the passion and artistry that has captivated 
            audiences across Canada's most prestigious venues and festivals.
          </p>
          
        {/* Event Posters */}
        <div className="mb-20">
          <h3 className="text-2xl font-playfair font-bold text-center text-foreground mb-8">
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img 
                  src="/lovable-uploads/b385d23d-aa6f-4d0a-a0d5-b5adde069a09.png"
                  alt="August 8th Ehab Guitarrista Ensemble performance poster - Doors open at 7pm, Music at 8pm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img 
                  src="/lovable-uploads/84083fd4-89a9-4ca6-8197-ae74c3f952f2.png"
                  alt="Lorca Night - August 24 at 7:00 PM featuring Ehab Guitarrista with flamenco dancer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img 
                  src="/lovable-uploads/34f4cef6-dd7e-425d-9bc2-c31f848591c1.png"
                  alt="Inspired by Spain Guitar Night - June 19, 2025 featuring Ehab Guitarrista and Gareth Owen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* This section can be expanded with upcoming shows, past performances, etc. */}
        <div className="text-center">
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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Performances;
import { Calendar, MapPin, Users, Award } from "lucide-react";
import ehabHeadshot from "@/assets/ehab-headshot.jpg";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState, useEffect, useRef } from "react";
import { useVideoManager } from "@/hooks/useVideoManager";

const About = () => {
  const [isExtendedBioOpen, setIsExtendedBioOpen] = useState(false);
  const videoRef = useVideoManager(true); // Enable autoplay

  return (
    <section id="about" className="bg-background -mt-20 pt-20 pb-16 md:pb-20">
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary text-glow">
          Meet Ehab
        </h2>
      </div>
      
      <div className="container-max px-6 pb-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Professional Video */}
          <div className="w-full">
            <div className="bg-card border border-border rounded-lg overflow-hidden w-full">
              <video 
                ref={videoRef}
                width="100%" 
                height="400" 
                controls
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full aspect-video"
                style={{ minHeight: '400px' }}
              >
                <source src="/Ehab Guitarista.mov" type="video/quicktime" />
                <source src="/Ehab Guitarista.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-inter">
              As a composer of original music, music director, and multi-instrumentalist skilled across 
              3 different instruments, Ehab Guitarrista has become one of Canada's most sought-after 
              flamenco musicians. From intimate acoustic sets in cozy venues to electrifying performances 
              at major festivals, Ehab brings an authentic and passionate approach to every show.
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-inter hidden md:block">
              Born with music in his soul, Ehab's musical journey began at age 5 with classical 
              foundations. The transition to guitar and flamenco composition came naturally, influenced by 
              legendary masters like Paco De Lucia, Vicente Amigo, Al di Meola, and Antonio Rey.
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-inter hidden md:block">
              Ehab's sound blends traditional flamenco with modern elements from jazz, blues, Roma jazz, 
              oriental, and classical music, creating compositions that resonate deeply with audiences across 
              all demographics. Every performance is crafted to create genuine connection and memorable experiences.
            </p>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-inter hidden md:block">
              Ehab performs across Canada as a soloist and with curated ensembles, bringing a soulful, 
              technically precise flamenco-inspired sound to stages, festivals, and private events.
            </p>
          </div>
        </div>
        
        {/* Extended Bio */}
        <div className="mb-12">
          <Collapsible open={isExtendedBioOpen} onOpenChange={setIsExtendedBioOpen}>
            <CollapsibleTrigger className="flex items-center justify-center w-full bg-card border border-border rounded-lg p-4 text-foreground hover:bg-card/80 transition-colors">
              <span className="text-xl font-playfair font-semibold">Extended Biography</span>
              <span className="ml-2">{isExtendedBioOpen ? '−' : '+'}</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="text-xl font-playfair font-bold text-foreground mb-3">Early Life & Education</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Ehab's musical journey began at the tender age of 5, rooted in classical foundations that would later 
                    evolve into his distinctive flamenco style. His early education provided the technical precision and 
                    musical theory that underpins his contemporary approach to traditional Spanish guitar.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-playfair font-bold text-foreground mb-3">Mentorship & Influences</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Deeply influenced by legendary masters like Paco De Lucia, Vicente Amigo, Al di Meola, and Antonio Rey, 
                    Ehab has developed a unique voice that honors tradition while embracing innovation. His studies with 
                    renowned instructors have shaped his understanding of both technical mastery and emotional expression.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-playfair font-bold text-foreground mb-3">Professional Development</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Years of professional performance have taken Ehab from intimate acoustic venues to major 
                    festival stages across Canada. His versatility allows him to adapt his performances to any setting, 
                    creating memorable experiences whether performing solo or with carefully curated ensembles.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-playfair font-bold text-foreground mb-3">Musical Philosophy</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Ehab's approach to music transcends genre boundaries, seamlessly blending flamenco with elements 
                    of jazz, blues, Roma jazz, oriental, and classical music. This fusion creates compositions that 
                    speak to diverse audiences while maintaining the passionate authenticity that defines his artistry.
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="stats-card">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-primary mb-1">15+</h3>
            <p className="text-muted-foreground">Years Performing</p>
          </div>
          
          <div className="stats-card">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-primary mb-1">50+</h3>
            <p className="text-muted-foreground">Cities Toured</p>
          </div>
          
          <div className="stats-card">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-primary mb-1">200+</h3>
            <p className="text-muted-foreground">Shows Played</p>
          </div>
          
          <div className="stats-card">
            <Award className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-primary mb-1">15+</h3>
            <p className="text-muted-foreground">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
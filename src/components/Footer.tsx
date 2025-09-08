import { Music, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-background border-t border-border">
      <div className="container-max py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Music className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-playfair font-bold text-primary text-glow-subtle">
                Ehab Guitarrista
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Professional flamenco guitarist bringing passion and artistry to life 
              through masterful performances across Canada.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>ehab.guitarist@email.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>


          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-foreground">
              Services
            </h4>
            {/* Desktop list */}
            <ul className="space-y-2 text-muted-foreground hidden md:block">
              <li>Concert Performances</li>
              <li>Wedding Ceremonies</li>
              <li>Corporate Events</li>
              <li>Private Parties</li>
              <li>Studio Recording</li>
              <li>Music Composition</li>
            </ul>
            {/* Mobile comma-separated */}
            <p className="text-muted-foreground md:hidden">
              Concert Performances, Wedding Ceremonies, Corporate Events, Private Parties, Studio Recording, Music Composition
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Ehab Guitarrista. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Influenced by: Paco De Lucia • Vicente Amigo • Al di Meola • Antonio Rey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
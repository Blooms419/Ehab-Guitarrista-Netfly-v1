import { useState, useEffect } from 'react';

interface CMSContent {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    bookButtonText: string;
    listenButtonText: string;
  };
  about: {
    title: string;
    description: string;
    image: string;
  };
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
  };
}

const defaultContent: CMSContent = {
  hero: {
    title: "Ehab Guitarrista",
    subtitle: "Bringing Music to Life Across Canada",
    image: "/lovable-uploads/9c285a1d-9ff7-4834-a42f-2b0115d824b9.png",
    bookButtonText: "Book Performance",
    listenButtonText: "Listen Now"
  },
  about: {
    title: "About Ehab",
    description: "Ehab Guitarrista is a versatile musician and performer based in Canada, bringing authentic musical experiences to audiences across the country. With years of experience in various musical styles, Ehab creates unforgettable performances that connect with people of all backgrounds.",
    image: "/lovable-uploads/profile-image.jpg"
  },
  contact: {
    title: "Get in Touch",
    description: "Ready to bring exceptional music to your event? Let's discuss how we can make your occasion unforgettable.",
    email: "contact@ehabguitarrista.com",
    phone: "+1 (555) 123-4567"
  }
};

export const useCMSContent = () => {
  const [content, setContent] = useState<CMSContent>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch('/src/data/content.json');
        if (response.ok) {
          const data = await response.json();
          setContent({ ...defaultContent, ...data });
        }
      } catch (err) {
        console.log('Using default content - CMS content not available');
        setError('Failed to load CMS content');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return { content, loading, error };
};
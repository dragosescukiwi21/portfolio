export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  thumbnail?: string;
  tech?: string[];
}

export const projects: Project[] = [
  {
    title: "Image Processing Library",
    year: 2025,
    description: "A C++ library for image processing (convolution matrix)",
    url: "https://github.com/dragosescukiwi21/CPP-Image-Processing-Library",
    thumbnail: "/thumbnails-project/IPL.png",
    tech: ["C++"],
  },

  {
    title: "SMS AI Chatbot",
    year: 2025,
    description: "Automated Messaging Gateway & Conversational Agent",
    url: "https://github.com/dragosescukiwi21/uni_work",
    thumbnail: "/thumbnails-project/sms.png",
    tech: ["Python", "Flask", "Docker", "Dialogflow"],
  },

  {
    title: "🥗 EasyFood",
    year: 2026,
    description: "Nutritional tracking platform. Moves your fridge to digital and tracks your macros using trustworthy data",
    url: "https://landing-easy-food-git-main-dragosescukiwi21s-projects.vercel.app/",
    thumbnail: "/thumbnails-project/easy.png",
    tech: ["Astro", "LangChain", "TypeScript", "Google AI Vision"],
  },
];

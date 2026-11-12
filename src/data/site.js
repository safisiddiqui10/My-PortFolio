import { asset } from '../utils/asset';

export const site = {
  name: 'Safi Siddiqui', // your name: hero headline, footer, photo alt text, browser tab titles
  brand: "Safi Siddiqui's Portfolio", // navbar logo text
  role: 'MERN Stack Developer and AI Engineer',
  description:
    'Safi Siddiqui is a MERN stack developer and AI engineer building scalable web applications, intelligent AI systems and data-driven solutions.',
  url: import.meta.env.VITE_SITE_URL, // set in vite.config.js
  email: 'safisiddiqui33@gmail.com',
  location: 'Bhopal, Madhya Pradesh, India',
  footerTagline: 'MERN Stack Developer and AI Engineer in Bhopal, India',
  resumeUrl: asset('Resumes/cv/safi_resume2.pdf'),
  portraitUrl: asset('Profile/headshot.jpeg'),
  portraitWebpUrl: asset('Profile/headshot.webp'),
  githubUrl: 'https://github.com/safisiddiqui10',
};

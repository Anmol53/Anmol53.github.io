export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    title: "Leafy Cafe",
    description: "A beautifully crafted website for 'Leafy Cafe', a fictional multi-chain vegan restaurant. Features an elegant, responsive design that showcases the restaurant's menu, locations, and contact information. Built with pure HTML, CSS, and JavaScript, demonstrating mastery of core web technologies without relying on frameworks.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Animation"],
    liveLink: "https://www.anmolagrawal.dev/leafy-cafe",
    githubLink: "https://github.com/Anmol53/leafy-cafe"
  },
  {
    title: "BMI Tracker",
    description: "A Progressive Web App (PWA) that helps users monitor their Body Mass Index over time. Features include BMI calculation, historical data tracking with interactive timeline charts using Recharts, and offline functionality. Being a PWA, it can be installed on any device for a native app-like experience.",
    tags: ["React.js", "PWA", "Recharts", "LocalStorage", "Service Workers"],
    liveLink: "https://www.anmolagrawal.dev/bmi-tracker",
    githubLink: "https://github.com/Anmol53/bmi-tracker"
  },
  {
    title: "Gradient Generator",
    description: "A developer-focused tool that simplifies the creation of CSS gradients. Built with vanilla JavaScript, it offers real-time gradient preview, angle control, and instant CSS code generation. The minimalist implementation demonstrates how powerful functionality can be achieved with pure HTML, CSS, and JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript", "Developer Tools"],
    liveLink: "https://www.anmolagrawal.dev/gradient-generator",
    githubLink: "https://github.com/Anmol53/gradient-generator"
  },
  {
    title: "Interactive Animations",
    description: "A showcase of advanced web animations including particle systems, fluid simulations, and interactive effects. Demonstrates mastery of modern web animation techniques and performance optimization.",
    tags: ["JavaScript", "CSS Animations", "Canvas API", "WebGL"],
    liveLink: "https://www.anmolagrawal.dev/bubble",
    githubLink: "https://github.com/Anmol53/bubble"
  }
]; 
import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export interface SocialLink {
  name: string;
  url: string;
  Icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Anmol53",
    Icon: FaGithub
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anmol-53/",
    Icon: FaLinkedin
  },
  {
    name: "Email",
    url: "mailto:anmol.ag53@gmail.com",
    Icon: FaEnvelope
  }
]; 
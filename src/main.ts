import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.css';
import './style.css'

import { Navbar } from '@components/Navbar';
import { Footer } from '@components/Footer';
import { Hero } from '@pages/Hero.ts';
import { About } from '@pages/About.ts';
import { Resume } from '@pages/Resume.ts';
import { Tools } from '@pages/Tools.ts';
import { Services } from '@pages/Services.ts';

const app: HTMLElement | null = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.appendChild(Navbar());
  app.appendChild(Hero());
  app.appendChild(About());
  app.appendChild(Resume());
  app.appendChild(Tools());
  app.appendChild(Services());
  app.appendChild(Footer());
} else {
  throw new Error('Element with ID app not found in main.ts!');
}


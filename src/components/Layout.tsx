import { ReactNode, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const LOGO_SURVEYORS_W = "https://images.squarespace-cdn.com/content/v1/62963b756bf2c45d308b1e5a/4ad5a4db-45af-4cd7-ac2f-9ff3bd96eef8/GGM_SURVEYORS_Logo_W.png?format=1500w";
const LOGO_GGM_EARTH = "https://images.squarespace-cdn.com/content/v1/62963b756bf2c45d308b1e5a/633b892b-f434-41d6-8a93-80f669f4421e/GGM+EARTH+LOGO+CLAIM+-+ALPHA.png?format=500w";

export default function Layout({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen selection:bg-black selection:text-[#FFFF00] dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 glass-panel px-8 py-4 flex justify-between items-center transition-colors duration-300">
          <Link to="/">
            <img src={LOGO_SURVEYORS_W} alt="GGM Surveyors" className="h-12 md:h-16 invert dark:invert-0 transition-all duration-300" />
          </Link>
          <div className="hidden md:flex space-x-8 text-editorial items-center font-bold">
            <Link to="/" className="hover:text-black/50 dark:hover:text-white/50 transition-colors">Executive Brief</Link>
            <Link to="/pillars" className="hover:text-black/50 dark:hover:text-white/50 transition-colors">40 Strategic Pillars</Link>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link 
              to="/pillars" 
              className="bg-[#FFFF00] text-black px-6 py-2 font-bold uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              View 40 Pillars
            </Link>
          </div>
          
          {/* Mobile Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        <main className="flex-grow max-w-[1600px] mx-auto w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-12 px-8 flex flex-col items-center justify-center mt-16 transition-colors duration-300">
          <a href="https://ggm.earth" target="_blank" rel="noopener noreferrer">
            <img src={LOGO_GGM_EARTH} alt="GGM Earth" className="h-24 md:h-32 opacity-80 mb-12 dark:invert transition-all duration-300 hover:opacity-100" />
          </a>
          <div className="text-editorial text-black/60 dark:text-white/60 text-center leading-relaxed tracking-widest text-sm transition-colors duration-300 flex flex-col items-center gap-1">
            <p className="font-bold text-base text-black dark:text-white mb-2">GGM SURVEYORS COMPANY LTD.</p>
            <p className="uppercase">ZAMBIA | Southern Africa Operational Division</p>
            <p>49 Tanzania Road - Ndola, Zambia</p>
            
            <div className="w-8 h-px bg-black/20 dark:bg-white/20 my-4"></div>
            
            <p className="font-bold uppercase text-black dark:text-white">COMPANY REGISTRATION</p>
            <p>No. 1204567 | TPIN 100-456-789-0</p>
            <p>Phone: +260 977614352 | E-Mail: zambia@ggm.earth</p>
            <a href="https://zambia-div.ggm.earth" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-[#FFFF00] transition-colors">https://zambia-div.ggm.earth</a>
            
            <div className="w-8 h-px bg-black/20 dark:bg-white/20 my-4"></div>
            
            <p className="uppercase font-bold text-black dark:text-white">Regional Hub for Southern Africa – Geophysical Intelligence & Field Operations</p>
            <p className="uppercase">Operational Brand of <a href="https://ggm.earth" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-[#FFFF00] transition-colors underline underline-offset-4">GGM.EARTH</a></p>
          </div>
        </footer>
      </div>
    </div>
  );
}

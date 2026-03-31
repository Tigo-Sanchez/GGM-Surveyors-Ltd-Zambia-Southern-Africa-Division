import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Mail, Globe } from 'lucide-react';

const LOGO_SURVEYORS_W = "https://images.squarespace-cdn.com/content/v1/62963b756bf2c45d308b1e5a/4ad5a4db-45af-4cd7-ac2f-9ff3bd96eef8/GGM_SURVEYORS_Logo_W.png?format=1500w";
const LOGO_GGM_EARTH = "https://images.squarespace-cdn.com/content/v1/62963b756bf2c45d308b1e5a/633b892b-f434-41d6-8a93-80f669f4421e/GGM+EARTH+LOGO+CLAIM+-+ALPHA.png?format=500w";

export default function Layout({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="relative min-h-screen selection:bg-black selection:text-[#FFFF00] dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 glass-panel px-4 md:px-8 py-3 md:py-4 flex justify-between items-center transition-colors duration-300">
          <Link to="/" className="z-50">
            <img src={LOGO_SURVEYORS_W} alt="GGM Surveyors" className="h-16 sm:h-20 md:h-16 invert dark:invert-0 transition-all duration-300" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-editorial items-center font-bold">
            <Link to="/" className="hover:text-black/50 dark:hover:text-white/50 transition-colors">Executive Brief</Link>
            <Link to="/pillars" className="hover:text-black/50 dark:hover:text-white/50 transition-colors">40 Strategic Pillars</Link>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors rounded-full"
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
          
          {/* Mobile & Tablet Controls */}
          <div className="lg:hidden flex items-center gap-2 z-50">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors rounded-full"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors rounded-full"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[#f5f5f5] dark:bg-[#050505] pt-24 px-6 pb-6 flex flex-col overflow-y-auto"
            >
              <div className="flex flex-col space-y-8 text-xl font-bold uppercase tracking-wider mt-8">
                <Link to="/" className="hover:text-black/50 dark:hover:text-white/50 transition-colors border-b border-black/10 dark:border-white/10 pb-4">Executive Brief</Link>
                <Link to="/pillars" className="hover:text-black/50 dark:hover:text-white/50 transition-colors border-b border-black/10 dark:border-white/10 pb-4">40 Strategic Pillars</Link>
                
                <div className="pt-8 flex flex-col space-y-6">
                  <h3 className="text-sm text-editorial text-black/50 dark:text-white/50 mb-2">Contacts & Links</h3>
                  
                  <a href="mailto:zambia@ggm.earth" className="flex items-center gap-4 text-base hover:text-[#FFFF00] transition-colors">
                    <div className="bg-black/5 dark:bg-white/10 p-3 rounded-full">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="normal-case tracking-normal font-medium">zambia@ggm.earth</span>
                  </a>
                  
                  <a href="https://ggm.earth" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-base hover:text-[#FFFF00] transition-colors">
                    <div className="bg-black/5 dark:bg-white/10 p-3 rounded-full">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="normal-case tracking-normal font-medium">ggm.earth</span>
                  </a>

                  <a href="https://zambia-div.ggm.earth" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-base hover:text-[#FFFF00] transition-colors">
                    <div className="bg-black/5 dark:bg-white/10 p-3 rounded-full">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="normal-case tracking-normal font-medium">zambia-div.ggm.earth</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-grow max-w-[1600px] mx-auto w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="pt-[46px] pb-[10px] px-8 flex flex-col items-center justify-center mt-[-66px] mb-[57px] md:max-lg:pt-[10px] md:max-lg:pb-[22px] md:max-lg:mt-0 md:max-lg:mb-0 md:mt-16 md:mb-0 transition-colors duration-300">
          <a href="https://ggm.earth" target="_blank" rel="noopener noreferrer">
            <img src={LOGO_GGM_EARTH} alt="GGM Earth" className="w-[202px] h-[118px] object-contain opacity-80 mb-8 md:mb-12 dark:invert transition-all duration-300 hover:opacity-100" />
          </a>
          <div className="text-editorial text-black/60 dark:text-white/60 text-center leading-relaxed tracking-widest text-xs md:text-sm transition-colors duration-300 flex flex-col items-center gap-1">
            <p className="font-bold text-sm md:text-base text-black dark:text-white mb-2">GGM SURVEYORS COMPANY LTD.</p>
            <p className="uppercase text-[9px] md:text-xs">ZAMBIA | Southern Africa Operational Division</p>
            <p className="text-[8px] md:text-xs">49 Tanzania Road - Ndola, Zambia</p>
            
            <div className="w-8 h-px bg-black/20 dark:bg-white/20 my-4"></div>
            
            <p className="font-bold uppercase text-black dark:text-white">COMPANY REGISTRATION</p>
            <p className="text-[10px] md:text-xs">No. 1204567 | TPIN 100-456-789-0</p>
            <p className="text-[8px] pt-[15px] font-bold">Phone: +260 977614352 | E-Mail: zambia@ggm.earth</p>
            <a href="https://zambia-div.ggm.earth" target="_blank" rel="noopener noreferrer" className="bg-[#FFFF00] text-black underline hover:text-black dark:hover:text-[#FFFF00] transition-colors break-all px-1 text-[10px]">https://zambia-div.ggm.earth</a>
            
            <div className="w-8 h-px bg-black/20 dark:bg-white/20 my-4"></div>
            
            <p className="uppercase font-bold text-black dark:text-white text-[10px] md:text-xs">Regional Hub for Southern Africa – Geophysical Intelligence & Field Operations</p>
            <p className="uppercase text-[10px] bg-[#FFFF00] text-black px-2 py-1 md:max-lg:mt-0 md:max-lg:mb-0 md:max-lg:pb-[4px]">Operational Brand of <a href="https://ggm.earth" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors underline underline-offset-4">GGM.EARTH</a></p>
          </div>
        </footer>
      </div>
    </div>
  );
}

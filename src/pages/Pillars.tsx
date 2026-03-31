import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Download, FileText } from 'lucide-react';
import { pillars } from '../data/pillars';

const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Pillars() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const categories = Array.from(new Set(pillars.map(p => p.category)));

  return (
    <div className="pt-40 px-8 max-w-[1600px] mx-auto pb-32">
      <section className="mb-24">
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-1 bg-[#FFFF00] text-black text-xs font-bold uppercase tracking-widest">Legal-Tech Compliance Matrix</span>
          </div>
          <h1 className="text-sculptural text-black dark:text-white text-[clamp(4rem,8vw,9rem)] leading-[0.85] uppercase tracking-tighter mb-8">
            Integrated<br/>Framework.
          </h1>
          <p className="text-editorial text-black/60 dark:text-white/60 text-xl max-w-3xl leading-relaxed">
            The 40 pillars are not just technical services. They are a strategic architecture designed to shield investors against the direct legal, penal, and financial risks introduced by Zambia's new mining laws.
          </p>
        </Reveal>
      </section>

      {/* The 4 Fundamental Laws */}
      <section className="mb-32">
        <Reveal>
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-12">The 4 Fundamental Laws</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Law 1 */}
            <div className="glass-panel p-8 border-t-4 border-[#FFFF00] hover-invert group">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">1. Local Content Regulations, 2025</h3>
              <p className="text-sm font-bold opacity-60 mb-6 uppercase tracking-widest">Entrata in vigore: 1 Gennaio 2026</p>
              <div className="space-y-4 text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                <p><strong>La Legge impone:</strong> Obbligo di spendere dal 20% al 40% del budget in "Core Services" esclusivamente con aziende locali. Margine di preferenza del 15% e 0,05% in programmi di sviluppo. Multe paralizzanti per inadempienza.</p>
                <p><strong>La Giustificazione:</strong> GGM, entità guidata localmente, è lo scudo per appaltare servizi geofisici avanzati senza violare la legge e senza rischiare l'emorragia finanziaria delle sanzioni giornaliere.</p>
              </div>
            </div>

            {/* Law 2 */}
            <div className="glass-panel p-8 border-t-4 border-[#FFFF00] hover-invert group">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">2. Minerals Regulation Commission (MRC) Act, 2024</h3>
              <p className="text-sm font-bold opacity-60 mb-6 uppercase tracking-widest">Director Liability & Penalties</p>
              <div className="space-y-4 text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                <p><strong>La Legge impone:</strong> Limite di 5 licenze; responsabilità personale (multe/carcere) per il Board in caso di reati ambientali; poteri di sequestro senza preavviso; obbligo di "Progressive Rehabilitation".</p>
                <p><strong>La Giustificazione:</strong> GGM fornisce modelli 3D predittivi e monitoraggi continui che CCO utilizzerà in tribunale per dimostrare l'assoluta diligenza tecnica del Board, sventando sequestri e arresti.</p>
              </div>
            </div>

            {/* Law 3 */}
            <div className="glass-panel p-8 border-t-4 border-[#FFFF00] hover-invert group">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">3. Geological and Minerals Development (GMD) Act, 2025</h3>
              <p className="text-sm font-bold opacity-60 mb-6 uppercase tracking-widest">Export Restrictions & ASSM</p>
              <div className="space-y-4 text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                <p><strong>La Legge impone:</strong> Fondo ASSM e limiti licenze a Zambiani; divieto di esportazione minerali senza permesso; obbligo di report geotecnici per geo-hazard.</p>
                <p><strong>La Giustificazione:</strong> Mappatura ad altissima precisione per sbloccare l'ASSM Fund e indagini non distruttive che aggirano la necessità di asportare grandi tonnellaggi soggetti ai nuovi divieti.</p>
              </div>
            </div>

            {/* Law 4 */}
            <div className="glass-panel p-8 border-t-4 border-[#FFFF00] hover-invert group">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4">4. Climate Change Act & Environmental Management Act</h3>
              <p className="text-sm font-bold opacity-60 mb-6 uppercase tracking-widest">Green Economy Transition</p>
              <div className="space-y-4 text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                <p><strong>La Legge impone:</strong> Valutazioni di Impatto Ambientale (EIA) rigorose prima dei lavori e transizione verso i minerali critici in ottica "Green Economy".</p>
                <p><strong>La Giustificazione:</strong> GGM fornisce indagini private (es. mappatura 3D dei pennacchi inquinanti) che consegnano a CCO fascicoli ambientali perfetti, costringendo le agenzie ad approvazioni rapide.</p>
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      <div className="space-y-24">
        {categories.map(category => (
          <div key={category}>
            <Reveal>
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-10 pb-4 text-black/80 dark:text-white/80">
                {category}
              </h2>
            </Reveal>
            <div className="grid grid-cols-12 gap-6">
              {pillars.filter(p => p.category === category).map((item, i) => {
                const isExpanded = expandedCard === item.id;
                return (
                  <div key={item.id} className="col-span-12 lg:col-span-6 h-full">
                    <Reveal delay={(i % 3) * 0.1} className="h-full">
                      <div 
                        className={`glass-panel p-10 transition-all duration-500 cursor-pointer h-full group ${isExpanded ? 'bg-black/5 dark:bg-white/10' : 'hover-invert'}`}
                        onClick={() => setExpandedCard(isExpanded ? null : item.id)}
                      >
                        <div className="flex justify-between items-start mb-8">
                          <span className={`text-editorial transition-colors duration-500 ${isExpanded ? 'text-black dark:text-[#FFFF00] font-bold' : 'text-black/40 dark:text-white/40 group-hover:text-white/80 dark:group-hover:text-black/80'}`}>{item.id}</span>
                          {isExpanded ? <ChevronUp className="w-6 h-6 text-black dark:text-[#FFFF00]" /> : <ChevronDown className="w-6 h-6 opacity-50 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-500" />}
                        </div>
                        <h3 className={`text-2xl font-bold mb-6 uppercase tracking-tight leading-tight transition-colors duration-500 ${isExpanded ? 'text-black dark:text-white' : 'text-black dark:text-white group-hover:text-white dark:group-hover:text-black'}`}>{item.title}</h3>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden mt-8 pt-8 space-y-6"
                            >
                              <div>
                                <p className="text-xs uppercase tracking-widest font-bold mb-2 text-black/60 dark:text-[#FFFF00]">⚖️ La Legge / Il Partner</p>
                                <p className="text-sm font-medium text-black/80 dark:text-white/80 leading-relaxed">{item.legge}</p>
                              </div>
                              <div className="bg-[#FFFF00] p-6">
                                <p className="text-xs uppercase tracking-widest font-bold mb-2 text-black/60">🤝 Il Match Strategico</p>
                                <p className="text-sm font-bold text-black leading-relaxed">{item.match}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Download Kit Section */}
      <section className="mt-16 pt-16">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-widest mb-4">Download Kit</h2>
              <p className="text-editorial text-black/60 dark:text-white/60 text-lg max-w-2xl">
                Access our comprehensive documentation for a deeper dive into GGM Surveyors' capabilities and technical specifications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="#" 
              className="group glass-panel p-8 flex items-center justify-between hover-invert"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-black/5 dark:bg-white/10 flex items-center justify-center group-hover:bg-white/20 dark:group-hover:bg-black/10 transition-colors duration-500">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl uppercase tracking-wider mb-1">Corporate Overview</h3>
                  <p className="text-sm opacity-60">PDF Document • 2.4 MB</p>
                </div>
              </div>
              <Download className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </a>

            <a 
              href="#" 
              className="group glass-panel p-8 flex items-center justify-between hover-invert"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-black/5 dark:bg-white/10 flex items-center justify-center group-hover:bg-white/20 dark:group-hover:bg-black/10 transition-colors duration-500">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl uppercase tracking-wider mb-1">Technical Sheet</h3>
                  <p className="text-sm opacity-60">PDF Document • 1.8 MB</p>
                </div>
              </div>
              <Download className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>
        </Reveal>
      </section>

      {/* Closing Title */}
      <section className="mt-32 mb-8 text-center">
        <Reveal>
          <h2 className="text-sculptural text-[clamp(3rem,8vw,9rem)] leading-[0.85] uppercase tracking-tighter">
            Ground Speaks.<br/>We Listen.
          </h2>
        </Reveal>
      </section>
    </div>
  );
}

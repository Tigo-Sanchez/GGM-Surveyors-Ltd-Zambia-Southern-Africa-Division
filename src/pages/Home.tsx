import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Scale, Landmark, TrendingUp, Handshake, FileText, Globe2, Target, Zap, BookOpen, Users, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="pt-40 px-8 max-w-[1600px] mx-auto pb-32">
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col justify-center mb-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <span className="px-4 py-1 bg-[#FFFF00] text-black text-xs font-bold uppercase tracking-widest">Private Executive Pitch</span>
            <span className="px-4 py-1 bg-black/5 dark:bg-white/10 text-black/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest">Executive Briefing for Chibesakunda & Co.</span>
          </div>
          
          <div className="mb-4">
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-black/50 dark:text-white/50">
              Mapping Dept
            </span>
          </div>
          <h1 className="text-sculptural text-[clamp(4rem,9vw,10rem)] leading-[0.85] uppercase tracking-tighter mb-12">
            Build The<br/>Future.
          </h1>
          
          <p className="text-editorial text-black dark:text-[#FFFF00] text-2xl max-w-4xl leading-relaxed font-bold">
            GGM Surveyors 🤝 Chibesakunda & Co. (CCO)
          </p>
        </Reveal>
      </section>

      {/* Executive Preamble & Letter */}
      <section className="mb-32">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">The Paradigm Shift</h2>
              <div className="glass-panel p-8 border-l-4 border-[#FFFF00]">
                <p className="text-xl font-medium leading-relaxed italic">
                  "Le nuove leggi zambiane hanno trasformato il rischio geologico e ambientale in un rischio legale, penale e finanziario diretto per gli investitori. La consulenza legale da sola non basta più se non è supportata da prove tecniche inoppugnabili."
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6 text-lg text-black/80 dark:text-white/80 leading-relaxed font-medium">
              <p>
                As highlighted in recent analyses regarding the new Minerals Regulation Commission Act and the Local Content Regulations, the Zambian mining sector is transitioning from an era of voluntary compliance to one of strict regulatory enforcement and personal director liability. Legal advisory alone, while foundational, must now be inextricably linked to verifiable geoscientific proof.
              </p>
              <p>
                To demonstrate exactly how GGM Surveyors Company Ltd. operates as the ultimate technical extension of Chibesakunda & Co.'s legal due diligence, we have mapped a <strong>40-Point Integrated Compliance Framework</strong>. 
              </p>
              <p>
                This matrix justifies our subsurface engineering explicitly against the core mandates of the GMD Act 2025, the MRC Act 2024, and the Local Content SI. It highlights how we translate geological intelligence into tangible legal shielding, procurement compliance, and financial bankability for Chibesakunda & Co.'s clients.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Intro to GGM Surveyors */}
      <section className="mb-32">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-widest mb-8 pb-4">Chi Siamo: GGM Surveyors</h2>
              <p className="text-black/70 dark:text-white/70 text-lg leading-relaxed mb-6">
                GGM Surveyors Company Ltd. è la divisione per l'Africa Australe del gruppo GGM.EARTH, con sede a Ndola, nella Provincia di Copperbelt (Zambia).
              </p>
              <p className="text-black/70 dark:text-white/70 text-lg leading-relaxed mb-6">
                Forniamo indagini sul campo integrate e modelli del sottosuolo 3D "decision-grade" per progetti minerari, infrastrutturali, idrici ed energetici. Il nostro protocollo <strong>Multilevel Survey</strong> correla dati ERT, EM, Magnetometria, Sismica, GPR, LiDAR e Satellitari in un unico asset 3D coerente.
              </p>
              <p className="text-black/70 dark:text-white/70 text-lg leading-relaxed">
                Operiamo all'interno dell'ecosistema tecnico globale, allineando l'esecuzione sul campo in Zambia con i più alti standard europei e un'innovazione continua.
              </p>
            </div>
            <div className="glass-panel p-6 sm:p-10 lg:p-12 relative overflow-hidden group/container">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFFF00]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-transform duration-1000 group-hover/container:translate-x-1/4" />
              
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-10 relative z-10">Il Valore Aggiunto<br/><span className="text-black/40 dark:text-white/40 text-xl sm:text-2xl">in Southern Africa</span></h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                <div className="group flex flex-col gap-4 p-6 bg-black/5 dark:bg-white/5 hover:bg-black dark:hover:bg-white transition-all duration-500 h-full">
                  <div className="w-12 h-12 bg-white dark:bg-black flex items-center justify-center shrink-0 group-hover:bg-[#FFFF00] group-hover:text-black transition-colors duration-500">
                    <Zap className="w-5 h-5 text-black dark:text-white group-hover:text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-white dark:group-hover:text-black transition-colors duration-500">Tecnologia Operativa</h4>
                    <p className="text-black/60 dark:text-white/60 group-hover:text-white/70 dark:group-hover:text-black/70 leading-relaxed text-sm transition-colors duration-500">Iniezione immediata e operativa di tecnologia e metodologia in Zambia.</p>
                  </div>
                </div>

                <div className="group flex flex-col gap-4 p-6 bg-black/5 dark:bg-white/5 hover:bg-black dark:hover:bg-white transition-all duration-500 h-full">
                  <div className="w-12 h-12 bg-white dark:bg-black flex items-center justify-center shrink-0 group-hover:bg-[#FFFF00] group-hover:text-black transition-colors duration-500">
                    <BookOpen className="w-5 h-5 text-black dark:text-white group-hover:text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-white dark:group-hover:text-black transition-colors duration-500">Know-How Transfer</h4>
                    <p className="text-black/60 dark:text-white/60 group-hover:text-white/70 dark:group-hover:text-black/70 leading-relaxed text-sm transition-colors duration-500">Trasferimento di protocolli, QA/QC e standard di consegna europei.</p>
                  </div>
                </div>

                <div className="group flex flex-col gap-4 p-6 bg-black/5 dark:bg-white/5 hover:bg-black dark:hover:bg-white transition-all duration-500 h-full">
                  <div className="w-12 h-12 bg-white dark:bg-black flex items-center justify-center shrink-0 group-hover:bg-[#FFFF00] group-hover:text-black transition-colors duration-500">
                    <Users className="w-5 h-5 text-black dark:text-white group-hover:text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-white dark:group-hover:text-black transition-colors duration-500">Impatto Locale</h4>
                    <p className="text-black/60 dark:text-white/60 group-hover:text-white/70 dark:group-hover:text-black/70 leading-relaxed text-sm transition-colors duration-500">Collaborazione con esperti e comunità locali per continuità e impatto reale.</p>
                  </div>
                </div>

                <div className="group flex flex-col gap-4 p-6 bg-black/5 dark:bg-white/5 hover:bg-black dark:hover:bg-white transition-all duration-500 h-full">
                  <div className="w-12 h-12 bg-white dark:bg-black flex items-center justify-center shrink-0 group-hover:bg-[#FFFF00] group-hover:text-black transition-colors duration-500">
                    <Network className="w-5 h-5 text-black dark:text-white group-hover:text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-white dark:group-hover:text-black transition-colors duration-500">Sistema Integrato</h4>
                    <p className="text-black/60 dark:text-white/60 group-hover:text-white/70 dark:group-hover:text-black/70 leading-relaxed text-sm transition-colors duration-500">Team locale per l'esecuzione, team EU per l'inversione e controllo qualità 3D.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* The Context & The Missing Piece */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal delay={0.1} className="h-full">
            <div className="glass-panel p-12 h-full">
              <Landmark className="w-10 h-10 text-black/50 dark:text-white/50 mb-8" />
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">CCO's Focus & Expertise</h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg mb-6">
                As a leading firm in Zambia and member of the DLA Piper global network, Chibesakunda & Co.'s focus on <strong>due diligence for mining acquisitions</strong> and advising PE funds is unparalleled.
              </p>
              <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg">
                The firm's strategic alignment with the <strong>Local Content Regulations 2025</strong> and the retention of value in Africa (Lobito Corridor, Critical Minerals) perfectly matches our vision.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="h-full">
            <div className="glass-panel p-12 h-full">
              <Target className="w-10 h-10 text-black dark:text-[#FFFF00] mb-8" />
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">The GGM Advantage</h3>
              <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg mb-6">
                CCO needs to ensure its clients comply with the new laws without compromising on technical quality. 
                <strong> GGM Surveyors</strong> is the "Missing Piece".
              </p>
              <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg">
                Co-led by Zambian CEO Chewe Chilufya, we are the perfect <em>Local Company</em>. We guarantee immediate compliance with the 20% "Core Services" quota while delivering European-grade engineering.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key Synergies */}
      <section className="mb-32">
        <Reveal>
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-12 pb-4">Strategic Synergies for CCO</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Total De-Risking (M&A)", 
              desc: "While CCO executes the Legal & Financial Due Diligence, GGM provides the Technical Due Diligence (GeoRisk Report). An unassailable package for PE funds.", 
              icon: <ShieldCheck /> 
            },
            { 
              title: "15% Preference Margin", 
              desc: "Structure contracts for foreign clients exploiting the 15% preference margin guaranteed by the Local Content Regs by partnering with GGM.", 
              icon: <TrendingUp /> 
            },
            { 
              title: "Supplier Development", 
              desc: "Direct clients' mandatory funds (0.05%) towards the upcoming GGM Academy and planned university partnerships, ensuring perfect government compliance and zero penalties.", 
              icon: <Handshake /> 
            },
            { 
              title: "Digital Passporting", 
              desc: "RTK traceability to provide CCO with the exact documentary proof needed for securing Mineral Export Permits and combating illegal mining.", 
              icon: <FileText /> 
            },
            { 
              title: "International Bankability", 
              desc: "Neutralize 'blind drilling' risks with 3D Digital Twins, allowing CCO to present investment packages compliant with JORC/NI 43-101 standards.", 
              icon: <Globe2 /> 
            },
            { 
              title: "ESG & EIA Compliance", 
              desc: "Private environmental Risk Intelligence to bulletproof clients' EIA requests to ZEMA, bypassing state inefficiencies.", 
              icon: <Scale /> 
            }
          ].map((synergy, i) => (
            <div key={i} className="h-full">
              <Reveal delay={i * 0.1} className="h-full">
                <div className="glass-panel p-10 h-full transition-colors duration-300 group">
                  <div className="text-black/30 dark:text-white/30 group-hover:text-black dark:group-hover:text-[#FFFF00] transition-colors duration-300 mb-6">
                    {synergy.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{synergy.title}</h3>
                  <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">{synergy.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="glass-panel p-16 mb-32">
        <Reveal>
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">Technological Sovereignty & Shared Vision</h2>
          <p className="text-xl text-black/80 dark:text-white/80 leading-relaxed max-w-4xl">
            GGM is not a "predatory extractor." We bring a <strong>permanent Tech-Injection to Ndola</strong>. 
            The European model combined with GGM's local operations creates technological independence for Zambia. 
            <br/><br/>
            We share CCO's vision: the wealth of Critical Minerals must benefit the African continent. 
            Together, GGM and CCO are positioned as the champions of Zambian sovereign development.
          </p>
        </Reveal>
      </section>

      {/* Global About */}
      <section className="mb-32">
        <Reveal>
          <div className="bg-black text-white dark:bg-white dark:text-black p-16">
            <div className="max-w-4xl mx-auto text-center">
              <img src="https://images.squarespace-cdn.com/content/v1/62963b756bf2c45d308b1e5a/1c31e27b-89ff-4f72-8e29-351edc4f8b21/GGM.EARTH_LOGO_W.png?format=2500w" alt="GGM.EARTH" className="h-20 mx-auto mb-8 dark:invert" />
              <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">Global Corporate Profile: GGM.EARTH</h2>
              <p className="text-xl leading-relaxed mb-8 opacity-80">
                GGM.EARTH is an international applied geoscience and engineering group, active since 2009 across Europe, Middle East and Africa, specialized in transforming geological uncertainty into decision-grade subsurface intelligence. Through an integrated operational model and its proprietary Multilevel Survey methodology, the company delivers end-to-end solutions—from desk study and field acquisition to advanced processing, 3D modelling and executive reporting—supporting infrastructure, energy and mining projects in high-risk environments.
              </p>
              <p className="text-lg leading-relaxed mb-8 opacity-70">
                GGM.EARTH operates as a geological intelligence partner for institutional and industrial clients, including the Italian Ministry of Defence, Ministry of Transport, and Ministry of Culture, as well as national infrastructure operators such as RFI and ANAS, and major industrial groups including Hera and Finmeccanica.
              </p>
              <p className="text-lg leading-relaxed opacity-70">
                The company’s core value lies in converting complex subsurface data into structured, reliable and actionable knowledge, enabling safer design, optimized investments and long-term asset resilience.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Call to Action */}
      <section className="text-center pt-20 pb-8">
        <Reveal>
          <h2 className="text-4xl font-bold uppercase tracking-widest mb-8">Let's Schedule Our Call</h2>
          <p className="text-xl text-black/60 dark:text-white/60 mb-12 max-w-2xl mx-auto">
            We look forward to discussing how this 40-point framework can immediately benefit Chibesakunda & Co. and its clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:zambia@ggm.earth" className="bg-[#FFFF00] text-black px-12 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-lg">
              Reply to Surveyors
            </a>
            <Link to="/pillars" className="px-12 py-4 font-bold uppercase tracking-widest bg-black/5 dark:bg-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-lg">
              Review the 40 Pillars
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

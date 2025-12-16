import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import {
  fadeInSoft,
  fadeInUp,
  fadeInScale,
  fadeInFromBlur,
  staggerUp,
  easeEmphasized,
} from './utils/motionPresets';
import { translations, type Language } from './constants/translations';

// 컴포넌트 임포트
import PricingTable from './PricingTable';
import PlacementTable from './PlacementTable';
import DuoTable from './DuoTable';
import PlayTable from './PlayTable';
import DriverGuide from './DriverGuide';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang]; 
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="relative min-h-screen text-black bg-white">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easeEmphasized }}
      >
        <div className="pt-24" />

        <motion.main
          className="container mx-auto px-6 py-12 md:py-24 space-y-26"
          variants={fadeInSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {/* --- 1. 첫 번째 섹션 --- */}
          <div>
            <motion.section
              className="relative overflow-hidden mb-20 md:mb-32"
              variants={fadeInFromBlur}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="max-w-6xl mx-auto px-6 py-2 md:py-1">
                <motion.div
                  className="text-center"
                  variants={staggerUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h1
                    className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight"
                    variants={fadeInUp}
                  >
                    <span className="block mb-2 text-black">{t.heroTitle1}</span>
                    <motion.span
                      className="inline-block text-black"
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: easeEmphasized }}
                    >
                      {t.heroTitle2}
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12 whitespace-pre-line"
                    variants={fadeInUp}
                  >
                    {t.heroDesc}
                  </motion.p>

                  {/* 버튼 그룹 */}
                  <motion.div
                    className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
                    variants={fadeInUp}
                  >
                    <motion.button
                      className={`px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        activeSection === 'pricing' 
                          ? 'bg-black text-white border-black' 
                          : 'border-black/50 text-black hover:border-black hover:bg-black hover:text-white'
                      }`}
                      onClick={() => toggleSection('pricing')}
                    >
                      {activeSection === 'pricing' ? t.btnClosePricing : t.btnPricing}
                    </motion.button>

                    <motion.button
                      className={`px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        activeSection === 'placement' 
                          ? 'bg-black text-white border-black' 
                          : 'border-black/50 text-black hover:border-black hover:bg-black hover:text-white'
                      }`}
                      onClick={() => toggleSection('placement')}
                    >
                      {activeSection === 'placement' ? t.btnClosePlacement : t.btnPlacement}
                    </motion.button>

                    {/* 듀오 (영어 숨김) */}
                    {lang !== 'en' && (
                      <motion.button
                        className={`px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                          activeSection === 'duo' 
                            ? 'bg-black text-white border-black' 
                            : 'border-black/50 text-black hover:border-black hover:bg-black hover:text-white'
                        }`}
                        onClick={() => toggleSection('duo')}
                      >
                        {activeSection === 'duo' ? t.btnCloseDuo : t.btnDuo}
                      </motion.button>
                    )}

                    {/* Net Win (영어 노출) */}
                    <motion.button
                      className={`px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        activeSection === 'play' 
                          ? 'bg-black text-white border-black' 
                          : 'border-black/50 text-black hover:border-black hover:bg-black hover:text-white'
                      }`}
                      onClick={() => toggleSection('play')}
                    >
                      {activeSection === 'play' ? t.btnClosePlay : t.btnPlay}
                    </motion.button>

                    <motion.button
                      className={`px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        activeSection === 'driver' 
                          ? 'bg-black text-white border-black' 
                          : 'border-black/50 text-black hover:border-black hover:bg-black hover:text-white'
                      }`}
                      onClick={() => toggleSection('driver')}
                    >
                      {activeSection === 'driver' ? t.btnCloseDriver : t.btnDriver}
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>

            <AnimatePresence mode="wait">
              {activeSection === 'pricing' && (
                <motion.div
                  key="pricing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <PricingTable lang={lang} />
                </motion.div>
              )}
              {activeSection === 'placement' && (
                <motion.div
                  key="placement"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <PlacementTable lang={lang} />
                </motion.div>
              )}
              {activeSection === 'duo' && lang !== 'en' && (
                <motion.div
                  key="duo"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <DuoTable lang={lang} />
                </motion.div>
              )}
              {activeSection === 'play' && (
                <motion.div
                  key="play"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <PlayTable lang={lang} />
                </motion.div>
              )}
              {activeSection === 'driver' && (
                <motion.div
                  key="driver"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <DriverGuide lang={lang} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.section
            className="mb-20 md:mb-32"
            variants={fadeInSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
             <div className="max-w-6xl mx-auto">
               <motion.div className="text-center mb-16" variants={staggerUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                 <motion.h2 className="text-4xl md:text-5xl font-black text-black mb-6" variants={fadeInUp}>{t.valueTitle}</motion.h2>
               </motion.div>
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <motion.div className="space-y-8" variants={staggerUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                   <motion.div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm" variants={fadeInUp}>
                     <div className="flex items-start gap-4">
                       <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                         <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                       </div>
                       <div><h3 className="text-xl font-bold text-black mb-3">{t.val1Title}</h3><p className="text-gray-700 leading-relaxed">{t.val1Desc}</p></div>
                     </div>
                   </motion.div>
                   <motion.div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm" variants={fadeInUp}>
                     <div className="flex items-start gap-4">
                       <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                         <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                       </div>
                       <div><h3 className="text-xl font-bold text-black mb-3">{t.val2Title}</h3><p className="text-gray-700 leading-relaxed">{t.val2Desc}</p></div>
                     </div>
                   </motion.div>
                   <motion.div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm" variants={fadeInUp}>
                     <div className="flex items-start gap-4">
                       <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                         <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                       </div>
                       <div><h3 className="text-xl font-bold text-black mb-3">{t.val3Title}</h3><p className="text-gray-700 leading-relaxed">{t.val3Desc}</p></div>
                     </div>
                   </motion.div>
                 </motion.div>
                 <motion.div className="relative" variants={fadeInScale} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                   <motion.div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl blur opacity-20" />
                   <motion.div className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-sm" variants={fadeInUp}>
                     <div className="text-center">
                       <div className="mb-8">
                         <div className="relative w-32 h-32 mx-auto mb-6">
                           <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200" /><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="10" className="text-black transition-all duration-1000 ease-out" strokeLinecap="round"/></svg>
                           <div className="absolute inset-0 flex items-center justify-center"><span className="text-2xl font-black text-black-700">99%</span></div>
                         </div>
                         <h3 className="text-xl font-bold text-black mb-2">{t.satTitle}</h3><p className="text-gray-700 leading-relaxed">{t.satDesc}</p>
                       </div>
                       <h3 className="text-2xl font-bold text-black mb-4">{t.eventTitle}</h3><p className="text-gray-700 leading-relaxed">{t.eventDesc}</p>
                     </div>
                   </motion.div>
                 </motion.div>
               </div>
             </div>
          </motion.section>

          <motion.section className="mb-20 md:mb-32" variants={fadeInSoft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
             <div className="max-w-6xl mx-auto">
               <div className="relative">
                 <div className="absolute -inset-1 bg-gray-300 rounded-3xl blur opacity-20" />
                 <motion.div className="relative bg-white p-12 md:p-16 rounded-3xl border border-gray-200 shadow-lg text-center" variants={staggerUp}>
                    <motion.div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8" variants={fadeInScale}>
                       <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"/></svg>
                    </motion.div>
                    <motion.h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight" variants={fadeInUp}>
                       {t.cleanTitle1}<br /><span className="text-black">{t.cleanTitle2}</span>
                    </motion.h2>
                    <motion.p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12 whitespace-pre-line" variants={fadeInUp}>
                       {t.cleanDesc}
                    </motion.p>
                    <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" variants={fadeInUp}>
                       <motion.a href={t.discordLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-black/50 hover:border-black text-black hover:bg-black hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                         {t.discord}
                       </motion.a>
                    </motion.div>
                 </motion.div>
               </div>
             </div>
          </motion.section>
        </motion.main>
      </motion.div>
    </div>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerUp } from './utils/motionPresets';
import { translations,type Language } from './constants/translations';

interface DriverCardProps {
  name: string;
  tier?: string;
  position?: string;
  isCta?: boolean;
  lang: Language;
}

const DriverCard: React.FC<DriverCardProps> = ({ name, tier, position, isCta = false, lang }) => {
  const t = translations[lang];

  if (isCta) {
    return (
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg border-2 border-dashed border-gray-400 text-center h-full min-h-[300px] bg-gray-50 hover:bg-white transition-colors"
      >
        <h3 className="text-2xl font-bold text-black mb-4">{name}</h3>
        <p className="text-gray-600 leading-relaxed">
          {t.driverCardVerified}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-center h-full min-h-[300px] relative overflow-hidden transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="absolute top-6">
        <span className="bg-black/5 text-black text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wider">
          TEAM PRIME
        </span>
      </div>

      <div className="text-center mt-4 mb-8">
        <h3 className="text-4xl font-black text-black mb-1">{name}</h3>
      </div>

      <div className="w-full space-y-3">
        <div className="flex flex-col bg-gray-50 p-4 rounded-xl text-center">
          <span className="text-gray-400 text-xs font-bold mb-1 uppercase tracking-wider">{t.labelTier}</span>
          <span className="text-black font-bold text-lg break-keep">{tier}</span>
        </div>
        <div className="flex flex-col bg-gray-50 p-4 rounded-xl text-center">
          <span className="text-gray-400 text-xs font-bold mb-1 uppercase tracking-wider">{t.labelPosition}</span>
          <span className="text-black font-bold text-lg break-keep">{position}</span>
        </div>
      </div>
    </motion.div>
  );
};

interface DriverGuideProps {
  lang: Language;
}

const DriverGuide: React.FC<DriverGuideProps> = ({ lang }) => {
  const t = translations[lang];
  const isEn = lang === 'en';

  const drivers = [
    { name: 'Attacca', tier: isEn ? 'Champion 4' : '챔피언 4', position: 'DPS' },
    { name: 'DA', tier: isEn ? 'Champion 3' : '챔피언 3', position: 'SUP, DPS' },
    { name: 'XZ', tier: isEn ? 'Champion 5' : '챔피언 5', position: 'DPS, TANK, SUP' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <motion.div
          className="text-center mb-16"
          variants={staggerUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-black mb-4">
            {t.driverTitle}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.driverDesc}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {drivers.map((d) => (
            <DriverCard key={d.name} name={d.name} tier={d.tier} position={d.position} lang={lang} />
          ))}
          <DriverCard name={t.driverCardInfo} isCta={true} lang={lang} />
        </motion.div>

        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a
            href={t.discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-black/50 hover:border-black text-black hover:bg-black hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            >
            {t.discord}
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default DriverGuide;
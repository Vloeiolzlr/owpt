import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerUp } from './utils/motionPresets';
import { translations, type Language } from './constants/translations';

interface SimplePriceCardProps {
  tier: string;
  price?: string;
  isCta?: boolean;
  lang: Language;
}

const SimplePriceCard: React.FC<SimplePriceCardProps> = ({ tier, price, isCta = false, lang }) => {
  const t = translations[lang];

  if (isCta) {
    return (
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg border-2 border-dashed border-gray-400 text-center h-full bg-gray-50 hover:bg-white transition-colors"
      >
        <h3 className="text-2xl font-bold text-black mb-4">{t.ctaCardTitle}</h3>
        <p className="text-gray-600 whitespace-pre-line">
           {t.ctaCardDescDuo}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center"
    >
      <h3 className="text-2xl font-bold text-black mb-4">{tier}</h3>
      <div className="text-4xl font-black text-black mb-6">
        {t.currency}{price}{t.won}
      </div>
    </motion.div>
  );
};

interface DuoTableProps {
  lang: Language;
}

const DuoTable: React.FC<DuoTableProps> = ({ lang }) => {
  const t = translations[lang];
  const isEn = lang === 'en';

  const tiers = [
    { tier: isEn ? 'Bronze' : '브론즈', price: '2,000' },
    { tier: isEn ? 'Silver' : '실버', price: '2,000' },
    { tier: isEn ? 'Gold' : '골드', price: '2,000' },
    { tier: isEn ? 'Platinum' : '플래티넘', price: '2,800' },
    { tier: isEn ? 'Diamond' : '다이아몬드', price: '3,500' },
    { tier: isEn ? 'Master' : '마스터', price: '4,500' },
    { tier: isEn ? 'Grandmaster 5' : '그랜드마스터 5', price: '8,000' },
    { tier: isEn ? 'Grandmaster 4' : '그랜드마스터 4', price: '11,000' },
    { tier: isEn ? 'Grandmaster 3' : '그랜드마스터 3', price: '15,000' },
    { tier: isEn ? 'Grandmaster 2' : '그랜드마스터 2', price: '20,000' },
    { tier: isEn ? 'Grandmaster 1' : '그랜드마스터 1', price: '26,000' },
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
            {t.duoTitle}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.perGame}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tiers.map((x) => (
            <SimplePriceCard key={x.tier} tier={x.tier} price={x.price} lang={lang} />
          ))}
          <SimplePriceCard tier="" isCta={true} lang={lang} />
        </motion.div>

        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a
            href="https://discord.gg/zayDrBvezf"
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

export default DuoTable;
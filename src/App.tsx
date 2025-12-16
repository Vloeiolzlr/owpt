import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import About from './About';
import { translations,type Language } from './constants/translations';

function App() {
  const [lang, setLang] = useState<Language | null>(null);

  // 언어 선택 핸들러
  const handleLangSelect = (selected: Language) => {
    setLang(selected);
  };

  // 언어 전환 토글
  const toggleLang = () => {
    setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {/* 1. 언어가 선택되지 않았을 때: 인트로 화면 */}
        {lang === null && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-8">
              Select Language / 언어를 선택하세요
            </h1>
            <div className="flex gap-6">
              <button
                onClick={() => handleLangSelect('ko')}
                className="px-8 py-4 border-2 border-black rounded-2xl text-xl font-bold hover:bg-black hover:text-white transition-all duration-300"
              >
                한국어
              </button>
              <button
                onClick={() => handleLangSelect('en')}
                className="px-8 py-4 border-2 border-black rounded-2xl text-xl font-bold hover:bg-black hover:text-white transition-all duration-300"
              >
                English
              </button>
            </div>
          </motion.div>
        )}

        {/* 2. 언어가 선택되었을 때: 메인 화면 */}
        {lang !== null && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
             {/* 우측 상단 언어 전환 토글 (고정) */}
            <div className="fixed top-6 right-6 z-50">
              <button
                onClick={toggleLang}
                className="px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-300 rounded-full shadow-md text-sm font-bold hover:bg-black hover:text-white transition-all"
              >
                {lang === 'ko' ? 'English' : '한국어'}
              </button>
            </div>

            {/* 메인 컨텐츠 */}
            <About lang={lang} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
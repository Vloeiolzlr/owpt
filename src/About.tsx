// vloeiolzlr/owpt/owpt-fecdb1401af017faa9974adaf80620d1f8666821/src/About.tsx (수정본)

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  fadeInSoft,
  fadeInUp,
  fadeInScale,
  fadeInFromBlur,
  staggerUp,
  easeEmphasized,
} from './utils/motionPresets';

const About: React.FC = () => {
  // 스크롤 진행 상태 관련 로직은 제거하거나 수정이 필요할 수 있으나, 
  // 여기서는 보라색 오버레이를 제거했으므로 scrollProgress 상태는 사용되지 않습니다.
  // const [scrollProgress, setScrollProgress] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const maxScroll = windowHeight * 2;
  //     const progress = Math.min(scrollTop / maxScroll, 1);
  //     setScrollProgress(progress);
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   handleScroll();
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    // 1. 루트 컨테이너: 'text-white' -> 'text-black', 'bg-white' 추가
    <div className="relative min-h-screen text-black bg-white">
      
      {/* 2. 기존 배경 이미지, 검은색/보라색 오버레이 제거 */}
      {/* <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/AboutPic.png')" }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div
        className="fixed inset-0 transition-opacity duration-300"
        style={{ backgroundColor: `rgba(124, 58, 237, ${scrollProgress * 0.6})` }}
      /> 
      */}

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easeEmphasized }}
      >
        <div className="pt-24" />

        <motion.main
          className="container mx-auto px-6 py-12 md:py-24 space-y-20"
          variants={fadeInSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.section
            className="relative overflow-hidden mb-20 md:mb-32"
            variants={fadeInFromBlur}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
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
                  {/* 3. 'text-white' -> 'text-black' */}
                  <span className="block mb-2 text-black">항상 고객의 입장에서</span>
                  <motion.span
                    // 4. 보라색 그라데이션 -> 검은색 단색
                    className="inline-block text-black" 
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: easeEmphasized }}
                  >
                    생각합니다
                  </motion.span>
                </motion.h1>

                <motion.p
                  // 5. 'text-gray-300' -> 'text-gray-700' (검은색보단 연하게)
                  className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12"
                  variants={fadeInUp}
                >
                  프라임팀은 단순히 돈만 받고 일하는 팀이 아닙니다.<br />
                  {/* 6. 'text-violet-300' -> 'text-black' */}
                  <span className="text-black font-semibold">고객의 마음처럼</span> 하나 하나 신중하게 작업합니다.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  variants={fadeInUp}
                >
                  {/* <motion.button
                    // 7. 보라색 버튼 -> 검은색 버튼
                    className="px-8 py-4 bg-black hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    프로그램 보기
                  </motion.button> */}
                  <motion.button
                    // 8. 보라색 아웃라인 버튼 -> 검은색 아웃라인 버튼
                    className="px-8 py-4 border-2 border-black/50 hover:border-black text-black hover:bg-black hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    가격표
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className="mb-20 md:mb-32"
            variants={fadeInSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                variants={staggerUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* 'accent-gold' 관련 부분은 보라색이 아니므로 유지했습니다. */}
                {/* 9. 'text-white' -> 'text-black' */}
                <motion.h2 className="text-4xl md:text-5xl font-black text-black mb-6" variants={fadeInUp}>
                  {/* 10. 'text-violet-400' -> 'text-black' */}
                  <span className="text-black">고객과의 신뢰</span>, 그리고 팀의 비전
                </motion.h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  className="space-y-8"
                  variants={staggerUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.div
                    // 1. (수정 불필요) 흰색 카드 스타일 유지
                    className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      {/* 2. 아이콘 배경: 'bg-yellow-500/20' -> 'bg-gray-500/20' */}
                      <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        {/* 3. 아이콘 색상: 'text-yellow-600' -> 'text-gray-600' */}
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">핵심 가치</h3>
                        <p className="text-gray-700 leading-relaxed">
                          저희가 가장 중요하게 생각하는 건 {' '}
                          {/* 4. 강조 텍스트: 'text-yellow-700' -> 'text-black' */}
                          <span className="text-black font-semibold">'책임감'</span>입니다.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    // 14. 어두운 카드 -> 흰색 카드
                    className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      {/* 15. 보라색 아이콘 -> 회색 아이콘 */}
                      <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">고객 맞춤</h3>
                        <p className="text-gray-700 leading-relaxed">
                          작업 방송, 듀오, 강의 등등 원하시는 사항이 있으시면 언제든 말씀해주세요{' '}
                          {/* 16. 'text-violet-400' -> 'text-black' */}
                          <span className="text-black font-semibold">"최대한 고객님의 요청에 맞추겠습니다."</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    // 17. 어두운 카드 -> 흰색 카드
                    className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      {/* 18. 연보라색 아이콘 -> 회색 아이콘 */}
                      <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">최저가</h3>
                        <p className="text-gray-700 leading-relaxed">
                          팀 단위이긴 하나 프라임팀은,{' '}
                          {/* 19. 'text-accent-light-purple' -> 'text-black' */}
                          <span className="text-black font-semibold">업계 최저가</span>입니다.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="relative"
                  variants={fadeInScale}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* 'accent-gold' 그라데이션 유지 */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-accent-gold to-yellow-500 rounded-2xl blur opacity-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    // 20. 어두운 카드 -> 흰색 카드
                    className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                    variants={fadeInUp}
                  >
                    <div className="text-center">
                      <div className="mb-8">
                        <div className="relative w-32 h-32 mx-auto mb-6">
                          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                            {/* 21. 'text-gray-700' -> 'text-gray-200' (배경 링) */}
                            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200" />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray="251.2"
                              strokeDashoffset="10"
                              className="text-yellow-600 transition-all duration-1000 ease-out" // 'accent-gold' 유지
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-black text-yellow-700">99%</span>
                          </div>
                        </div>
                        {/* 22. 'text-white' -> 'text-black' */}
                        <h3 className="text-xl font-bold text-black mb-2">고객 만족도</h3>
                        <p className="text-gray-700 leading-relaxed">
                        평균 고객 만족도는<br />
                        <span className="text-yellow-700 font-semibold">99%</span>를 자랑합니다.
                      </p>
                      </div>

                      {/* 'accent-gold' 아이콘 유지 */}
                      <div className="w-20 h-20 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>

                      <h3 className="text-2xl font-bold text-black mb-4">다양한 이벤트</h3>
                      <p className="text-gray-700 leading-relaxed">
                        프라임팀은 업계 최저가와 더불어<br />
                        <span className="text-yellow-700 font-semibold">다양한 이벤트</span>가 진행중입니다.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="mb-20 md:mb-32"
            variants={fadeInSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                {/* 24. 보라색 그라데이션 -> 회색 그라데이션 (금색은 유지) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 via-gray-400 to-yellow-500 rounded-3xl blur opacity-20" />
                <motion.div
                  // 25. 어두운 카드 -> 흰색 카드
                  className="relative bg-white p-12 md:p-16 rounded-3xl border border-gray-200 shadow-lg text-center"
                  variants={staggerUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                >
                  {/* 'accent-gold' 아이콘 유지 */}
                  <motion.div
                    className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-3xl mb-8 border border-yellow-500/30"
                    variants={fadeInScale}
                  >
                    <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </motion.div>

                  <motion.h2
                    // 26. 'text-white' -> 'text-black'
                    className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight"
                    variants={fadeInUp}
                  >
                    고객님께 피해가 갈만한 작업은,<br />
                    {/* 27. 그라데이션 텍스트 -> 검은색 단색 */}
                    <span className="text-black">
                      일체 하지 않습니다.
                    </span>
                  </motion.h2>

                  <motion.p
                    // 28. 'text-gray-300' -> 'text-gray-700'
                    className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12"
                    variants={fadeInUp}
                  >
                    불법 프로그램, 어뷰징, 불법 프로그램 듀오 일체 하지 않습니다 <br />
                    {/* 29. 'text-white' -> 'text-black' */}
                    <span className="text-black font-bold text-2xl">그것이 바로 저희가 지향하는 작업입니다.</span>
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    variants={fadeInUp}
                  >
                    <motion.button
                      className="px-10 py-4 border-2 border-yellow-500/50 hover:border-yellow-600 text-yellow-700 hover:text-white hover:bg-yellow-600 font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      디스코드
                    </motion.button>                  
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
// vloeiolzlr/owpt/owpt-fecdb1401af017faa9974adaf80620d1f8666821/src/About.tsx (최종 수정본)

// 1. AnimatePresence를 import에 추가합니다.
import React, { useState } from 'react'; // (useEffect는 사용되지 않아 제거)
import { motion, AnimatePresence } from 'framer-motion'; 
import {
  fadeInSoft,
  fadeInUp,
  fadeInScale,
  fadeInFromBlur,
  staggerUp,
  easeEmphasized,
} from './utils/motionPresets';
import PricingTable from './PricingTable';

const About: React.FC = () => {
  const [showPricing, setShowPricing] = useState(false);
  
  // ... (주석 처리된 useEffect 등은 그대로 둡니다) ...

  return (
    <div className="relative min-h-screen text-black bg-white">
      {/* ... (주석 처리된 배경 이미지 등은 그대로 둡니다) ... */}

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

          {/* --- 1. 첫 번째 섹션 (사용자님 최신 문구 반영) --- */}
          <div>
          <motion.section
            className="relative overflow-hidden mb-20 md:mb-32"
            variants={fadeInFromBlur}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* 가격표 - 고객과의 신뢰 여백크기 md:py-값*/}
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
                  <span className="block mb-2 text-black">항상 고객의 입장에서</span>
                  <motion.span
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
                  className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12"
                  variants={fadeInUp}
                >
                  프라임팀은 단순히 돈만 받고 일하는 팀이 아닙니다.<br />
                  {/* 사용자님 최신 문구: */}
                  <span className="text-black font-semibold">고객의 마음처럼</span> 하나 하나 신중하게 작업합니다.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  variants={fadeInUp}
                >
                  {/* "프로그램 보기" 버튼은 사용자님이 주석 처리하신 것 반영 */}
                  {/* <motion.button ... >
                    프로그램 보기
                  </motion.button> */}

                  {/* 2. '가격표' 버튼에 onClick 이벤트와 텍스트 변경 로직 추가 */}
                  <motion.button
                    className="px-8 py-4 border-2 border-black/50 hover:border-black text-black hover:bg-black hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowPricing(!showPricing)} // <-- 클릭 이벤트 추가
                  >
                    {showPricing ? '가격표 닫기' : '가격표'} {/* <-- 텍스트 변경 로직 추가 */}
                  </motion.button>

                  <motion.a
                      href="https://discord.gg/zayDrBvezf" // 2. 여기에 실제 디스코드 초대 링크를 넣어주세요
                      target="_blank" // 3. 새 탭에서 열리도록 설정
                      rel="noopener noreferrer" // 4. 보안 설정
                      className="px-8 py-4 border-2 border-black/50 hover:border-black text-black hover:bg-black hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      디스코드
                    </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
           {/* 3. ▼▼▼ 가격표 조건부 렌더링 섹션 추가 ▼▼▼ */}
        <AnimatePresence>
          {showPricing && (
            <motion.div
              initial={{ opacity: 0, y: 50 }} // 나타날 때 아래에서 위로
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }} // 사라질 때 아래로
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <PricingTable />
            </motion.div>
          )}
        </AnimatePresence>
        {/* 3. ▲▲▲ 가격표 섹션 추가 완료 ▲▲▲ */}
        </div>

          {/* --- 2. 두 번째 섹션 (사용자님 최신 문구 반영) --- */}
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
                {/* (타이틀 문구 사용자님 것으로 반영) */}
                <motion.h2 className="text-4xl md:text-5xl font-black text-black mb-6" variants={fadeInUp}>
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
                  {/* (카드 1: '책임감' 문구 반영) */}
                  <motion.div
                    className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          <span className="text-black font-semibold">'책임감'</span>입니다.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* (카드 2: '고객 맞춤' 문구 반영) */}
                  <motion.div
                    className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          <span className="text-black font-semibold">"최대한 고객님의 요청에 맞추겠습니다."</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* (카드 3: '최저가' 문구 반영) */}
                  <motion.div
                    className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                    variants={fadeInUp}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">최저가</h3>
                        <p className="text-gray-700 leading-relaxed">
                          팀 단위이긴 하나 프라임팀은,{' '}
                          <span className="text-black font-semibold">업계 최저가</span>입니다.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* --- 2-b. 오른쪽 카드 (99% 만족도, 이벤트) --- */}
                <motion.div
                  className="relative"
                  variants={fadeInScale}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl blur opacity-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                    variants={fadeInUp}
                  >
                    <div className="text-center">
                      {/* (99% 만족도 문구 반영) */}
                      <div className="mb-8">
                        <div className="relative w-32 h-32 mx-auto mb-6">
                          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
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
                              className="text-black transition-all duration-1000 ease-out" // 2. 노란색 -> 검은색
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-black text-black-700">99%</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2">고객 만족도</h3>
                        <p className="text-gray-700 leading-relaxed">
                          평균 고객 만족도는<br />
                          <span className="text-black font-semibold">99%</span>를 자랑합니다.
                        </p>
                      </div>

                      {/* '다양한 이벤트' 아이콘 수정 */}
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {/* 아이콘을 '별' 모양(이벤트)으로 변경 */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-4">다양한 이벤트</h3>
                      <p className="text-gray-700 leading-relaxed">
                        프라임팀은 업계 최저가와 더불어<br />
                        <span className="text-black font-semibold">다양한 이벤트</span>가 진행중입니다.
                      </p>

                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* --- 3. 마지막 섹션 (사용자님 최신 문구 반영) --- */}
          <motion.section
            className="mb-20 md:mb-32"
            variants={fadeInSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gray-300 rounded-3xl blur opacity-20" />
                <motion.div
                  className="relative bg-white p-12 md:p-16 rounded-3xl border border-gray-200 shadow-lg text-center"
                  variants={staggerUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                >
                  {/* 아이콘 색상을 '핵심 가치'와 동일한 회색 계열로 변경 */}
                  <motion.div
                    className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8"
                    variants={fadeInScale}
                  >
                    <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </motion.div>

                  <motion.h2
                    className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight"
                    variants={fadeInUp}
                  >
                    고객님께 피해가 갈만한 작업은,<br />
                    <span className="text-black">
                      일체 하지 않습니다.
                    </span>
                  </motion.h2>

                  <motion.p
                    className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12"
                    variants={fadeInUp}
                  >
                    불법 프로그램, 어뷰징, 불법 프로그램 듀오 일체 하지 않습니다 <br />
                    <span className="text-black font-bold text-2xl">그것이 바로 저희가 지향하는 작업입니다.</span>
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    variants={fadeInUp}
                  >
                    {/* (디스코드 버튼 반영) */}
                  
                    <motion.a
                      href="https://discord.gg/zayDrBvezf" // 2. 여기에 실제 디스코드 초대 링크를 넣어주세요
                      target="_blank" // 3. 새 탭에서 열리도록 설정
                      rel="noopener noreferrer" // 4. 보안 설정
                      className="px-8 py-4 border-2 border-black/50 hover:border-black text-black hover:bg-black hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      디스코드
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
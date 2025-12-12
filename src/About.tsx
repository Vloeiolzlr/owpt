// src/About.tsx

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

// 컴포넌트 임포트
import PricingTable from './PricingTable';
import PlacementTable from './PlacementTable';
import DuoTable from './DuoTable';
import PlayTable from './PlayTable';   // 승패무관 (판수제)
import DriverGuide from './DriverGuide'; // 기사 안내

const About: React.FC = () => {
  // 현재 활성화된 섹션 상태 관리 ('pricing' | 'placement' | 'duo' | 'play' | 'driver' | null)
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // 섹션 토글 함수
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
                    <span className="text-black font-semibold">고객의 마음처럼</span> 하나 하나 신중하게 작업합니다.
                  </motion.p>

                  {/* 버튼 그룹 */}
                  <motion.div
                    className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
                    variants={fadeInUp}
                  >
                    {/* 1. 가격표 버튼 */}
                    <motion.button
                      className={`px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        activeSection === 'pricing' 
                          ? 'bg-black text-white border-black' 
                          : 'border-black/50 text-black hover:border-black hover:bg-black hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => toggleSection('pricing')}
                    >
                      {activeSection === 'pricing' ? '티어제 닫기' : '티어제'}
                    </motion.button>

                    {/* 2. 배치고사 버튼 */}
                    <motion.button
                      className={`px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        activeSection === 'placement' 
                          ? 'bg-black text-white border-black' 
                          : 'border-black/50 text-black hover:border-black hover:bg-black hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => toggleSection('placement')}
                    >
                      {activeSection === 'placement' ? '배치고사 닫기' : '배치고사'}
                    </motion.button>

                    {/* 3. 듀오 버튼 */}
                    <motion.button
                      className={`px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        activeSection === 'duo' 
                          ? 'bg-black text-white border-black' 
                          : 'border-black/50 text-black hover:border-black hover:bg-black hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => toggleSection('duo')}
                    >
                      {activeSection === 'duo' ? '듀오표 닫기' : '듀오'}
                    </motion.button>

                    {/* 4. 승패무관 버튼 */}
                    <motion.button
                      className={`px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        activeSection === 'play' 
                          ? 'bg-black text-white border-black' 
                          : 'border-black/50 text-black hover:border-black hover:bg-black hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => toggleSection('play')}
                    >
                      {activeSection === 'play' ? '승패무관 닫기' : '승패무관'}
                    </motion.button>

                    {/* 5. 기사 안내 버튼 */}
                    <motion.button
                      className={`px-8 py-4 border-2 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                        activeSection === 'driver' 
                          ? 'bg-black text-white border-black' 
                          : 'border-black/50 text-black hover:border-black hover:bg-black hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => toggleSection('driver')}
                    >
                      {activeSection === 'driver' ? '안내 닫기' : '기사 안내'}
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>

            {/* 조건부 렌더링 섹션 (AnimatePresence mode="wait": 하나가 닫히고 다음 것이 열림) */}
            <AnimatePresence mode="wait">
              {/* 가격표 */}
              {activeSection === 'pricing' && (
                <motion.div
                  key="pricing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <PricingTable />
                </motion.div>
              )}

              {/* 배치고사 */}
              {activeSection === 'placement' && (
                <motion.div
                  key="placement"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <PlacementTable />
                </motion.div>
              )}

              {/* 듀오 */}
              {activeSection === 'duo' && (
                <motion.div
                  key="duo"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <DuoTable />
                </motion.div>
              )}

              {/* 승패무관 */}
              {activeSection === 'play' && (
                <motion.div
                  key="play"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <PlayTable />
                </motion.div>
              )}

              {/* 기사 안내 */}
              {activeSection === 'driver' && (
                <motion.div
                  key="driver"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <DriverGuide />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- 2. 두 번째 섹션 (핵심 가치, 고객 만족도 등) --- */}
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
                  {/* 카드 1: 책임감 */}
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

                  {/* 카드 2: 고객 맞춤 */}
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

                  {/* 카드 3: 최저가 */}
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

                {/* 오른쪽 카드 (99% 만족도, 이벤트) */}
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
                              className="text-black transition-all duration-1000 ease-out"
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

                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* --- 3. 마지막 섹션 (클린 작업 강조) --- */}
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
                    <motion.a
                      href="https://discord.gg/zayDrBvezf"
                      target="_blank"
                      rel="noopener noreferrer"
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
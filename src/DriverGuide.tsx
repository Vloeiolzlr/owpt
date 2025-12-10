// src/DriverGuide.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerUp } from './utils/motionPresets';

// 기사 카드 Props 정의
interface DriverCardProps {
  name: string;
  tier?: string;
  position?: string;
  isCta?: boolean; // "기사 모집/문의" 카드 식별
}

const DriverCard: React.FC<DriverCardProps> = ({ name, tier, position, isCta = false }) => {
  // 마지막 "문의" 카드일 경우
  if (isCta) {
    return (
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg 
                   border-2 border-dashed border-gray-400 text-center h-full min-h-[300px]
                   bg-gray-50 hover:bg-white transition-colors"
      >
        <h3 className="text-2xl font-bold text-black mb-4">{name}</h3>
        <p className="text-gray-600 leading-relaxed">
          검증된 기사들로만 구성되어 있습니다.<br/>
        </p>
      </motion.div>
    );
  }

  // 일반 기사 프로필 카드
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-center h-full min-h-[300px] relative overflow-hidden transition-transform duration-300 hover:-translate-y-2"
    >
      {/* 상단 장식 (Team Prime) */}
      <div className="absolute top-6">
        <span className="bg-black/5 text-black text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wider">
          TEAM PRIME
        </span>
      </div>

      {/* 기사 이름 (코드네임) */}
      <div className="text-center mt-4 mb-8">
        <h3 className="text-4xl font-black text-black mb-1">{name}</h3>
      </div>

      {/* 정보 테이블 */}
      <div className="w-full space-y-3">
        {/* 티어 정보 */}
        <div className="flex flex-col bg-gray-50 p-4 rounded-xl text-center">
          <span className="text-gray-400 text-xs font-bold mb-1 uppercase tracking-wider">Top Tier</span>
          <span className="text-black font-bold text-lg break-keep">{tier}</span>
        </div>

        {/* 포지션 정보 */}
        <div className="flex flex-col bg-gray-50 p-4 rounded-xl text-center">
          <span className="text-gray-400 text-xs font-bold mb-1 uppercase tracking-wider">Position</span>
          <span className="text-black font-bold text-lg break-keep">{position}</span>
        </div>
      </div>
    </motion.div>
  );
};

// 기사 안내 전체 컴포넌트
const DriverGuide: React.FC = () => {
  // 기사 데이터 목록
  const drivers = [
    { name: 'Attacca', tier: '챔피언 4', position: 'DPS' },
    { name: 'DA', tier: '챔피언 3', position: 'SUP, DPS' },
    { name: 'XZ', tier: '챔피언 5', position: 'DPS, TANK, SUP' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* 타이틀 영역 */}
        <motion.div
          className="text-center mb-16"
          variants={staggerUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-black mb-4">
            기사 안내
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            최고의 실력을 가진 TEAM PRIME의 기사들을 소개합니다.
          </motion.p>
        </motion.div>

        {/* 기사 카드 그리드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {drivers.map((d) => (
            <DriverCard key={d.name} name={d.name} tier={d.tier} position={d.position} />
          ))}
          {/* 마지막 문의 카드 */}
          <DriverCard name="기사 정보" isCta={true} />
        </motion.div>

        {/* 하단 디스코드 버튼 */}
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
            디스코드
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default DriverGuide;
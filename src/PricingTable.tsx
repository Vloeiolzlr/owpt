import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerUp } from './utils/motionPresets'; // About.tsx에서 사용된 모션 임포트

// 가격 카드 컴포넌트 (단순 버전)
interface SimplePriceCardProps {
  tier: string;
  price?: string; // "그 외 문의" 카드를 위해 price를 optional로 변경
  isCta?: boolean; // "그 외 문의" 카드인지 식별
}

const SimplePriceCard: React.FC<SimplePriceCardProps> = ({ tier, price, isCta = false }) => {
  // 9번째 "그 외 문의" 카드일 경우
  if (isCta) {
    return (
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg 
                   border-2 border-dashed border-gray-400 text-center h-full 
                   bg-gray-50 hover:bg-white transition-colors"
      >
        <h3 className="text-2xl font-bold text-black mb-4">{tier}</h3>
        <p className="text-gray-600">
          {/* 없음<br/> */}
          자세한 사항은 디스코드를 이용해주세요.
        </p>
        {/* --- '문의하기' 버튼이 여기서 삭제되었습니다 --- */}
      </motion.div>
    );
  }

  // 일반 티어 카드일 경우
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center"
    >
      {/* 티어 이름 */}
      <h3 className="text-2xl font-bold text-black mb-4">{tier}</h3>

      {/* 가격 */}
      <div className="text-4xl font-black text-black mb-6">
        ₩{price}
      </div>

      {/* --- '신청하기' 버튼이 여기서 삭제되었습니다 --- */}
    </motion.div>
  );
};

// 가격표 전체 컴포넌트
const PricingTable: React.FC = () => {
  // 8개 티어 데이터 (변경 없음)
  const tiers = [
    { tier: '브론즈', price: '3,000' },
    { tier: '실버', price: '5,000' },
    { tier: '골드', price: '8,000' },
    { tier: '플래티넘', price: '10,000' },
    { tier: '다이아몬드', price: '15,000' },
    { tier: '마스터', price: '25,000' },
    { tier: '그랜드마스터 5', price: '60,000' },
    { tier: '그랜드마스터 4', price: '75,000' },
    { tier: '그랜드마스터 3', price: '90,000' },
    { tier: '그랜드마스터 2', price: '130,000' },
    { tier: '그랜드마스터 1', price: '170,000' },
  ];

  return (
    // 1. 배경색: 'bg-gray-50' -> 'bg-white'로 변경
    <section className="py-24 bg-white"> 
      <div className="container mx-auto px-6">
        
        {/* ... (타이틀 h2, p 태그는 변경 없음) ... */}
        <motion.div
          className="text-center mb-16"
          variants={staggerUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-black mb-4">
            티어별 가격표
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            역할고정 세부티어 1 기준 가격입니다.
          </motion.p>
        </motion.div>

        {/* 가격 카드 그리드 (3x3) (변경 없음) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tiers.map((t) => (
            <SimplePriceCard key={t.tier} tier={t.tier} price={t.price} />
          ))}
          <SimplePriceCard tier="그 외 문의" isCta={true} />
        </motion.div>

        {/* 2. ▼▼▼ 그리드 하단에 새로운 '문의하기' 버튼 추가 ▼▼▼ */}
        <motion.div
          className="text-center mt-16" // 그리드와 간격(margin-top) 줌
          variants={fadeInUp} // 애니메이션 적용
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
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
        {/* ▲▲▲ 버튼 추가 완료 ▲▲▲ */}

      </div>
    </section>
  );
};

export default PricingTable;
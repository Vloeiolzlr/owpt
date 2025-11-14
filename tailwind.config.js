// 새 프로젝트의 tailwind.config.js 예시
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 경로 확인
  ],
  theme: {
    extend: {
      // ▼▼▼ 기존 프로젝트에서 이 부분을 복사 ▼▼▼
      colors: {
        // ... (기존 colors 설정)
      },
      fontFamily: {
        RussoOne: ["RussoOne", "sans-serif"],
        Gothic: ["NEXON Lv2 Gothic"],
        GothicLight: ["NEXON Lv2 Gothic Light"],
        GothicMedium: ["NEXON Lv2 Gothic Medium"],
        GothicBold: ["NEXON Lv2 Gothic Bold"],
        // ... (기존 fontFamily 설정)
      },
      // ▲▲▲ 여기까지 복사 ▲▲▲
    },
  },
  plugins: [],
}
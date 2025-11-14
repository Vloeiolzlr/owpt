// src/App.tsx

// 1. 전역 CSS를 임포트합니다.
import './index.css'; 

// 2. 2단계에서 복사한 About 컴포넌트를 임포트합니다.
// (경로가 다르면 맞게 수정하세요)
import About from './About'; 

function App() {
  return (
    // <About /> 컴포넌트만 렌더링합니다.
    <About />
  );
}

export default App;
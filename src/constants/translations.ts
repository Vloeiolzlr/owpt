// src/constants/translations.ts

export const translations = {
  ko: {
    // 공통
    discord: "디스코드",
    inquiry: "문의하기",
    currency: "₩",
    won: "원",
    perWin: "1승 기준입니다.",
    perGame: "1판 기준입니다.",
    
    // Intro
    selectLanguage: "언어를 선택하세요 / Select Language",

    // About (Main)
    heroTitle1: "항상 고객의 입장에서",
    heroTitle2: "생각합니다",
    heroDesc: "프라임팀은 단순히 돈만 받고 일하는 팀이 아닙니다.\n고객의 마음처럼 하나 하나 신중하게 작업합니다.",
    
    btnPricing: "티어제",
    btnClosePricing: "티어제 닫기",
    btnPlacement: "배치고사",
    btnClosePlacement: "배치고사 닫기",
    btnDuo: "듀오",
    btnCloseDuo: "듀오표 닫기",
    btnPlay: "승패무관",
    btnClosePlay: "승패무관 닫기",
    btnDriver: "강사 안내",
    btnCloseDriver: "안내 닫기",

    valueTitle: "고객과의 신뢰, 그리고 팀의 비전",
    val1Title: "핵심 가치",
    val1Desc: "저희가 가장 중요하게 생각하는 건 '책임감'입니다.",
    val2Title: "고객 맞춤",
    val2Desc: "작업 방송, 듀오, 강의 등등 원하시는 사항이 있으시면 언제든 말씀해주세요 \"최대한 고객님의 요청에 맞추겠습니다.\"",
    val3Title: "최저가",
    val3Desc: "팀 단위이긴 하나 프라임팀은, 업계 최저가입니다.",
    
    satTitle: "고객 만족도",
    satDesc: "평균 고객 만족도는 99%를 자랑합니다.",
    eventTitle: "다양한 이벤트",
    eventDesc: "프라임팀은 업계 최저가와 더불어 다양한 이벤트가 진행중입니다.",

    cleanTitle1: "고객님께 피해가 갈만한 작업은,",
    cleanTitle2: "일체 하지 않습니다.",
    cleanDesc: "불법 프로그램, 어뷰징, 불법 프로그램 듀오 일체 하지 않습니다.\n그것이 바로 저희가 지향하는 작업입니다.",

    // Tables
    priceTitle: "티어별 가격표",
    placementTitle: "배치고사 가격표",
    duoTitle: "기사듀오 가격표",
    playTitle: "승패무관 가격표",
    
    ctaCardTitle: "그 외 문의",
    ctaCardDescFreeStream: "작업 방송은 무료입니다!\n문의는 디스코드를 이용해주세요.",
    ctaCardDescDuo: "듀오 작업 특성 상 실력 파악이 분명하지 않아\n승패무관 상품으로 진행됩니다.",

    // Driver Guide
    driverTitle: "강사 안내",
    driverDesc: "최고의 실력을 가진 TEAM PRIME의 강사들을 소개합니다.",
    driverCardInfo: "기사 정보",
    driverCardVerified: "검증된 강사들로만 구성되어 있습니다.",
    labelTier: "Top Tier",
    labelPosition: "Position",
  },
  en: {
    // Common
    discord: "Discord",
    inquiry: "Inquiry",
    discordLink: "https://discord.gg/GBQzETVPan", // ▼ 영어 서버
    currency: "$",
    won: "",
    perDivision: "Per 1 Division",
    perGame: "Per 1 Game",
    perNetWin: "Per Net Win",

    // Intro
    selectLanguage: "Select Language",

    // About (Main)
    heroTitle1: "We always think from",
    heroTitle2: "the customer's perspective",
    heroDesc: "Prime Team doesn't just work for profit.\nWe treat every task with the same care as if it were our own.",

    btnPricing: "Rank Boost",
    btnClosePricing: "Close Rank Boost",
    btnPlacement: "Placements",
    btnClosePlacement: "Close Placements",
    btnDuo: "Duo Boost",
    btnCloseDuo: "Close Duo",
    btnPlay: "Net Win",      // ▼ 변경: Net Win
    btnClosePlay: "Close Net Win", // ▼ 변경
    btnDriver: "Boosters",
    btnCloseDriver: "Close Boosters",

    valueTitle: "Trust with Customers & Team Vision",
    val1Title: "Core Value",
    val1Desc: "The thing we value most is 'Responsibility'.",
    val2Title: "Customized",
    val2Desc: "Streaming, Duo, Coaching, etc. Tell us what you need. \"We will accommodate your requests as much as possible.\"",
    val3Title: "Lowest Price",
    val3Desc: "Although we are a team, Prime Team offers the lowest prices in the industry.",

    satTitle: "Satisfaction",
    satDesc: "We boast an average customer satisfaction rate of 99%.",
    eventTitle: "Various Events",
    eventDesc: "Along with the lowest prices, Prime Team runs various events.",

    cleanTitle1: "We do not engage in activities",
    cleanTitle2: "that harm our customers.",
    cleanDesc: "No illegal programs, abusing, or cheating duos.\nThat is exactly the standard we aim for.",

    // Tables
    priceTitle: "Rank Boosting Prices",
    placementTitle: "Placement Prices",
    duoTitle: "Duo Boosting Prices",
    playTitle: "Net Win Prices", // ▼ 변경: Net Win Prices

    ctaCardTitle: "Other Inquiries",
    ctaCardDescFreeStream: "Streaming is free!\nPlease contact us on Discord.",
    ctaCardDescDuo: "Due to the nature of Duo, skill variance exists,\nso it proceeds as a 'Per Game' product.",

    // Driver Guide
    driverTitle: "Coach Introduction",
    driverDesc: "Introducing the top-tier coaches of TEAM PRIME.",
    driverCardInfo: "Coach Info",
    driverCardVerified: "Composed only of verified coaches.",
    labelTier: "Top Tier",
    labelPosition: "Position",
  }
};

export type Language = 'ko' | 'en';
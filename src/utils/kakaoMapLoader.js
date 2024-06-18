// src/utils/kakaoMapLoader.js

const loadKakaoMapScript = (callback) => {
    if (window.kakao && window.kakao.maps) {
      callback();
      return;
    }
  
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=cb8906a483c5671f6f94b58a926ef09c&autoload=false`;
    document.head.appendChild(script);
  
    script.onload = () => {
      window.kakao.maps.load(callback);
    };
  };
  
  export default loadKakaoMapScript;
   
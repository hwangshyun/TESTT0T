// src/pages/PosterManager.js

import React, { useEffect } from 'react';
import loadKakaoMapScript from '../utils/kakaoMapLoader';

const PosterManager = () => {
  useEffect(() => {
    loadKakaoMapScript(() => {
      const container = document.getElementById('map');
      if (container && window.kakao && window.kakao.maps) {
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      }
    });
  }, []);

  return <div id="map" style={{ width: '500px', height: '400px' }}></div>;
};

export default PosterManager;

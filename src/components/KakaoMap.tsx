"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  center?: { lat: number; lng: number };
  level?: number;
  classname?: string;
  markers?: { lat: number; lng: number }[];
  onMapLoad?: (map: any) => void;
}

const KakaoMap = ({
  center = { lat: 37.5665, lng: 126.978 },
  level = 3,
  classname,
  markers = [],
  onMapLoad,
}: KakaoMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initMap = () => {
      if (!window.kakao || !window.kakao.maps || !mapContainer.current) {
        console.warn("🚨 카카오맵이 아직 로드되지 않았거나, 컨테이너 없음.");
        return;
      }

      if (isInitialized) return; // 이미 초기화되었다면 실행하지 않음

      const map = new window.kakao.maps.Map(mapContainer.current, {
        center: new window.kakao.maps.LatLng(center.lat, center.lng),
        level: level,
      });

      console.log("🗺️ 맵 초기화 완료", map);

      markers.forEach((marker) => {
        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(marker.lat, marker.lng),
          map,
        });
      });

      if (onMapLoad) {
        onMapLoad(map);
      }

      setIsInitialized(true);
    };

    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(initMap);
    } else {
      console.warn("🚨 카카오맵이 아직 로드되지 않음.");
    }
  }, [center, level, markers, isInitialized]);

  return <div ref={mapContainer} className={clsx("w-full h-[600px]", classname)} />;
};

export default KakaoMap;

"use client";

import { useState } from "react";
import { useTexture, Billboard, Plane } from "@react-three/drei";
import * as THREE from "three";

export default function Intro3DAvatar({ onExplode }: { onExplode: () => void }) {
  const [avatarState, setAvatarState] = useState<'idle' | 'hover' | 'active'>('idle');

  // تحميل الصور مباشرة
  const idleTex = useTexture('https://raw.githubusercontent.com/mizoamin/mizo-assets-media-1/main/brand_assets/professional-headshots-and-profile-pics/mizo-state1-off.png');
  const hoverTex = useTexture('https://raw.githubusercontent.com/mizoamin/mizo-assets-media-1/main/brand_assets/professional-headshots-and-profile-pics/mizo-state2-ready.png');
  const activeTex = useTexture('https://raw.githubusercontent.com/mizoamin/mizo-assets-media-1/main/brand_assets/professional-headshots-and-profile-pics/mizo-state3-active.png');

  // تحسين جودة الصورة داخل الـ 3D
  [idleTex, hoverTex, activeTex].forEach(tex => {
    tex.colorSpace = THREE.SRGBColorSpace;
  });

  const currentTexture = 
    avatarState === 'active' ? activeTex : 
    avatarState === 'hover' ? hoverTex : 
    idleTex;

  return (
    // نضعك أمام الكاميرا مباشرة (الكاميرا في صفحة page.tsx تقف عند Z=500)
    // لذا سنضعك عند Z=460 لتكون قريباً جداً، وY=12 لرفعك قليلاً
    <group position={[0, 12, 460]}>
      <Billboard follow={true}>
        <Plane 
          args={[22, 28]} // أبعاد صورتك (حجم عملاق يملأ الشاشة تقريباً)
          onPointerOver={() => {
            document.body.style.cursor = 'pointer';
            if (avatarState !== 'active') setAvatarState('hover');
          }}
          onPointerOut={() => {
            document.body.style.cursor = 'auto';
            if (avatarState !== 'active') setAvatarState('idle');
          }}
          onClick={(e) => {
            e.stopPropagation(); // منع انتقال الضغطة للفضاء الخلفي
            if (avatarState === 'active') return;
            setAvatarState('active');
            
            // انتظر ثانية واحدة ليرى المستخدم الوهج، ثم أرسل إشارة الانفجار!
            setTimeout(() => {
              onExplode();
            }, 1000);
          }}
        >
          <meshBasicMaterial 
            map={currentTexture} 
            transparent={true} 
            depthWrite={false} // 👈 هذا السطر هو ما يجعل النجوم تظهر خلفك بنقاء تام
            toneMapped={false} // الحفاظ على ألوان صورتك الحقيقية
          />
        </Plane>
      </Billboard>
    </group>
  );
}
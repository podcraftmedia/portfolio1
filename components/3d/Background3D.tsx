"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

export default function Background3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduce particle count on mobile for better performance
  const starCount = isMobile ? 1000 : 5000;

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars
            radius={100}
            depth={50}
            count={starCount}
            factor={4}
            saturation={0}
            fade
            speed={isMobile ? 0.5 : 1}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={isMobile ? 0.3 : 0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

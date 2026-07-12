import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import { useLocation } from 'react-router-dom';
import BottleModel from './BottleModel';
import Particles from './Particles';

export default function Scene() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="w-full h-full"
    >
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#F4D03F" />
      <directionalLight position={[-5, 5, -5]} intensity={1} color="#D4AF37" />
      <spotLight 
        position={[0, 10, 0]} 
        angle={0.5} 
        penumbra={1} 
        intensity={2} 
        color="#ffffff" 
        castShadow 
      />

      <Suspense fallback={null}>
        <Environment preset="studio" />
        
        {/* Main Product (Only on Home Page) */}
        {isHomePage && <BottleModel />}

        {/* Ambient Particles */}
        <Particles count={200} />
        
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

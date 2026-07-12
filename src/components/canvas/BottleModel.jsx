import React, { useRef, useLayoutEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BottleModel(props) {
  const group = useRef();

  // Load the product image texture
  const texture = useLoader(TextureLoader, '/hero1.png');

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create a timeline that is scrubbed by the scrollbar
      // The timeline is kept empty to remove the scroll animations for the bottle
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });
      // Animations removed as requested
    });

    return () => ctx.revert();
  }, []);

  // Removed idle floating animation as requested
  useFrame(() => {
    // No idle animation
  });

  return (
    <group ref={group} {...props} position={[3, 0, 0]} rotation={[0, 0, 0]} scale={[1.2, 1.2, 1.2]}>
      <mesh>
        {/* Aspect ratio 1:1 since the generated image is square */}
        <planeGeometry args={[5.5, 5.5]} />
        <meshBasicMaterial
          map={texture}
          transparent={true}
        />
      </mesh>
    </group>
  );
}

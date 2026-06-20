import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';

function InviteCard() {
  const cardRef = useRef();
  const lineRefs = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (cardRef.current) {
      cardRef.current.rotation.y = Math.sin(t * 0.25) * 0.35 + 0.15;
      cardRef.current.rotation.x = Math.sin(t * 0.18) * 0.08;
    }
  });

  const goldMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({
      color: '#C9A84C',
      metalness: 0.7,
      roughness: 0.3,
    }),
    []
  );

  return (
    <group ref={cardRef}>
      {/* Corpo do cartão */}
      <RoundedBox args={[2.4, 3.3, 0.06]} radius={0.04} smoothness={4}>
        <meshStandardMaterial color="#FAF7F0" metalness={0.05} roughness={0.6} />
      </RoundedBox>

      {/* Borda dourada fina, ligeiramente atrás */}
      <RoundedBox args={[2.5, 3.4, 0.03]} radius={0.045} smoothness={4} position={[0, 0, -0.03]}>
        <primitive object={goldMaterial} attach="material" />
      </RoundedBox>

      {/* Linhas de "texto" sugeridas, douradas */}
      {[0.9, 0.55, -0.3, -0.6].map((y, i) => (
        <mesh key={i} position={[0, y, 0.035]} ref={(el) => (lineRefs.current[i] = el)}>
          <planeGeometry args={[i === 0 ? 1.3 : 0.9, 0.05]} />
          <meshStandardMaterial color="#C9A84C" metalness={0.4} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

export default function InviteCardScene({ reducedMotion }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#FFF3D6" />
      <pointLight position={[-3, -2, 2]} intensity={0.4} color="#C9A84C" />

      {reducedMotion ? (
        <InviteCard />
      ) : (
        <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.6}>
          <InviteCard />
        </Float>
      )}

      {!reducedMotion && (
        <Sparkles count={40} scale={[5, 6, 3]} size={2.5} speed={0.3} color="#C9A84C" opacity={0.6} />
      )}
    </Canvas>
  );
}

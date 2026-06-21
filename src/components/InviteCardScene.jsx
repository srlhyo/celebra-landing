import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';

// Desenha a face do convite num canvas 2D e devolve-o como textura —
// dá controlo total sobre tipografia/composição, sem precisar de fontes 3D.
function useInviteFaceTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 704;
    const ctx = canvas.getContext('2d');

    // Fundo marfim
    ctx.fillStyle = '#FAF7F0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Margem decorativa fina
    ctx.strokeStyle = '#C9A84C';
    ctx.lineWidth = 2;
    ctx.strokeRect(28, 28, canvas.width - 56, canvas.height - 56);

    const cx = canvas.width / 2;

    // Monograma circular simples
    ctx.beginPath();
    ctx.arc(cx, 150, 46, 0, Math.PI * 2);
    ctx.strokeStyle = '#C9A84C';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#C9A84C';
    ctx.font = '400 38px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('C', cx, 154);

    // Linha decorativa
    ctx.beginPath();
    ctx.moveTo(cx - 60, 222);
    ctx.lineTo(cx + 60, 222);
    ctx.strokeStyle = '#C9A84C';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Nome da marca
    ctx.fillStyle = '#2A2118';
    ctx.font = '500 46px Georgia, serif';
    ctx.fillText('Celebra', cx, 290);

    // Subtítulo eyebrow
    ctx.fillStyle = '#8B6F3A';
    ctx.font = '400 15px Courier New, monospace';
    ctx.fillText('C O N V I T E   D I G I T A L', cx, 335);

    // Linhas finas a sugerir texto de corpo
    ctx.fillStyle = '#C9A84C';
    const lines = [
      { y: 430, w: 220 },
      { y: 462, w: 170 },
      { y: 530, w: 190 },
      { y: 562, w: 140 },
    ];
    lines.forEach(({ y, w }) => {
      ctx.fillRect(cx - w / 2, y, w, 3);
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    return texture;
  }, []);
}

function InviteCard() {
  const cardRef = useRef();
  const faceTexture = useInviteFaceTexture();

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
      metalness: 0.75,
      roughness: 0.28,
    }),
    []
  );

  return (
    <group ref={cardRef}>
      {/* Borda dourada fina, ligeiramente atrás */}
      <RoundedBox args={[2.52, 3.42, 0.03]} radius={0.045} smoothness={4} position={[0, 0, -0.035]}>
        <primitive object={goldMaterial} attach="material" />
      </RoundedBox>

      {/* Corpo do cartão — base marfim simples */}
      <RoundedBox args={[2.4, 3.3, 0.06]} radius={0.04} smoothness={4}>
        <meshStandardMaterial color="#EDE6D6" metalness={0.05} roughness={0.6} />
      </RoundedBox>

      {/* Face frontal com a textura desenhada (canvas 2D), sobreposta ao corpo */}
      <mesh position={[0, 0, 0.0305]}>
        <planeGeometry args={[2.32, 3.22]} />
        <meshStandardMaterial map={faceTexture} roughness={0.65} metalness={0.04} />
      </mesh>
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
        <>
          {/* Camada ampla e ténue — ambiente */}
          <Sparkles count={35} scale={[5.5, 6.5, 3]} size={1.8} speed={0.25} color="#C9A84C" opacity={0.35} />
          {/* Camada concentrada junto ao cartão — "confetti" a assentar */}
          <Sparkles count={25} scale={[2.8, 3.6, 1.5]} size={3} speed={0.4} color="#E8C97A" opacity={0.7} />
        </>
      )}
    </Canvas>
  );
}

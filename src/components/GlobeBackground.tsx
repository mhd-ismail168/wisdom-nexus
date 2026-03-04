"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Create wireframe geometry
  const wireGeometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2, 3);
    const edges = new THREE.EdgesGeometry(geo);
    return edges;
  }, []);

  // Create scattered points on sphere surface
  const pointsGeometry = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.05;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.08;
      meshRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.08;
      wireRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.08;
      pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = t * 0.04;
    }
  });

  return (
    <group>
      {/* Inner sphere - very subtle fill */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.98, 4]} />
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Wireframe lines */}
      <lineSegments ref={wireRef} geometry={wireGeometry}>
        <lineBasicMaterial
          color="#B89C4A"
          transparent
          opacity={0.15}
        />
      </lineSegments>

      {/* Surface points */}
      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial
          color="#B89C4A"
          size={0.015}
          transparent
          opacity={0.5}
          sizeAttenuation
        />
      </points>

      {/* Outer glow shell */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.4, 32, 32]} />
        <meshBasicMaterial
          color="#B89C4A"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Second glow layer */}
      <mesh>
        <sphereGeometry args={[2.8, 32, 32]} />
        <meshBasicMaterial
          color="#B89C4A"
          transparent
          opacity={0.015}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

export default function GlobeBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <GlobeMesh />
      </Canvas>
    </div>
  );
}

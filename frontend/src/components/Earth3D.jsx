import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, Ring, Torus } from '@react-three/drei';
import * as THREE from 'three';

const Earth3D = () => {
  const outerRef = useRef();
  const innerRef = useRef();
  const ringRef = useRef();
  const ring2Ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.12;
      outerRef.current.rotation.x = Math.sin(t * 0.08) * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.08;
      innerRef.current.rotation.z = t * 0.05;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.15;
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 8, 5]} intensity={2.5} color="#00e5ff" />
      <directionalLight position={[-8, -5, -5]} intensity={0.8} color="#0044ff" />
      <pointLight position={[0, 0, 8]} intensity={1.5} color="#00ffff" distance={20} />

      {/* Star field */}
      <Stars radius={150} depth={60} count={4000} factor={5} saturation={0.3} fade speed={1.5} />

      {/* Outer wireframe globe */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere args={[2.5, 48, 48]} ref={outerRef}>
          <meshStandardMaterial
            color="#001a2e"
            wireframe={true}
            emissive="#00e5ff"
            emissiveIntensity={0.15}
            transparent
            opacity={0.5}
          />
        </Sphere>
      </Float>

      {/* Inner solid sphere */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        <Sphere args={[2.0, 64, 64]} ref={innerRef}>
          <MeshDistortMaterial
            color="#041830"
            attach="material"
            distort={0.25}
            speed={1.5}
            roughness={0.1}
            metalness={0.95}
            emissive="#0066cc"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>

      {/* Glowing core */}
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#00e5ff"
          transparent
          opacity={0.06}
          emissive="#00e5ff"
          emissiveIntensity={1}
        />
      </Sphere>

      {/* Orbiting ring 1 */}
      <Torus ref={ringRef} args={[3.2, 0.015, 16, 100]} rotation={[Math.PI * 0.3, 0, 0]}>
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={2}
          transparent
          opacity={0.6}
        />
      </Torus>

      {/* Orbiting ring 2 */}
      <Torus ref={ring2Ref} args={[3.8, 0.01, 16, 100]} rotation={[Math.PI * 0.6, Math.PI * 0.15, 0]}>
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={1.5}
          transparent
          opacity={0.4}
        />
      </Torus>

      {/* Floating dots (location markers) */}
      {[
        [2.4, 0, 0],
        [-1.2, 2.1, 0],
        [0, -2.4, 0.5],
        [1.5, -1.5, 1.5],
        [-2, 0.5, 1.5],
      ].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={3}
          />
        </mesh>
      ))}
    </>
  );
};

export default Earth3D;

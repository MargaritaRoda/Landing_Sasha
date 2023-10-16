import React from 'react';
import styles from './Loader.module.scss';
import { Canvas } from '@react-three/fiber';

export const Loader = () => {
  return (
    <div className="App">
      <Canvas>
        <perspectiveCamera
          fov={45}
          position={500}
          aspect={1}
          near={0.1}
          far={1000}
        >
          <mesh position={[0, 0, -2]}>
            <torusGeometry args={[70, 20, 60, 160]} />
            <meshPhongMaterial
              color={0xe4ecfa}
              shininess={20}
              opacity={0.96}
              transparent={true}
            />
          </mesh>
        </perspectiveCamera>
      </Canvas>
    </div>
  );
};

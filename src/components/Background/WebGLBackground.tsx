'use client';

import { Canvas } from '@react-three/fiber';
import { Particles } from './Particles';
import styled from 'styled-components';
import { usePageColor } from '@/hooks/usePageColor';

const CanvasWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  background: linear-gradient(to bottom right, #f8f9fa, #e9ecef);
`;

export const WebGLBackground = () => {
  const color = usePageColor();

  return (
    <CanvasWrapper>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]} // Handle high DPI screens
        gl={{ antialias: true, alpha: true }}
      >
        <Particles count={200} color={color} />
      </Canvas>
    </CanvasWrapper>
  );
};

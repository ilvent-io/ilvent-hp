'use client';

import dynamic from 'next/dynamic';

const WebGLBackground = dynamic(
  () => import('./WebGLBackground').then((mod) => mod.WebGLBackground),
  { ssr: false }
);

export const DynamicBackground = () => {
  return <WebGLBackground />;
};

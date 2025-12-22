'use client';

import { Hero, WhyUs, Services, TechStack, Cta } from '@/features/home/components';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <WhyUs />
      <Services />
      <Cta />
    </>
  );
}

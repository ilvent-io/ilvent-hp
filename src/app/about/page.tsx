'use client';

import { Mission, CeoMessage, CompanyInfo } from '@/features/about/components';
import { PageHeader } from '@/components/Layout';

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <Mission />
      <CeoMessage />
      <CompanyInfo />
    </>
  );
}

'use client';

import { ServiceDetail, Process } from '@/features/services/components';
import { PageHeader } from '@/components/Layout';

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" />
      <ServiceDetail />
      <Process />
    </>
  );
}

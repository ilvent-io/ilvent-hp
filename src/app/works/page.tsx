'use client';

import { WorkList } from '@/features/works/components';
import { PageHeader } from '@/components/Layout';

export default function WorksPage() {
  return (
    <>
      <PageHeader title="Works" />
      <WorkList />
    </>
  );
}

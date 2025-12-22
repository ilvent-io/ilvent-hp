'use client';

import { TechList } from '@/features/tech/components';
import { PageHeader } from '@/components/Layout';

export default function TechPage() {
  return (
    <>
      <PageHeader 
        title="Tech Blog" 
        subtitle={
          <>
            技術的な知見や、開発の裏側を発信しています。<br />
            (Zenn / Qiita / Note)
          </>
        }
      />
      <TechList />
    </>
  );
}

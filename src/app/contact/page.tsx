'use client';

import { ContactForm } from '@/features/contact/components';
import { PageHeader } from '@/components/Layout';

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact" 
        subtitle={
          <>
            開発のご相談、技術的なお悩み、採用についてなど、<br />
            お気軽にお問い合わせください。
          </>
        }
      />
      <ContactForm />
    </>
  );
}

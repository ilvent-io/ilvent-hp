'use client';

import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
  padding: 100px ${({ theme }) => theme.spacing.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
`;

const Button = styled(Link)`
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  padding: 16px 40px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.2rem;
  transition: transform 0.2s;
  display: inline-block;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Cta = () => {
  return (
    <Section>
      <Title>Ready to start?</Title>
      <Text>
        まずはカジュアルにお話ししましょう。<br />
        技術的な悩み、開発の相談、お気軽にご連絡ください。
      </Text>
      <Button href="/contact">お問い合わせはこちら</Button>
    </Section>
  );
};

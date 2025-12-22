'use client';

import styled from 'styled-components';
import { Section, Container } from '@/components/Layout';

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 80px;
`;

const ProcessList = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.border};
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 40px;

    &::before {
      content: none;
    }
  }
`;

const ProcessItem = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0 auto 24px;
  border: 4px solid #F4F5F7;
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.secondary};
`;

const StepDesc = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`;

const steps = [
  {
    title: 'Hearing',
    desc: '現状の課題や実現したいゴールをヒアリングします。仕様が決まっていなくても構いません。',
  },
  {
    title: 'Proposal',
    desc: '技術的な視点から、最適な解決策とスケジュール、お見積りを提案します。',
  },
  {
    title: 'Development',
    desc: 'アジャイルな手法で開発を進めます。定期的に進捗を共有し、フィードバックを反映します。',
  },
  {
    title: 'Release & Support',
    desc: 'テストを経てリリースします。その後の保守運用や機能追加もサポートします。',
  },
];

export const Process = () => {
  return (
    <Section $bgColor="rgba(244, 245, 247, 0.5)">
      <Container $wide>
        <SectionTitle>Development Process</SectionTitle>
        <ProcessList>
          {steps.map((step, index) => (
            <ProcessItem key={index}>
              <StepNumber>{index + 1}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDesc>{step.desc}</StepDesc>
            </ProcessItem>
          ))}
        </ProcessList>
      </Container>
    </Section>
  );
};

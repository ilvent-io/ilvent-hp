'use client';

import styled from 'styled-components';
import { usePageColor } from '@/hooks/usePageColor';

const HeaderWrapper = styled.div<{ $bgColor: string }>`
  height: 300px;
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
  transition: background-color 0.3s ease;
`;

const Title = styled.h1<{ $hasSubtitle?: boolean }>`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: ${({ theme, $hasSubtitle }) => $hasSubtitle ? theme.spacing.md : '0'};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 600px;
  line-height: 1.6;
`;

type PageHeaderProps = {
  title: string;
  subtitle?: React.ReactNode;
};

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  const pageColor = usePageColor();

  return (
    <HeaderWrapper $bgColor={pageColor}>
      <Title $hasSubtitle={!!subtitle}>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </HeaderWrapper>
  );
};

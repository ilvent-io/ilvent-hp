'use client';

import styled from 'styled-components';

export const Section = styled.section<{ $bgColor?: string; $transparent?: boolean }>`
  padding: 100px ${({ theme }) => theme.spacing.md};
  background-color: ${({ $bgColor, $transparent, theme }) => 
    $transparent ? 'transparent' : ($bgColor || theme.colors.background)};
`;

export const Container = styled.div<{ $wide?: boolean }>`
  max-width: ${({ theme, $wide }) => $wide ? theme.breakpoints.wide : '800px'};
  margin: 0 auto;
  width: 100%;
`;

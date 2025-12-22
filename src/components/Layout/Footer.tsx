'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { usePageColor } from '@/hooks/usePageColor';

const FooterContainer = styled.footer<{ $pageColor?: string }>`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  border-top: 4px solid ${({ $pageColor, theme }) => $pageColor || theme.colors.primary};
`;

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.muted};
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: 1.2rem;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
`;

export const Footer = () => {
  const pageColor = usePageColor();
  
  return (
    <FooterContainer $pageColor={pageColor}>
      <FooterContent>
        <Column>
          <FooterLogo>Ilvent</FooterLogo>
          <p style={{ color: '#6B778C' }}>
            技術パートナーとしての頼れる小回り。<br />
            あなたのビジネスを技術で加速させます。
          </p>
        </Column>

        <Column>
          <h4>Company</h4>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/services">Services</FooterLink>
          <FooterLink href="/works">Works</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </Column>

        <Column>
          <h4>Connect</h4>
          <SocialLinks>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter />
            </a>
          </SocialLinks>
        </Column>
      </FooterContent>
      <Copyright>
        &copy; 2025 Ilvent. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

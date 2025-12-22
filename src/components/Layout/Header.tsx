'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePageColor } from '@/hooks/usePageColor';

const HeaderContainer = styled(motion.header)<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${({ $isScrolled }) => 
    $isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $isScrolled }) => ($isScrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${({ $isScrolled }) => 
    $isScrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
    height: 60px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
`;

const Logo = styled(Link)<{ $pageColor?: string; $isScrolled: boolean; $isTopPage: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ $isScrolled, $pageColor }) => $isScrolled && $pageColor ? $pageColor : 'inherit'};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  text-decoration: none;
  transition: color 0.3s ease;

  ${({ $isScrolled, $isTopPage }) => !$isScrolled && !$isTopPage && `
    mix-blend-mode: difference;
    color: white;
  `}
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const DesktopLinksWrapper = styled.div<{ $isScrolled: boolean; $isTopPage: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ $isScrolled, $isTopPage }) => !$isScrolled && !$isTopPage && `
    mix-blend-mode: difference;
    color: white;
  `}
`;

const NavLink = styled(Link)`
  font-weight: 500;
  color: inherit; /* Inherit color from container */
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: currentColor; /* Use current text color */
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ContactButton = styled(Link)<{ $pageColor?: string; $isScrolled: boolean }>`
  background-color: ${({ theme, $pageColor }) => $pageColor || theme.colors.primary};
  border: solid 1px ${({ theme, $pageColor }) => $pageColor || theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  ${({ theme, $pageColor, $isScrolled }) => !$isScrolled && `
    background-color: ${theme.colors.background};
    color: ${$pageColor || theme.colors.primary};
  `}
`;

const MobileMenuButton = styled.button<{ $isScrolled?: boolean; $isTopPage: boolean }>`
  display: none;
  font-size: 1.5rem;
  color: inherit;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }

  ${({ $isScrolled, $isTopPage }) => $isScrolled === false && !$isTopPage && `
    mix-blend-mode: difference;
    color: white;
  `}
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const MENU_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Works', href: '/works' },
  { label: 'Tech', href: '/tech' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pageColor = usePageColor();
  const pathname = usePathname();
  const isTopPage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Nav>
        <Logo href="/" $isScrolled={isScrolled} $pageColor={pageColor} $isTopPage={isTopPage}>Ilvent</Logo>

        <DesktopMenu>
          <DesktopLinksWrapper $isScrolled={isScrolled} $isTopPage={isTopPage}>
            {MENU_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </DesktopLinksWrapper>
          <ContactButton href="/contact" $isScrolled={isScrolled} $pageColor={pageColor}>Contact</ContactButton>
        </DesktopMenu>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} $isScrolled={isScrolled} $isTopPage={isTopPage}>
          <FiMenu />
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <MobileMenuButton 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px' }}
              $isTopPage={isTopPage}
            >
              <FiX />
            </MobileMenuButton>
            {MENU_ITEMS.map((item) => (
              <NavLink 
                key={item.href} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ fontSize: '1.5rem' }}
              >
                {item.label}
              </NavLink>
            ))}
            <ContactButton 
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              $isScrolled={isScrolled}
              $pageColor={pageColor}
            >
              Contact Us
            </ContactButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

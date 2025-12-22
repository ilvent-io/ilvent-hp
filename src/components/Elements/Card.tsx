'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardBase = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Card = motion(CardBase);

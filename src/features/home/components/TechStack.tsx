'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 80px ${({ theme }) => theme.spacing.md};
  background-color: transparent;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 40px;
`;

const TechGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  opacity: 0.7;
`;

const TechItem = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.muted};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const techs = [
  'React', 'Next.js', 'Vue.js', 'Nuxt.js', 'TypeScript', 'Node.js', 
  'AWS', 'Docker', 'GraphQL', 'CI/CD'
];

export const TechStack = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Tech Stack</SectionTitle>
        <TechGrid>
          {techs.map((tech, index) => (
            <TechItem
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tech}
            </TechItem>
          ))}
        </TechGrid>
      </Container>
    </Section>
  );
};

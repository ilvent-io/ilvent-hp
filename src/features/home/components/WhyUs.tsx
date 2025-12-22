'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiZap, FiCode, FiUsers } from 'react-icons/fi';

const Section = styled.section`
  padding: 100px ${({ theme }) => theme.spacing.md};
  background-color: rgba(255, 255, 255, 0.5);
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const Card = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => `${theme.colors.primary}15`}; // 15 is opacity hex
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin: 0 auto 24px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`;

const features = [
  {
    icon: <FiCode />,
    title: 'Deep Expertise',
    text: 'React/Next.jsを中心としたモダンな技術スタックに精通。表面的な実装だけでなく、パフォーマンスや保守性を考慮した設計を提供します。',
  },
  {
    icon: <FiZap />,
    title: 'Agility',
    text: '大手SIerにはない小回りの良さが武器です。意思決定の速さと柔軟な対応で、ビジネスのスピードを止めません。',
  },
  {
    icon: <FiUsers />,
    title: 'Partnership',
    text: '「発注者と受注者」ではなく「同じゴールを目指すチーム」として伴走します。仕様が決まっていなくても、一緒に考えます。',
  },
];

export const WhyUs = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Why Ilvent?</SectionTitle>
        <Grid>
          {features.map((feature, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <IconWrapper>{feature.icon}</IconWrapper>
              <CardTitle>{feature.title}</CardTitle>
              <CardText>{feature.text}</CardText>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

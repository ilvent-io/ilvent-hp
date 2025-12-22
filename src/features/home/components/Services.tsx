'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 100px ${({ theme }) => theme.spacing.md};
  background-color: rgba(244, 245, 247, 0.5);
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

const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ServiceItem = styled(motion.div)`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ServiceContent = styled.div`
  flex: 1;
  padding: 40px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TagList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: #F4F5F7;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const ServiceImage = styled.div<{ $color: string }>`
  flex: 1;
  height: 300px;
  background-color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

const services = [
  {
    title: 'Web Application Development',
    description: 'React / Next.js を用いた高パフォーマンスなWebアプリケーションを開発します。要件定義から設計、実装、テスト、デプロイまで一貫して対応可能です。',
    tags: ['Next.js', 'TypeScript', 'AWS', 'Vercel'],
    color: '#0052CC',
    initial: 'W',
  },
  {
    title: 'Technical Consulting',
    description: '既存システムのコードレビューやリファクタリング、パフォーマンス改善、技術選定のサポートを行います。チームの技術力向上も支援します。',
    tags: ['Code Review', 'Architecture', 'Performance'],
    color: '#00B8D9',
    initial: 'C',
  },
];

export const Services = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Services</SectionTitle>
        <ServiceList>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <TagList>
                  {service.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </TagList>
              </ServiceContent>
              <ServiceImage $color={service.color}>
                {service.initial}
              </ServiceImage>
            </ServiceItem>
          ))}
        </ServiceList>
      </Container>
    </Section>
  );
};

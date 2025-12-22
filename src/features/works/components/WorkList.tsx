'use client';

import styled from 'styled-components';
import { Section, Container } from '@/components/Layout';
import { Card } from '@/components/Elements';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
`;

const StyledCard = styled(Card)`
  border-radius: 16px;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImagePlaceholder = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.muted};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const Content = styled.div`
  padding: 24px;
`;

const Category = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: ${({ theme }) => theme.spacing.sm} 0;
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: #F4F5F7;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

const works = [
  {
    category: 'Web Application',
    title: 'SaaS Dashboard Renewal',
    description: '既存の管理画面をNext.jsでリプレイス。パフォーマンスを改善し、UXを大幅に向上させました。',
    techs: ['Next.js', 'TypeScript', 'GraphQL', 'AWS'],
  },
  {
    category: 'Mobile App',
    title: 'Matching Platform App',
    description: 'React Nativeを用いたクロスプラットフォーム開発。リアルタイムチャット機能を実装。',
    techs: ['React Native', 'Firebase', 'Node.js'],
  },
  {
    category: 'Corporate Site',
    title: 'Tech Startup Corporate Site',
    description: 'ヘッドレスCMSを導入し、マーケティング担当者が更新しやすいサイトを構築。',
    techs: ['Gatsby', 'MicroCMS', 'Netlify'],
  },
];

export const WorkList = () => {
  return (
    <Section $transparent>
      <Container $wide>
        <Grid>
          {works.map((work, index) => (
            <StyledCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ImagePlaceholder>Work Image</ImagePlaceholder>
              <Content>
                <Category>{work.category}</Category>
                <Title>{work.title}</Title>
                <Description>{work.description}</Description>
                <TechTags>
                  {work.techs.map(tech => <Tag key={tech}>{tech}</Tag>)}
                </TechTags>
              </Content>
            </StyledCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

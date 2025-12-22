'use client';

import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';
import { Section, Container } from '@/components/Layout';
import { Card } from '@/components/Elements';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledCard = styled(Card)`
  padding: 32px;
  display: block;
  text-decoration: none;
  color: inherit;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const Platform = styled.span<{ $type: 'zenn' | 'qiita' | 'note' }>`
  font-weight: 700;
  color: ${({ $type }) => {
    switch ($type) {
      case 'zenn': return '#3EA8FF';
      case 'qiita': return '#55C500';
      case 'note': return '#41C9B4';
      default: return '#666';
    }
  }};
`;

const DateText = styled.span``;

const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
`;

const Excerpt = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Icon = styled(FiExternalLink)`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.muted};
`;

// Mock Data
const articles = [
  {
    id: 1,
    title: 'Next.js App Router で styled-components を快適に使うための設定',
    excerpt: 'Next.js 13以降のApp Router環境下で、CSS-in-JSライブラリであるstyled-componentsを導入し、FOUCを防ぐためのRegistry設定について解説します。',
    platform: 'zenn',
    date: '2024.04.15',
    url: '#',
  },
  {
    id: 2,
    title: '小規模チームにおけるアジャイル開発の実際と課題',
    excerpt: '理論通りにはいかない現場でのアジャイル開発。スクラムイベントの形骸化を防ぎ、本当に価値のあるプロセスを維持するための工夫を紹介します。',
    platform: 'note',
    date: '2024.04.01',
    url: '#',
  },
  {
    id: 3,
    title: 'React Performance Tuning: useMemoとuseCallbackの正しい使いどころ',
    excerpt: 'なんとなく使っていませんか？メモ化のコストとメリットを正しく理解し、本当に必要な場面でのみ使用するための判断基準について。',
    platform: 'qiita',
    date: '2024.03.20',
    url: '#',
  },
] as const;

export const TechList = () => {
  return (
    <Section $transparent>
      <Container>
        <List>
          {articles.map((article, index) => (
            <StyledCard
              key={article.id}
              as="a"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Meta>
                <Platform $type={article.platform}>{article.platform.toUpperCase()}</Platform>
                <DateText>{article.date}</DateText>
                <Icon />
              </Meta>
              <Title>{article.title}</Title>
              <Excerpt>{article.excerpt}</Excerpt>
            </StyledCard>
          ))}
        </List>
      </Container>
    </Section>
  );
};

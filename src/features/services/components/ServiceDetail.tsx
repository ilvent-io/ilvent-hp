'use client';

import styled from 'styled-components';
import { FiMonitor, FiCpu, FiTrendingUp } from 'react-icons/fi';
import { Section, Container } from '@/components/Layout';

const ServiceRow = styled.div<{ $reverse?: boolean }>`
  display: flex;
  align-items: center;
  gap: 80px;
  margin-bottom: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 80px;
  }

  ${({ $reverse }) => $reverse && `
    flex-direction: row-reverse;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `}
`;

const Content = styled.div`
  flex: 1;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => `${theme.colors.primary}15`};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.muted};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
`;

const ImagePlaceholder = styled.div`
  flex: 1;
  height: 400px;
  background-color: #F4F5F7;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 700;
  font-size: 1.5rem;
`;

export const ServiceDetail = () => {
  return (
    <Section $transparent>
      <Container $wide>
        <ServiceRow>
          <Content>
            <IconWrapper><FiMonitor /></IconWrapper>
            <Title>Web Application Development</Title>
            <Description>
              React / Next.js を中心としたモダンな技術スタックで、
              拡張性と保守性の高いWebアプリケーションを開発します。
              SPA/SSR/SSGなど、要件に最適なアーキテクチャを選定します。
            </Description>
            <FeatureList>
              <FeatureItem>管理画面 / ダッシュボード開発</FeatureItem>
              <FeatureItem>SaaSプロダクト開発支援</FeatureItem>
              <FeatureItem>ECサイト / マッチングプラットフォーム構築</FeatureItem>
            </FeatureList>
          </Content>
          <ImagePlaceholder>Web App Image</ImagePlaceholder>
        </ServiceRow>

        <ServiceRow $reverse>
          <Content>
            <IconWrapper><FiCpu /></IconWrapper>
            <Title>Technical Consulting</Title>
            <Description>
              「コードが複雑で改修できない」「パフォーマンスが遅い」といった技術的な課題を解決します。
              コードレビューやリファクタリングを通じて、開発チームの生産性向上に貢献します。
            </Description>
            <FeatureList>
              <FeatureItem>レガシーシステムのリプレイス支援</FeatureItem>
              <FeatureItem>フロントエンドパフォーマンス改善</FeatureItem>
              <FeatureItem>技術選定 / アーキテクチャ設計アドバイス</FeatureItem>
            </FeatureList>
          </Content>
          <ImagePlaceholder>Consulting Image</ImagePlaceholder>
        </ServiceRow>

        <ServiceRow>
          <Content>
            <IconWrapper><FiTrendingUp /></IconWrapper>
            <Title>DX Support</Title>
            <Description>
              アナログな業務フローをデジタル化し、業務効率を劇的に改善します。
              ツールの導入だけでなく、業務プロセスの見直しからサポートします。
            </Description>
            <FeatureList>
              <FeatureItem>社内業務システムのクラウド化</FeatureItem>
              <FeatureItem>業務自動化ツールの開発</FeatureItem>
              <FeatureItem>データ活用基盤の構築</FeatureItem>
            </FeatureList>
          </Content>
          <ImagePlaceholder>DX Image</ImagePlaceholder>
        </ServiceRow>
      </Container>
    </Section>
  );
};

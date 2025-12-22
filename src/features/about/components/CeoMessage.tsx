'use client';

import styled from 'styled-components';

const Section = styled.section`
  padding: 100px ${({ theme }) => theme.spacing.md};
  background-color: rgba(244, 245, 247, 0.5);
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ImagePlaceholder = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: 16px;
  flex-shrink: 0;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Message = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Role = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const CeoMessage = () => {
  return (
    <Section>
      <Container>
        <ImagePlaceholder />
        <Content>
          <Title>CEO Message</Title>
          <Message>
            <p>
              近年、テクノロジーの進化は加速する一方です。しかし、その恩恵を十分に受けられている企業はまだ多くありません。
            </p>
            <br />
            <p>
              大規模な開発会社に頼むほどではないが、社内のリソースだけでは解決できない。そんな「隙間」にある課題こそ、私たちのような小回りの利く技術者集団が解決すべきだと考えています。
            </p>
            <br />
            <p>
              Ilventは、技術力と誠実さで、あなたのビジネスの「困った」を解決します。
            </p>
          </Message>
          <Name>山田 太郎</Name>
          <Role>代表取締役 / Lead Engineer</Role>
        </Content>
      </Container>
    </Section>
  );
};

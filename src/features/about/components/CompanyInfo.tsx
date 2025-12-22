'use client';

import styled from 'styled-components';

const Section = styled.section`
  padding: 100px ${({ theme }) => theme.spacing.md};
  background-color: transparent;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Header = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.lg};
  width: 30%;
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    width: 100%;
    padding-bottom: 0;
  }
`;

const Data = styled.td`
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    width: 100%;
    padding-top: ${({ theme }) => theme.spacing.sm};
  }
`;

export const CompanyInfo = () => {
  return (
    <Section>
      <Container>
        <Title>Company Profile</Title>
        <Table>
          <tbody>
            <Row>
              <Header>会社名</Header>
              <Data>株式会社Ilvent (Ilvent Inc.)</Data>
            </Row>
            <Row>
              <Header>設立</Header>
              <Data>2024年4月1日</Data>
            </Row>
            <Row>
              <Header>代表者</Header>
              <Data>山田 太郎</Data>
            </Row>
            <Row>
              <Header>所在地</Header>
              <Data>〒150-0000 東京都渋谷区...</Data>
            </Row>
            <Row>
              <Header>事業内容</Header>
              <Data>
                Webシステム受託開発<br />
                技術コンサルティング<br />
                DX支援
              </Data>
            </Row>
          </tbody>
        </Table>
      </Container>
    </Section>
  );
};

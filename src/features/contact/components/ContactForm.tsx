'use client';

import styled from 'styled-components';
import { useState } from 'react';

const Section = styled.section`
  padding: 100px ${({ theme }) => theme.spacing.md};
  background-color: transparent;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 16px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: ${({ theme }) => theme.spacing.md};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.muted};
    cursor: not-allowed;
  }
`;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('お問い合わせありがとうございます。（これはデモです）');
    setIsSubmitting(false);
  };

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">お名前 *</Label>
            <Input type="text" id="name" required placeholder="山田 太郎" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="company">会社名</Label>
            <Input type="text" id="company" placeholder="株式会社Ilvent" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">メールアドレス *</Label>
            <Input type="email" id="email" required placeholder="info@example.com" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="type">お問い合わせ種別 *</Label>
            <Select id="type" required>
              <option value="">選択してください</option>
              <option value="dev">システム開発のご相談</option>
              <option value="consulting">技術コンサルティングのご相談</option>
              <option value="recruit">採用について</option>
              <option value="other">その他</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">お問い合わせ内容 *</Label>
            <TextArea id="message" required placeholder="具体的なご相談内容をご記入ください。" />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? '送信中...' : '送信する'}
          </SubmitButton>
        </Form>
      </Container>
    </Section>
  );
};

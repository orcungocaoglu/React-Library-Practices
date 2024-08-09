import React from 'react';
import ContactForm from './ContactForm';
import styled from 'styled-components';

// Styled components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Contact = () => {
  return (
    <PageContainer>
      <Title>Contact Page</Title>
      <ContactForm />
    </PageContainer>
  );
};

export default Contact;

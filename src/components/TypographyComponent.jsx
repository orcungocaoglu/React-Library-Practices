import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: grey;
`;

const TypographyComponent = () => {
  return (
    <div>
      <Title>Styled Components Typography</Title>
      <Subtitle>Subtitle example with styled-components</Subtitle>
    </div>
  );
};

export default TypographyComponent;

import * as React from 'react';
import styled from 'styled-components';

const Home = styled.div`
  display: 'flex';
`;

const Div = styled.div`
  margin: 200px auto;
  text-align: center;
`;

const WelCome = styled.h1`
  font-size: 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  color: blue;
`;

export interface HomeProps {}

export default function HomePage(props: HomeProps) {
  return (
    <Home>
      <Div>
        <WelCome>Translate App - Coming Soon..</WelCome>
      </Div>
    </Home>
  );
}

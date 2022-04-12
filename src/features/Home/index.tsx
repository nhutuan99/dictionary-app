import * as React from 'react';
import styled from 'styled-components';
import Input from '../Input';
import InputForm from '../Input/InputForm';

const Home = styled.div`
  display: 'flex';
  height: 86.58vh;
  overflow: 'hidden';
`;

const Div = styled.div`
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
        <WelCome>
          <InputForm onSubmit={undefined} form={{}} name={undefined} label={undefined} />
          <Input state={[]} />
        </WelCome>
      </Div>
    </Home>
  );
}

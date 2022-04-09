import * as React from 'react';
import styled from 'styled-components';
import Input from '../Input';

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
  const [job, setJob] = React.useState('');
  const [jobs, setJobs] = React.useState([] as any);
  console.log(jobs);
  const handleSubmit = () => {
    setJobs((prev: any) => [...prev, job]);
  };

  return (
    <Home>
      <Div>
        <WelCome>
          <Input state={[]} />
        </WelCome>
      </Div>
    </Home>
  );
}

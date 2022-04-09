import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import fetchApi from '../../api/fetchData';
import HomePage from '../Home';

const Home = styled.div`
  display: 'flex';
`;

export interface InputProps {
  state: [];
}

export default function Input(props: InputProps) {
  const [state, setState] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  async function getInput() {
    try {
      setLoading(true);
      const res: any = await fetchApi.getData('hello');
      console.log(res);
      setState(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    getInput();
  }, []);

  console.log(state);

  return (
    <div>
      {loading ? (
        <h3>Loading... chờ xíu thôi nè</h3>
      ) : (
        <div>
          {state.map((item, idx) => {
            return (
              <div key={idx}>
                <h3>Chưa show cái gì hết, hic</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

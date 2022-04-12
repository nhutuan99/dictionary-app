import Box from '@mui/material/Box';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from '../../api/fetchData';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px;
    height: 670px;
  }
`;

const Row = styled.div`
  margin: '50px auto';
  width: 50%;
  height: 500px;
  overflow: auto;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 670px;
    margin-top: 150px;
    over-flow: hidden;
  }
`;

export interface InputProps {
  state: [];
  word?: any;
  partOfSpeech?: any;
}

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" style={{ color: 'green' }}>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

// eslint-disable-next-line no-empty-pattern
export default function Input({ state: [], word = '', partOfSpeech = '' }: InputProps) {
  const param = useParams();
  const [state, setState] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res: any = await fetchApi.getData(state.length === 0 ? 'hello' : Object.values(param));
        console.log(res);
        setState(res);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    })();
  }, [param, state.length]);

  console.log(state);

  const [progress, setProgress] = React.useState(50);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <CircularProgressWithLabel
          style={{
            margin: '50px auto',
            background: '#fff',
            padding: '20px',
            color: 'orange',
            opacity: '0.7',
            fontSize: '30px',
          }}
          value={progress}
        />
      ) : (
        <>
          {state.length === 0 ? (
            ''
          ) : (
            <Container>
              <Row>
                {state.slice(0, 1).map((item, idx) => {
                  return (
                    <Box key={idx}>
                      <p
                        style={{
                          textAlign: 'center',
                          color: 'orange',
                          margin: '5px 0',
                          textShadow: '2px 2px rgba(0,0,0,0.5)',
                        }}
                      >
                        {item.word}
                        <div
                          style={{
                            textAlign: 'center',
                            width: '100%',
                            height: '2px',
                            borderRadius: '1px',
                            margin: '10px auto',
                            backgroundColor: 'silver',
                          }}
                        ></div>
                      </p>
                      <Box>
                        {item.phonetics.map((subItem: any, idx: React.Key | null | undefined) => {
                          return (
                            <Box>
                              {subItem.text === '' || subItem.text === undefined || subItem.audio === '' ? (
                                ''
                              ) : (
                                <>
                                  <Typography style={{ fontSize: '14px', marginBottom: '10px', color: '#fff' }}>
                                    {subItem.text}
                                  </Typography>
                                  <ReactAudioPlayer
                                    key={idx}
                                    style={{ fontSize: '10px' }}
                                    src={subItem.audio}
                                    controls
                                  ></ReactAudioPlayer>
                                </>
                              )}
                            </Box>
                          );
                        })}
                      </Box>
                      <div
                        style={{
                          textAlign: 'center',
                          width: '100%',
                          height: '2px',
                          borderRadius: '1px',
                          marginTop: '10px',
                          backgroundColor: 'silver',
                        }}
                      ></div>
                      <Box>
                        {item.meanings.map((subItem: any, idx: React.Key | null | undefined) => {
                          return (
                            <Box>
                              <Typography
                                style={{
                                  width: '100px',
                                  padding: '12px',
                                  background: '#fff',
                                  border: 'none',
                                  outline: 'none',
                                  color: 'green',
                                  margin: '20px auto',
                                  fontSize: '18px',
                                  fontWeight: '550',
                                  fontStyle: 'italic',
                                  lineHeight: '0.1',
                                  borderRadius: '20px',
                                }}
                              >
                                {subItem.partOfSpeech}
                              </Typography>
                              <Box>
                                {subItem.definitions.map((subDefinition: any, idx: React.Key | null | undefined) => {
                                  return (
                                    <>
                                      <Typography
                                        key={idx}
                                        style={{ fontSize: '16px', marginBottom: '10px', color: '#fff' }}
                                      >
                                        {subDefinition.definition}
                                      </Typography>
                                      <Typography
                                        key={idx}
                                        style={{ fontSize: '16px', marginBottom: '10px', color: '#fff' }}
                                      >
                                        {subDefinition.example === '' || subDefinition.example === undefined ? (
                                          ''
                                        ) : (
                                          <>
                                            <span>Example : </span>
                                            <span style={{ fontSize: '16px', marginBottom: '10px', color: 'yellow' }}>
                                              {subDefinition.example}
                                            </span>
                                          </>
                                        )}
                                      </Typography>
                                    </>
                                  );
                                })}
                              </Box>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  );
                })}
              </Row>
            </Container>
          )}
        </>
      )}
    </div>
  );
}

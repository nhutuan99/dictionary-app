import Box from '@mui/material/Box';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import fetchApi from '../../api/fetchData';

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
        const res: any = await fetchApi.getData(Object.values(param));
        console.log(res);
        setState(res);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    })();
  }, [param]);

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
          style={{ margin: '50px auto', background: '#fff', padding: ' 20px', color: 'orange', opacity: '0.7' }}
          value={progress}
        />
      ) : (
        <>
          {state.length === 0 ? (
            ''
          ) : (
            <div
              style={{
                margin: '30px auto',
                width: '350px',
                maxHeight: '300px',
                borderRadius: '10px',
                padding: '10px',
                background: '#fff',
              }}
            >
              {state.map((item, idx) => {
                return (
                  <Box key={idx}>
                    <p
                      style={{
                        textAlign: 'center',
                        color: '#000',
                        margin: '5px 0',
                        textShadow: '2px 2px rgba(0,0,0,0.5)',
                      }}
                    >
                      {item.word}
                      <div
                        style={{
                          textAlign: 'center',
                          width: '200px',
                          height: '2px',
                          borderRadius: '1px',
                          margin: '10px auto',
                          backgroundColor: 'silver',
                        }}
                      ></div>
                    </p>
                    <p>
                      {item.meanings.map(
                        (
                          mean: {
                            definitions: {
                              definition:
                                | boolean
                                | React.ReactChild
                                | React.ReactFragment
                                | React.ReactPortal
                                | null
                                | undefined;
                            };
                          },
                          idx: React.Key | null | undefined
                        ) => {
                          return (
                            <Box>
                              <div key={idx}>{mean.definitions.definition}</div>
                            </Box>
                          );
                        }
                      )}
                    </p>
                  </Box>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

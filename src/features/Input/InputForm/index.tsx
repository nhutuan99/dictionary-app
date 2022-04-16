import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@mui/material';
import InputField from '../../../components/common/InputField';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    text-align: center;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }
`;

export interface InputFormProps {
  onSubmit: any;
  form: object;
  name: any;
  label: any;
}

export default function InputForm(props: InputFormProps): JSX.Element {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    inputWord: yup.string().required('Your input cannot be empty').max(100, 'Maximum up to 100 characters'),
  });

  const form = useForm({
    defaultValues: {
      inputWord: 'hello',
    },

    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values: any) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }

    console.log('value:', values);
    navigate(`/${Object.values(values)}`);
  };

  return (
    <Form>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="inputWord" label="Word" form={form} />
        <Button type="submit" variant="contained" color="warning" style={{ padding: '10px 20px', marginTop: '10px' }}>
          Enter
        </Button>
      </form>
    </Form>
  );
}

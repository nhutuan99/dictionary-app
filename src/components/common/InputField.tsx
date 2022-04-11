import React from 'react';
import { Controller } from 'react-hook-form';
import styled from 'styled-components';

const Input = styled.input`
  width: 350px;
  margin-top: 100px;
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  color: #000;
  font-weight: 550;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
  &:focus {
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.7);
  }
`;

function InputField(props: { form: any; name: any; label: any }) {
  const { form, name } = props;
  const {
    formState: { errors },
  } = form;

  const hasError = errors[name]?.message;

  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <div>
            <p style={{ color: 'orange', fontSize: '14px', padding: '5px' }}>{!!hasError && hasError}</p>
            <Input
              placeholder="Enter word here!"
              type="text"
              id={name}
              onBlur={onBlur}
              onChange={onChange}
              defaultValue={value}
            />
          </div>
        )}
      ></Controller>
    </div>
  );
}

export default InputField;

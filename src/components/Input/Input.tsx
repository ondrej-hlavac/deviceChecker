import React from 'react';
import { InputField, InputGroup, InputLabel } from './StyledInput';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder,
  defaultValue,
  onChange,
}) => {
  return (
    <InputGroup>
      <InputField
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <InputLabel htmlFor={id}>{label}</InputLabel>
    </InputGroup>
  );
};

export default Input;

'use client';
import type { InputHTMLAttributes, DetailedHTMLProps } from 'react';

const InputComponent: React.FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className = '', ...restProps }) => {
  return (
    <input
      {...restProps}
      className={`focus:border-blue-1 w-full rounded-md border-2 p-2 text-sm font-light outline-none duration-200 ${className}`}
    />
  );
};

type InputFieldProps = {
  label?: React.ReactNode;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const InputField: React.FC<InputFieldProps> = ({ label, className, ...restProp }) => {
  return (
    <label className={className}>
      {label}
      <InputComponent {...restProp} />
    </label>
  );
};

export default InputField;

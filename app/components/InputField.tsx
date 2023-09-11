"use client"
import { InputHTMLAttributes, DetailedHTMLProps } from "react";

const InputComponent: React.FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({ className = '', ...restProps }) => {
  return (
    <input {...restProps} className={`p-2 border-2 rounded-md w-full outline-none focus:border-secondary duration-200 text-sm font-light ${className}`} />
  )
}

type InputFieldProps = {
  label?: React.ReactNode;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> 

const InputField: React.FC<InputFieldProps> = ({ label, className, ...restProp }) => {
  return (
    <label className={className} >
      {label}
      <InputComponent {...restProp} />
    </label>
  );
};

export default InputField;
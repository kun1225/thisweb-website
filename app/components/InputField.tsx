import { HTMLInputTypeAttribute } from "react";

type InputComponentType = {
  type?: HTMLInputTypeAttribute;
  onChange: () => void;
  className?: string;
  placeholder?: string;
}

const InputComponent: React.FC<InputComponentType> = ({ type, onChange, className, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} className={`defaultClass ${className}`} />
  )
}

type InputFieldProps = {
  InputComponent: React.FC<InputComponentType>;
  label: React.ReactNode;
} & InputComponentType

const InputField: React.FC<InputFieldProps> = ({ label, type, InputComponent, onChange, className }) => {
  return (
    <label className="labelClass">
      {label}
      <InputComponent type={type} onChange={onChange} className={className} />
    </label>
  );
};


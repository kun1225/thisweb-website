import { HTMLInputTypeAttribute } from "react";

type InputComponentType = {
  type?: HTMLInputTypeAttribute;
  onChange?: () => void;
  className?: string;
  placeholder?: string;
}

const InputComponent: React.FC<InputComponentType> = ({ type, onChange, className = '', placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} className={`p-2 border-2 rounded-md w-full outline-none focus:border-secondary duration-200 text-sm font-light ${className}`} />
  )
}

type InputFieldProps = {
  label?: React.ReactNode;
} & InputComponentType

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, onChange, className }) => {
  return (
    <label className={className} >
      {label}
      <InputComponent type={type} placeholder={placeholder} onChange={onChange}/>
    </label>
  );
};

export default InputField;
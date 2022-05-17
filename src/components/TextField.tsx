import React, { HTMLInputTypeAttribute } from "react";
import { useField,ErrorMessage } from "formik";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextField = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <div className="form">
      <label htmlFor={field.name}>{label}</label>
      <input 
    
      {...field}
      {...props}
      autoComplete="off"
      className={`input-text ${meta.touched && meta.error && 'is-invalid'}`} />
      <ErrorMessage component='div' name={field.name} className='error-span'/>
    </div>
  );
};

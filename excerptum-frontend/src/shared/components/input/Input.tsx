import React, { useState } from 'react';
import { MdErrorOutline } from 'react-icons/md';
import { ShowPassword } from './ShowPassword.js';
import type {
  FieldErrors,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form';

interface InputProps {
  type: string;
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  errors?: FieldErrors;
  value?: string;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
  defaultValue?: string;
  pattern?: string | RegExp;
  disabled?: boolean;
  register: UseFormRegister<any>;
  validation?: RegisterOptions<any>;
  showPasswordClass?: string;
}

export function Input({
  type,
  name,
  id,
  label,
  placeholder,
  errors,
  value,
  containerClass,
  labelClass,
  inputClass,
  defaultValue,
  pattern,
  disabled,
  register,
  validation = {},
  showPasswordClass = ''
}: InputProps) {

  const [showPassword, setShowPassword] = useState(false);

  const fieldError = errors?.[name as keyof typeof errors];
  const fieldMessage = fieldError && typeof fieldError === 'object' && 'message' in fieldError
    ? String((fieldError as { message?: unknown }).message)
    : undefined;

  return (
    <div className={`${containerClass} inputWrapper  flex flex-col p-2`}>
      <label htmlFor={id} className={labelClass}>{label}</label>
      <div className='relative'>
        <input
          {...register(name, validation)}
          value={value}
          type={showPassword ? 'text' : type}
          name={name}
          className={`border-gray-300 hover:border-gray-600 focus:ring-wine focus:border-wine rounded-md shadow-sm ${inputClass}`}
          placeholder={placeholder}
          id={id}
          key={id}
          defaultValue={defaultValue || ''}
          pattern={
            pattern
              ? typeof pattern === 'string'
                ? pattern
                : pattern.source
              : undefined
          }
          disabled={disabled || false}
        />
        {type === 'password' &&
          <ShowPassword
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showPasswordClass={showPasswordClass}
          />}
      </div>
      {fieldMessage &&
        <div className='flex pl-2'>
          <MdErrorOutline
            size={20}
            className='flex-shrink-0'
          />
          <p className='ml-2 text-sm'>{fieldMessage}</p>
        </div>
      }
    </div>
  );
}
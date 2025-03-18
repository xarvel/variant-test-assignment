import React from 'react';
import { FormGroup, Label, Input, CharCounterTypography } from '../styled';
import { UseFormRegister } from 'react-hook-form';
import { FormData } from '../../../store/applicationStore';

interface FormFieldProps {
  id: keyof FormData;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  isTextarea?: boolean;
  rows?: number;
  maxLength?: number;
  register: UseFormRegister<FormData>;
  error?: boolean;
  value?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  placeholder,
  isRequired = false,
  isTextarea = false,
  rows = 6,
  maxLength,
  register,
  error,
  value,
}) => {
  const baseProps = {
    id,
    'aria-required': isRequired,
    'aria-invalid': error,
    'aria-describedby': error ? `${id}-error` : undefined,
  };

  const { ref, ...fieldProps } = register(id, {
    required: isRequired,
    maxLength: maxLength
      ? {
          value: maxLength,
          message: `Maximum ${maxLength} characters allowed`,
        }
      : undefined,
  });

  const styledProps = {
    $hasError: error,
  };

  return (
    <FormGroup fullWidth>
      <Label shrink={true} htmlFor={id}>
        {label}
      </Label>
      <Input
        multiline={isTextarea}
        minRows={isTextarea ? rows : undefined}
        placeholder={placeholder}
        inputRef={ref}
        disableUnderline
        fullWidth
        {...baseProps}
        {...fieldProps}
        {...styledProps}
      />
      {maxLength && (
        <CharCounterTypography variant="caption" color="text.secondary" aria-live="polite">
          {value?.length || 0}/{maxLength}
        </CharCounterTypography>
      )}
    </FormGroup>
  );
};

export default FormField; 
import React from 'react';
import { FormGroup, Label, Input, CharCounterTypography } from '../styled';
import { useController, Control } from 'react-hook-form';
import { FormData } from '../../../store/applicationStore';

interface FormFieldProps {
  id: keyof FormData;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  isTextarea?: boolean;
  rows?: number;
  maxLength?: number;
  control: Control<FormData>;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  placeholder,
  isRequired = false,
  isTextarea = false,
  rows = 6,
  maxLength,
  control,
}) => {
  const {
    field: { ref, value = '', onChange },
    fieldState: { error }
  } = useController({
    name: id,
    control,
    rules: {
      required: isRequired,
      maxLength: maxLength
        ? {
            value: maxLength,
            message: `Maximum ${maxLength} characters allowed`,
          }
        : undefined,
    },
  });

  const baseProps = {
    id,
    'aria-required': isRequired,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${id}-error` : undefined,
  };

  const styledProps = {
    $hasError: !!error,
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
        value={value}
        onChange={onChange}
        {...baseProps}
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
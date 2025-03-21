import React from 'react';
import { FormTitleTypography } from '../styled';

interface FormHeaderProps {
  jobTitle: string;
  company: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ jobTitle, company }) => {
  const formTitle = jobTitle && company ? `${jobTitle}, ${company}` : 'New application';

  return (
    <FormTitleTypography
      variant="h2"
      color={!(jobTitle && company) ? 'text.secondary' : 'text.primary'}
    >
      {formTitle}
    </FormTitleTypography>
  );
};

export default FormHeader;

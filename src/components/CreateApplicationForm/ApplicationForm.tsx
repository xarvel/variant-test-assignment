import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Grid2 as Grid } from '@mui/material';
import { FormData } from '../../store/applicationStore';
import { FormSection, Form } from './styled';
import FormField from './components/FormField';
import FormHeader from './components/FormHeader';
import FormActions from './components/FormActions';

const MAX_ADDITIONAL_DETAILS_LENGTH = 1200;

export interface ApplicationFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  isLoading: boolean;
  initialData?: Partial<FormData>;
  showTryAgain?: boolean;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  onSubmit,
  isLoading,
  initialData,
  showTryAgain = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    watch,
    reset,
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      jobTitle: initialData?.jobTitle || '',
      company: initialData?.company || '',
      skills: initialData?.skills || '',
      additionalDetails: initialData?.additionalDetails || '',
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const jobTitle = watch('jobTitle', initialData?.jobTitle || '');
  const company = watch('company', initialData?.company || '');
  const additionalDetails = watch('additionalDetails', initialData?.additionalDetails || '');

  return (
    <FormSection>
      <Form onSubmit={handleSubmit(onSubmit)} aria-label="Application form" noValidate>
        <FormHeader jobTitle={jobTitle} company={company} />

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormField
              id="jobTitle"
              label="Job title"
              placeholder="Product manager"
              isRequired
              register={register}
              error={!!errors.jobTitle}
              value={jobTitle}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormField
              id="company"
              label="Company"
              placeholder="Apple"
              isRequired
              register={register}
              error={!!errors.company}
              value={company}
            />
          </Grid>
        </Grid>

        <FormField
          id="skills"
          label="I am good at..."
          placeholder="HTML, CSS and doing things in time"
          isRequired
          register={register}
          error={!!errors.skills}
          value={watch('skills')}
        />

        <FormField
          id="additionalDetails"
          label="Additional details"
          placeholder="Describe why you are a great fit or paste your bio"
          isTextarea
          isRequired
          maxLength={MAX_ADDITIONAL_DETAILS_LENGTH}
          register={register}
          error={!!errors.additionalDetails}
          value={additionalDetails}
        />

        <FormActions
          isLoading={isLoading}
          isValid={isValid}
          showTryAgain={showTryAgain}
        />
      </Form>
    </FormSection>
  );
};

export default ApplicationForm;

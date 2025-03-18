import { useState, FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApplicationStore, FormData } from '../../store/applicationStore';
import Grid from '@mui/material/Grid2';
import ApplicationForm from './ApplicationForm';
import ApplicationPreview from './ApplicationPreview';
import { ErrorTypography } from './styled';

interface CreateApplicationFormProps {
  initialFormData?: FormData;
  initialApplicationId?: string;
  initialText?: string;
}

const CreateApplicationForm: FC<CreateApplicationFormProps> = ({ 
  initialFormData: propInitialFormData,
  initialApplicationId: propInitialApplicationId,
  initialText: propInitialText
}) => {
  const navigate = useNavigate();
  const generateApplication = useApplicationStore(state => state.generateApplication);
  const addApplication = useApplicationStore(state => state.addApplication);
  const updateApplication = useApplicationStore(state => state.updateApplication);
  const isLoading = useApplicationStore(state => state.isLoading);
  const error = useApplicationStore(state => state.error);
  const clearError = useApplicationStore(state => state.clearError);

  const [generatedText, setGeneratedText] = useState<string>(propInitialText || '');
  const [currentFormData, setCurrentFormData] = useState<FormData | null>(propInitialFormData || null);
  const [currentApplicationId, setCurrentApplicationId] = useState<string | null>(propInitialApplicationId || null);

  const handleGenerateApplication = useCallback(
    async (data: FormData) => {
      setCurrentFormData(data);
      clearError();

      try {
        const text = await generateApplication(data);
        setGeneratedText(text);
        
        let id = currentApplicationId;
        if (!id) {
          id = crypto.randomUUID();
          setCurrentApplicationId(id);
          addApplication(text, data, id);
        } else {
          updateApplication(id, text, data);
        }
        navigate(`/edit/${id}`);
      } catch (error) {
        console.error('Error generating application:', error);
      }
    },
    [generateApplication, addApplication, updateApplication, clearError, currentApplicationId, navigate]
  );

  return (
    <Grid container spacing={3}>
      {error && (
        <Grid size={{ xs: 12 }}>
          <ErrorTypography variant="body2" color="error">
            {error}
          </ErrorTypography>
        </Grid>
      )}

      <Grid size={{ xs: 12, md: 6 }}>
        <ApplicationForm
          onSubmit={handleGenerateApplication}
          isLoading={isLoading}
          initialData={currentFormData || undefined}
          showTryAgain={!!generatedText}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ApplicationPreview generatedText={generatedText} isLoading={isLoading} />
      </Grid>
    </Grid>
  );
};

export default CreateApplicationForm;

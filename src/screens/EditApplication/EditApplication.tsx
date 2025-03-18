import { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CreateApplicationForm, GoalBanner } from '../../components';
import { ContentContainer } from '../styled';
import { useApplicationStore } from '../../store/applicationStore';

const EditApplication: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const getApplicationById = useApplicationStore(state => state.getApplicationById);
  const application = id ? getApplicationById(id) : undefined;

  useEffect(() => {
    if (!application) {
      navigate('/');
    }
  }, [application, navigate]);

  if (!application) return null;

  return (
    <ContentContainer>
      <CreateApplicationForm
        initialFormData={application.formData}
        initialApplicationId={application.id}
        initialText={application.text}
      />
      <GoalBanner />
    </ContentContainer>
  );
};

export default EditApplication;

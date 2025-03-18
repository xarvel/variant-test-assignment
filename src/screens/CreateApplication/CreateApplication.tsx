import { FC } from 'react';
import { CreateApplicationForm } from '../../components';
import { ContentContainer } from '../styled';

const CreateApplication: FC = () => {
  return (
    <ContentContainer>
      <CreateApplicationForm />
    </ContentContainer>
  );
};

export default CreateApplication;

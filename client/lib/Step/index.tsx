import React, { FC, useState, useContext } from 'react';
import { StepWizardChildProps } from 'react-step-wizard';
import { FetchResult } from '@apollo/client';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { PublicationContext } from '../../Context/PublicationContext';
import { WrapperStep, StepContainer, Title, ContainerButtonOut, Button, SpinnerContainer } from './styles';
import theme from '../../theme';
import { ModalContext } from '../../Context/ModalContext';

interface StepProps extends StepWizardChildProps {
  title?: string;
  Stepchildren?: JSX.Element;
  nextAction?: () => void;
  onSubmit?: any;
  paramSubmit?: any;
}

const Step: FC<any> = props => {
  const { steps } = useContext(PublicationContext);
  const { setshowSpinner } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);
  const { currentStep, firstStep, goToStep, lastStep, nextStep, previousStep, totalSteps, paramSubmit, onSubmit } =
    props;

  const handleNext = async () => {
    if (currentStep === totalSteps - 1) {
      try {
        setshowSpinner(true);
        const { data } = await onSubmit(paramSubmit);
        setTimeout(() => {
          setshowSpinner(false);
          nextStep();
        }, 1000);
      } catch (error) {
        console.log('error', error);
      }
    } else {
      nextStep();
    }
  };

  return (
    <>
      <WrapperStep>
        <StepContainer>
          <Title> {props.title}</Title>

          {props.Stepchildren}
        </StepContainer>

        {!(totalSteps === currentStep) && (
          <ContainerButtonOut first={currentStep === 1}>
            {!(currentStep === 1) && <Button onClick={previousStep}> Volver </Button>}
            <Button onClick={handleNext} disabled={steps[currentStep - 1].disabled}>
              {currentStep === totalSteps - 1 ? 'Finalizar' : 'Continuar'}
            </Button>
          </ContainerButtonOut>
        )}
      </WrapperStep>
    </>
  );
};

export default Step;

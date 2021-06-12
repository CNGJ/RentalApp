import React, { FC, useState, useContext } from "react";
import {
  WrapperStep,
  StepContainer,
  Title,
  ContainerButtonOut,
  Button,
  SpinnerContainer,
} from "./styles";
import { StepWizardChildProps } from "react-step-wizard";
import { PublicationContext } from "../../Context/PublicationContext";
import { FetchResult } from "@apollo/client";
import PacmanLoader from "react-spinners/PacmanLoader";
import { theme } from "../../theme";

interface StepProps extends StepWizardChildProps {
  title?: string;
  children?: JSX.Element;
  nextAction?: () => void;
  onSubmit?: any;
  paramSubmit?: any;
}

export const Step: FC<StepProps> = (props) => {
  const { steps } = useContext(PublicationContext);
  const [loading, setLoading] = useState(false);
  const {
    currentStep,
    firstStep,
    goToStep,
    lastStep,
    nextStep,
    previousStep,
    totalSteps,
    paramSubmit,
    onSubmit,
  } = props;

  const handleNext = async () => {
    if (currentStep === totalSteps - 1) {
      try {
        setLoading(true);
        const { data } = await onSubmit(paramSubmit);
        setTimeout(() => {
          console.log("data", data);
          setLoading(false);
          nextStep();
        }, 1000);
      } catch (error) {}
    } else {
      nextStep();
    }
  };

  return (
    <>
      <WrapperStep>
        <StepContainer>
          <Title> {props.title}</Title>

          {!loading && <> {props.children} </>}

          <SpinnerContainer>
            <PacmanLoader color={theme.Terciary} loading={loading} size={70} />
          </SpinnerContainer>
        </StepContainer>

        {!(totalSteps === currentStep) && (
          <ContainerButtonOut first={currentStep === 1}>
            {!(currentStep === 1) && (
              <Button onClick={previousStep}> Volver </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={steps[currentStep - 1].disabled}
            >
              {currentStep === totalSteps - 1 ? "Finalizar" : "Continuar"}
            </Button>
          </ContainerButtonOut>
        )}
      </WrapperStep>
    </>
  );
};

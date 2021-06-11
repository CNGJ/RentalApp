import React, { FC, useState, useContext } from "react";
import {
  WrapperStep,
  StepContainer,
  Title,
  ContainerButtonOut,
  Button,
} from "./styles";
import { StepWizardChildProps } from "react-step-wizard";
import { PublicationContext } from "../../Context/PublicationContext";

interface StepProps extends StepWizardChildProps {
  title?: string;
  children?: JSX.Element;
  nextAction?: () => void;
}

export const Step: FC<StepProps> = (props) => {
  // console.log("props", props);
  const { steps } = useContext(PublicationContext);
  const [disabledNext, setdisabledNext] = useState(true);
  const {
    currentStep,
    firstStep,
    goToStep,
    lastStep,
    nextStep,
    previousStep,
    totalSteps,
  } = props;

  const handleNext = () => {
    if (props.nextAction) {
      console.log(props.nextAction, "jeje");
    } else {
      nextStep();
    }
  };

  return (
    <>
      <WrapperStep>
        <StepContainer>
          <Title> {props.title}</Title>
          {props.children}
        </StepContainer>

        <ContainerButtonOut first={currentStep === 1}>
          {!(currentStep === 1) && (
            <Button onClick={previousStep}> Volver </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={steps[currentStep - 1].disabled}
          >
            Continuar
          </Button>
        </ContainerButtonOut>
      </WrapperStep>
    </>
  );
};

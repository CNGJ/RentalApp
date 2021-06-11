import React, { useState } from "react";
import StepWizard from "react-step-wizard";

import Header from "../components/Home/Header";
import { Step } from "../lib/Step";
import { StepWizardProps } from "react-step-wizard";
import { DataPublication } from "../components/newPublicationSteps/StepOnePublication";
import { StepTwoPublication } from "../components/newPublicationSteps/StepTwoPublication";
import { StepThreePublication } from "../components/newPublicationSteps/StepThreePublication";

const newPublication = () => {
  const [state, updateState] = useState({
    form: {},
    // transitions: {
    //   enterRight: `${transitions.animated} ${transitions.enterRight}`,
    //   enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
    //   exitRight: `${transitions.animated} ${transitions.exitRight}`,
    //   exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
    //   intro: `${transitions.animated} ${transitions.intro}`,
    // },
    // demo: true, // uncomment to see more
  });

  const onStepChange = (stats) => {
    console.log("cambie", stats);
  };

  return (
    <>
      <Header />
      <StepWizard
        onStepChange={onStepChange}
        isHashEnabled
        // transitions={state.transitions} // comment out for default transitions
        // nav={<Nav />}
        // instance={() => {
        //   console.log("que paso aqui");
        // }}
      >
        <Step
          title={"Creemos tu nueva publicacion"}
          children={<DataPublication />}
        />
        <Step
          title={"Servicios y caracteristicas de tu alojamiento"}
          children={<StepTwoPublication />}
        />
        <Step title={"Precio"} children={<StepThreePublication />} />
      </StepWizard>
    </>
  );
};

export default newPublication;

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from 'react';
import StepWizard from 'react-step-wizard';

import { useMutation } from '@apollo/client';
import Header from '../components/Home/Header';
import Step from '../lib/Step';
import DataPublication from '../components/newPublicationSteps/StepOnePublication';
import StepTwoPublication from '../components/newPublicationSteps/StepTwoPublication';
import StepThreePublication from '../components/newPublicationSteps/StepThreePublication';
import FinalStepNewPublication from '../components/newPublicationSteps/FinalStep';
import { PublicationContext } from '../Context/PublicationContext';
import { NEW_PUBLICATION } from '../gql/Publications';

const newPublication = () => {
  // const [state, updateState] = useState({
  //   form: {},
  //   // transitions: {
  //   //   enterRight: `${transitions.animated} ${transitions.enterRight}`,
  //   //   enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
  //   //   exitRight: `${transitions.animated} ${transitions.exitRight}`,
  //   //   exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
  //   //   intro: `${transitions.animated} ${transitions.intro}`,
  //   // },
  //   // demo: true, // uncomment to see more
  // });

  const onStepChange = stats => {
    console.log('cambie', stats);
  };

  const { NewPublicationData } = useContext(PublicationContext);
  // eslint-disable-next-line no-shadow
  const [newPublication] = useMutation(NEW_PUBLICATION);

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
        <Step title={'Creemos tu nueva publicacion'} Stepchildren={<DataPublication />} />
        <Step title={'Servicios y caracteristicas de tu alojamiento'} Stepchildren={<StepTwoPublication />} />
        <Step
          title={'Precio'}
          onSubmit={newPublication}
          paramSubmit={{
            variables: {
              input: {
                ...NewPublicationData
              }
            }
          }}
          Stepchildren={<StepThreePublication />}
        />

        <Step title={'Felicitaciones'} Stepchildren={<FinalStepNewPublication />} />
      </StepWizard>
    </>
  );
};

export default newPublication;

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, FC, useState } from 'react';
import StepWizard from 'react-step-wizard';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import Header from '../components/Home/Header';
import Step from '../lib/Step';
import DataPublication from '../components/newPublicationSteps/StepOnePublication';
import StepTwoPublication from '../components/newPublicationSteps/StepTwoPublication';
import StepThreePublication from '../components/newPublicationSteps/StepThreePublication';
import FinalStepNewPublication from '../components/newPublicationSteps/Result';
import { PublicationContext } from '../Context/PublicationContext';
import { NEW_PUBLICATION } from '../gql/Publications';
import theme from '../theme';

const Navigation = styled.div`
  text-align: center;
`;

const Dot = styled.span`
  color: ${theme.Terciary};
  cursor: pointer;
  border: 1px solid;
  padding: 0 8px;
  line-height: 1;
  border-radius: 4rem;
  font-size: 1.2rem;
  margin: 0 15px;
  opacity: 0.4;
  text-shadow: none;
  transition: opacity 1s ease, text-shadow 1s ease;
  will-change: opacity, text-shadow;
`;

const Active = styled.span`
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0 8px;
  line-height: 1;
  background: ${theme.Terciary};
  border-radius: 4rem;
  margin: 0 15px;
  transition: opacity 1s ease, text-shadow 1s ease;
  will-change: opacity, text-shadow;
  color: white;
  opacity: 1;
  text-shadow: 0 0px 8px;
`;

const Nav = props => {
  const dots = [];
  for (let i = 1; i <= props.totalSteps; i += 1) {
    const isActive = props.currentStep === i;
    const pepe = !isActive ? (
      <Dot key={`step-${i}`} onClick={() => props.goToStep(i)}>
        {i}
      </Dot>
    ) : (
      <Active key={`step-${i}`} onClick={() => props.goToStep(i)}>
        {i}
      </Active>
    );

    dots.push(pepe);
  }

  return <Navigation>{dots}</Navigation>;
};

const newPublication: FC<any> = () => {
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
        nav={<Nav />}
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

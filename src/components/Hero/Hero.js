import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          my portfolio!
        </SectionTitle>
        <SectionText>
        Front-End Developer and Mobile Engineer specializing in ReactJs/NextJs technologies."
        </SectionText>
        <a href="https://www.linkedin.com/in/qasim-mirza-4a1860289/" target="_blank">
        <Button onClick={props.handleClick}>Let's connect'</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

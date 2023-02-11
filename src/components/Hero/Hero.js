import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section nppadding row>
    <LeftSection>
      <SectionTitle>
        I'M SAYED HANY <br />
        FRONTEND DEVELOPER
      </SectionTitle>
      <SectionText>
        Creative and self-starting Entry level Front-End Developer. Building
        stable websites and apps in fast-paced, collaborative environments.
      </SectionText>
      <Button onClick={() => window.open("mailto:sayedhany975@gmail.com")}>
        Email Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

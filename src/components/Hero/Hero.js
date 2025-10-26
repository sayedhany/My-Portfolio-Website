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
        SENIOR FRONTEND DEVELOPER
      </SectionTitle>
      <SectionText>
        Experienced Senior Front-End Developer specializing in Angular, Next.js,
        and modern JavaScript frameworks. Building scalable, enterprise-level
        applications with exceptional user experiences and performance
        optimization.
      </SectionText>
      <Button onClick={() => window.open("mailto:sayedhany975@gmail.com")}>
        Let's Connect
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

import React from "react";
import { DiFirebase, DiReact, DiAngularSimple } from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      As a Senior Front-End Developer, I specialize in modern web technologies
      and frameworks. I have extensive experience building scalable,
      enterprise-level applications with cutting-edge tools.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiAngularSimple size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Angular Ecosystem</ListTitle>
          <ListParagraph>
            Expert in Angular 15+
            <br />
            TypeScript, RxJS, NgRx
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiNextdotjs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React & Next.js</ListTitle>
          <ListParagraph>
            Advanced React patterns
            <br />
            Next.js 13+, SSR, SSG
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiTypescript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Modern JavaScript</ListTitle>
          <ListParagraph>
            TypeScript Expert
            <br />
            ES6+, Module Systems
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiTailwindcss size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Styling & UI</ListTitle>
          <ListParagraph>
            CSS3, SCSS, TailwindCSS
            <br />
            Material-UI, Styled Components
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Backend & Tools</ListTitle>
          <ListParagraph>
            Node.js, Firebase
            <br />
            RESTful APIs, GraphQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Architecture & Performance</ListTitle>
          <ListParagraph>
            Micro-frontends, PWAs
            <br />
            Performance optimization
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

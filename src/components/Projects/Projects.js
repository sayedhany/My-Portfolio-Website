import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => (
        <BlogCard key={i}>
          <Img src={p.image} />
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo className="card-info">{p.description}</CardInfo>
          <div style={{ marginTop: "1rem" }}>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {p.tags.map((t, i) => (
                <Tag key={i}>{t}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks target="_blank" href={p.visit}>
              Code
            </ExternalLinks>
            <ExternalLinks target="_blank" href={p.source}>
              Live View
            </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;

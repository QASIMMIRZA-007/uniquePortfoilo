import React from 'react';
import { DiFirebase, DiReact, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText><br/>
      Front-End: HTML, CSS, Sass, Bootstrap,Tailwind CSS, JavaScript, React, React Hooks, React Router, Redux, Styled Components, Next.js<br/><br/>
      {/* Back-End: Java, Python, C#, C++, C, MySQL, Firebase, Swagger<br/><br/> */}
      IDE: Visual Studio Code, IntelliJ IDEA, PyCharm, Visual Studio,Remix
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          Most commonly use:<br />
             ReactJs, NextJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          Most frequently used:<br />
            Firebase, Swagger
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiVisualstudio size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>IDE</ListTitle>
          <ListParagraph>
          Most commonly used:<br />
            Visual Studio Code
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

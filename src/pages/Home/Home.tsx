import React, { useMemo } from 'react';
import { Grid, Image, Header, Item, List, Label } from 'semantic-ui-react';
import { contacts, languages, skills, TSkills } from './const';

const Home: React.FC = () => {
  const renderContacts = useMemo(
    () => (
      <>
        <Header>Contacts</Header>
        <List>
          {contacts.map(({ icon, text, link }) => (
            <List.Item key={text}>
              <List.Icon name={icon} />
              <List.Content as={link && 'a'} href={link}>
                {text}
              </List.Content>
            </List.Item>
          ))}
        </List>
      </>
    ),
    [],
  );

  const renderLanguages = useMemo(
    () => (
      <>
        <Header>Languages</Header>
        <List>
          {languages.map(({ name, level }) => (
            <List.Item key={name}>
              <List.Content>
                <List.Header>{name}</List.Header>
                <List.Description>{level}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </>
    ),
    [],
  );

  const renderAdditionalSection = useMemo(
    () => (
      <Grid.Column width={5}>
        <Image src="/images/photo.jpg" circular />
        {renderContacts}
        {renderLanguages}
      </Grid.Column>
    ),
    [renderContacts, renderLanguages],
  );

  const renderExperience = useMemo(
    () => (
      <>
        <Header dividing>Experience</Header>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>FreshcodeIT</Item.Header>
              <Item.Meta>Full Stack Developer</Item.Meta>
              <Item.Meta>December 2016 - August 2021</Item.Meta>
              <Item.Description>Some Description</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </>
    ),
    [],
  );

  const renderEducation = useMemo(
    () => (
      <>
        <Header dividing>Education</Header>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>
                National University «Zaporizhzhia Polytechnic»
              </Item.Header>
              <Item.Meta>Master in Computer engineering</Item.Meta>
              <Item.Meta>2014 - 2020</Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </>
    ),
    [],
  );

  const renderSkills = useMemo(
    () => (
      <>
        <Header dividing>Skills</Header>
        {Object.keys(skills).map((skillKey) => (
          <>
            <Header as="h5">{skillKey.toUpperCase()}</Header>
            <Label.Group size="large">
              {skills[skillKey as TSkills].map(({ name, color }) => (
                <Label color={color} key={name}>
                  {name}
                </Label>
              ))}
            </Label.Group>
          </>
        ))}
      </>
    ),
    [],
  );

  const renderMainSection = useMemo(
    () => (
      <Grid.Column width={11}>
        <Header dividing as="h1">
          Artiukh Vladyslav
          <Header.Subheader>Full Stack Web Developer</Header.Subheader>
        </Header>
        <p>Some information about me</p>
        {renderExperience}
        {renderSkills}
        {renderEducation}
      </Grid.Column>
    ),
    [renderExperience, renderEducation, renderSkills],
  );

  return (
    <Grid container>
      <Grid.Row columns={2}>
        {renderAdditionalSection}
        {renderMainSection}
      </Grid.Row>
    </Grid>
  );
};

export default Home;

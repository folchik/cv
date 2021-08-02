import { SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';

interface IContact {
  icon: SemanticICONS;
  text: string;
  link?: string;
}

export const contacts: IContact[] = [
  {
    icon: 'map marker alternate',
    text: 'Zaporizhzhia, Ukraine',
  },
  {
    icon: 'at',
    text: 'folchik.com@gmail.com',
  },
  {
    icon: 'linkedin',
    text: 'linkedin.com/in/vartiukh',
    link: 'https://linkedin.com/in/vartiukh',
  },
];

interface ILanguage {
  name: string;
  level: 'Intermediate' | 'Native';
}

export const languages: ILanguage[] = [
  {
    name: 'English',
    level: 'Intermediate',
  },
  {
    name: 'Ukrainian',
    level: 'Native',
  },
  {
    name: 'Russian',
    level: 'Native',
  },
];

interface ISkill {
  name: string;
  color?: SemanticCOLORS;
  rate?: number;
}

export type TSkills =
  | 'languages'
  | 'additional'
  | 'databases'
  | 'toolsAndFrameworks';

export const skills: Record<TSkills, ISkill[]> = {
  languages: [
    {
      name: 'JavaScript',
      color: 'green',
    },
    {
      name: 'TypeScript',
      color: 'olive',
    },
    {
      name: 'SQL',
      color: 'olive',
    },
  ],
  toolsAndFrameworks: [
    { name: 'ReactJS', color: 'green' },
    { name: 'NodeJS', color: 'green' },
    { name: 'Express.js', color: 'green' },
    { name: 'Graphql', color: 'olive' },
    { name: 'PostgraphQL', color: 'olive' },
    { name: 'NestJS', color: 'yellow' },
    { name: 'SASS' },
    { name: 'HTML' },
    { name: 'CSS' },
  ],
  additional: [
    {
      name: 'MaterialUI',
      color: 'green',
    },
    {
      name: 'Bootstrap',
      color: 'yellow',
    },
    { name: 'Git' },
    { name: 'WS' },
    { name: 'AWS (SES, S3)' },
    { name: 'Docker' },
    { name: 'MobX' },
    { name: 'Redux' },
    { name: 'Moment' },
    { name: 'Lodash' },
  ],
  databases: [
    {
      name: 'PostgreSQL',
      color: 'olive',
    },
    {
      name: 'MongoDB',
      color: 'yellow',
    },
    {
      name: 'Redis',
    },
  ],
};

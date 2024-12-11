import { PathListItem } from '../app/shared/types/paths-types';

const PATHS_MOCK_DATA: PathListItem[] = [
  {
    id: 1,
    logo: 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif',
    name: 'Angular Path',
    description: 'Angular path description',
    author: 'Milo',
    date: new Date(1720205276081),
    slug: 'angular-path',
  },
  {
    id: 2,
    logo: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png',
    name: 'NextJS Path',
    description: 'NextJS path description',
    author: 'Diego',
    date: new Date(1720205276081),
    slug: 'nextjs-path',
  },
  {
    id: 3,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    name: 'CSS Path',
    description: 'CSS path description',
    author: 'Jesus',
    date: new Date(1720205276081),
    slug: 'css-path',
  },
  {
    id: 4,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Accessibility.svg/512px-Accessibility.svg.png',
    name: 'Accessibility Path',
    description: 'Accessibility description',
    author: 'Luigi',
    date: new Date(1720205276081),
    slug: 'accessibility-path',
  },
  {
    id: 5,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    name: 'Javascript Path',
    description: 'Javascript description',
    author: 'Luna',
    date: new Date(1720205276081),
    slug: 'javascript-path',
  },
];

export default PATHS_MOCK_DATA;

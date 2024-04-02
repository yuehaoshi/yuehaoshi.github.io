import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/yuehaoshi',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/yuehao-shi/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.facebook.com/yuehao.shi.10/',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'mailto:yuehaoshi@outlook.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;

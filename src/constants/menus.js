import AiAgentsIcon from 'icons/header/ai-agent.inline.svg';
import BuildingGradientIcon from 'icons/header/building-gradient.inline.svg';
import BuildingIcon from 'icons/header/building.inline.svg';
import CareerIcon from 'icons/header/career.inline.svg';
import ChatIcon from 'icons/header/chat.inline.svg';
import DatabaseIcon from 'icons/header/database.inline.svg';
import GearIcon from 'icons/header/gear.inline.svg';
import PeopleIcon from 'icons/header/people.inline.svg';
import SaasIcon from 'icons/header/saas.inline.svg';
import ServerlessIcon from 'icons/header/serverless.inline.svg';
import StarGradientIcon from 'icons/header/star-gradient.inline.svg';
import StarIcon from 'icons/header/star.inline.svg';

import LINKS from './links';

export default {
  header: [
    {
      text: 'Solutions',
      sections: [
        {
          title: 'SERVICES',
          items: [
            {
              icon: SaasIcon,
              title: 'Analyse données',
              to: `${LINKS.useCases}/postgres-for-saas`,
            },

            {
              icon: DatabaseIcon,
              title: 'Intelligence Artificielle',
              to: `${LINKS.useCases}/database-per-tenant`,
            },
            {
              icon: GearIcon,
              title: 'Internet des Objets (Iot)',
              to: `${LINKS.useCases}/dev-test`,
            },

            {
              icon: AiAgentsIcon,
              title: 'Sécurité Nationale et Défense',
              to: `${LINKS.useCases}/ai-agents`,
            },
            {
              icon: ServerlessIcon,
              title: 'Formation',
              to: `${LINKS.useCases}/serverless-apps`,
            },
          ],
        },
        {
          title: 'SOLUTIONS',
          items: [
            {
              icon: BuildingIcon,
              iconGradient: BuildingGradientIcon,
              title: 'Infrastructures',
              to: LINKS.enterprise,
            },
            {
              icon: StarIcon,
              iconGradient: StarGradientIcon,
              title: 'Gestion de projets technologiques',
              // description: 'Add Jambo to your platform',
              to: LINKS.partners,
            },
          ],
          isExtended: true,
        },
      ],
    },
    {
      text: 'Company',
      sections: [
        {
          items: [
            {
              icon: PeopleIcon,
              title: 'About us',
              to: LINKS.aboutUs,
            },
            {
              icon: CareerIcon,
              title: 'Careers',
              to: LINKS.careers,
            },
            {
              icon: ChatIcon,
              title: 'Contact',
              to: LINKS.contactSales,
            },
          ],
        },
      ],
    },
  ],

  footer: [
    {
      heading: 'Company',
      items: [
        {
          text: 'About',
          to: LINKS.aboutUs,
        },

        {
          text: 'Careers',
          to: LINKS.careers,
        },
        {
          text: 'Contact Sales',
          to: LINKS.contactSales,
        },
      ],
    },

    {
      heading: 'Social',
      items: [
        {
          text: 'x.com',
          to: LINKS.twitter,
          icon: 'x-icon',
        },
        {
          text: 'LinkedIn',
          to: LINKS.linkedin,
          icon: 'linkedin-icon',
        },
        {
          text: 'YouTube',
          to: LINKS.youtube,
          icon: 'youtube-icon',
        },
      ],
    },
  ],
};

import Apply from 'components/pages/partners/apply';
import Calculator from 'components/pages/partners/calculator';
import Collaboration from 'components/pages/partners/collaboration';
import Hero from 'components/pages/partners/hero';
import Integration from 'components/pages/partners/integration';
import CTAWithElephant from 'components/shared/cta-with-elephant';
import Layout from 'components/shared/layout';
import SplitViewGrid from 'components/shared/split-view-grid';
import Testimonial from 'components/shared/testimonial';
import SEO_DATA from 'constants/seo-data';
import compatibilityIcon from 'icons/ai/compatibility.svg';
import currencyIcon from 'icons/partners/currency.svg';
import speedIcon from 'icons/partners/speed.svg';
import userIcon from 'icons/partners/user.svg';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.partners);

const items = [
  {
    icon: compatibilityIcon,
    title: 'Planification stratégique des projets',
    description:
      'Nous aidons à définir des objectifs clairs et mesurables, à allouer efficacement les ressources et à établir des calendriers de livraison réalistes. Cette approche garantit que chaque projet est aligné sur les objectifs stratégiques de l’entreprise.',
  },
  {
    icon: currencyIcon,
    title: 'Optimisation des coûts et des ressources',
    description:
      'Nos équipes s’assurent que les budgets sont respectés en optimisant l’utilisation des ressources. Nous priorisons les investissements et veillons à ce que chaque dépense soit justifiée et maximisée.',
  },
  {
    icon: userIcon,
    title: 'Suivi et reporting en temps réel',
    description:
      'Grâce à des outils de gestion de projet avancés, nous offrons des suivis en temps réel des progrès de vos projets. Des rapports détaillés et des tableaux de bord personnalisés permettent d’anticiper les risques et d’ajuster les priorités.',
  },
  {
    icon: userIcon,
    title: 'Gestion des risques technologiques',
    description:
      'Les projets technologiques sont souvent confrontés à des défis complexes, notamment en termes de sécurité et de conformité. Nous identifions et atténuons les risques dès les premières phases du projet, garantissant ainsi la continuité et la réussite.',
  },
  {
    icon: speedIcon,
    title: 'Formation et accompagnement',
    description:
      'Nous proposons également des sessions de formation à vos équipes pour assurer une bonne maîtrise des outils technologiques déployés et des méthodologies de gestion de projet. Cela favorise la transition et l’adoption rapide des solutions.',
  },
];

const PartnersPage = () => (
  <Layout headerClassName="!absolute !bg-transparent">
    <Hero />
    <SplitViewGrid
      className="mt-36 xl:mt-[104px] lg:mt-20 md:mt-16"
      titleClassName="!max-w-[380px] 2xl:text-5xl xl:!max-w-none"
      label="NEW"
      title="Services de gestion de projets technologiques proposés"
      description="Une gestion de projets bien structurée est essentielle pour éviter les retards, les dérives budgétaires et garantir le succès. Nous utilisons des méthodologies agiles et des outils avancés pour assurer la réussite de vos projets, de la planification à la livraison, en optimisant la coordination entre équipes techniques et commerciales."
      items={items}
      isGradientLabel
    />
    <Testimonial
      className="mt-44 2xl:mt-40 xl:mt-36 lg:mt-28 md:mt-20"
      quoteClassName="text-[32px] xl:text-[28px] lg:text-xl md:text-lg"
      quote="Travailler sur les projets technologiques chez IPS m’a permis de renforcer mes compétences en gestion agile. Chaque projet est un défi passionnant, et l'équipe assure une coordination parfaite pour garantir leur succès"
      name="keny Lala"
      position="IPS Technologies"
    />
    <Collaboration />
    <Apply />
    <Integration />
    <Calculator />
    <CTAWithElephant
      className="mt-[178px] 2xl:mt-40 xl:mt-[125px] lg:mt-16 sm:mt-0"
      titleClassName="-mr-10 sm:max-w-[300px]"
      buttonClassName="px-[77px] xl:px-10 lg:px-9 sm:px-14"
      title="Nous sommes toujours prêts à vous accompagner."
      description="Que vous ayez besoin d’assistance technique, de conseils pour vos projets ou de plus d’informations sur nos services, n’hésitez pas à nous contacter."
    />
  </Layout>
);

export default PartnersPage;

import CaseStudies from 'components/pages/enterprise/case-studies';
import Faq from 'components/pages/enterprise/faq';
import Features from 'components/pages/enterprise/features';
import Hero from 'components/pages/enterprise/hero';
import HowJamboHelps from 'components/pages/enterprise/how-neon-helps';
import Usage from 'components/pages/enterprise/usage';
import Layout from 'components/shared/layout';
import TestimonialNew from 'components/shared/testimonial-new';
import SEO_DATA from 'constants/seo-data';
import durabilityIcon from 'icons/enterprise/durability.svg';
import expertiseIcon from 'icons/enterprise/expertise.svg';
import multiIcon from 'icons/enterprise/multi.svg';
import recoveryIcon from 'icons/enterprise/recovery.svg';
import scalabilityIcon from 'icons/enterprise/scalability.svg';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.enterprise);

const features = [
  {
    icon: scalabilityIcon,
    title: 'Une base essentielle',
    description:
      'Une infrastructure bien conçue soutient toutes les opérations technologiques de votre organisation.',
  },
  {
    icon: multiIcon,
    title: 'Accompagnement expert',
    description:
      'Nos spécialistes évaluent vos besoins, modernisent vos infrastructures et intègrent des solutions innovantes.',
  },
  {
    icon: recoveryIcon,
    title: 'Scalabilité et résilience',
    description:
      'Anticipez la croissance et les nouvelles demandes grâce à une infrastructure évolutive.',
  },
  {
    icon: durabilityIcon,
    title: 'Sécurité renforcée',
    description: 'Protégez vos données critiques avec des solutions fiables et robustes.',
  },
  {
    icon: expertiseIcon,
    title: 'Performance et fluidité',
    description:
      'Serveurs, réseaux et stockage optimisés garantissent une communication efficace entre vos services.',
  },
];

const caseStudies = [];

const howJamboHelpsTabs = [
  {
    title: 'Audit et conseil en infrastructure',
    challenge: 'Gestion complexe et coûteuse des environnements IT.',
    description:
      'Nous analysons l’ensemble de votre infrastructure IT actuelle pour identifier les points faibles, les redondances, et les améliorations possibles. Nos recommandations visent à optimiser la performance, réduire les coûts, et garantir la résilience de vos systèmes.',
  },
  {
    title: 'Mise en Œuvre d’infrastructures cloud et hybrides',
    challenge:
      'Intégrer des solutions cloud hybrides tout en maintenant la sécurité et la conformité peut être complexe.',
    description:
      'Nous aidons à la transition vers le cloud en proposant des solutions d’infrastructure cloud privée, publique, ou hybride, selon les besoins de votre entreprise. L’objectif est d’offrir une flexibilité maximale tout en garantissant la sécurité et la conformité réglementaire.',
  },
  {
    title: 'Virtualisation des serveurs et des réseaux',
    challenge:
      'La gestion des ressources virtuelles peut entraîner des inefficacités et des risques de sécurité.',
    description:
      'La virtualisation permet d’optimiser les ressources physiques en créant des environnements isolés sur un même matériel. Cette solution permet d’accroître l’efficacité, de réduire les coûts, et de faciliter la gestion des infrastructures.',
  },
  {
    title: 'Gestion des centres de données',
    challenge:
      'La gestion de centres de données obsolètes peut entraîner des coûts élevés et des risques de sécurité.',
    description:
      'Nous concevons et mettons en œuvre des centres de données résilients et sécurisés qui répondent aux besoins croissants des entreprises. Que vous ayez besoin d’un nouveau centre ou d’une mise à jour de vos installations actuelles, nous assurons une gestion efficace et évolutive.',
  },
  {
    title: 'Optimisation et gestion des réseaux',
    challenge:
      'La gestion inefficace des réseaux peut entraîner des interruptions de communication et des baisses de performance.',
    description:
      'La connectivité est essentielle pour la productivité. Nous offrons des services de gestion et d’optimisation des réseaux pour assurer une communication fluide entre vos équipes et vos systèmes. Cela inclut la sécurité des réseaux, la gestion des flux de données, et la surveillance des performances.',
  },
  {
    title: 'Sécurisation des infrastructures',
    challenge:
      ' Les menaces de cybersécurité peuvent compromettre la sécurité des infrastructures et entraîner des pertes de données critiques.',
    description:
      'La sécurité de vos infrastructures est cruciale pour protéger vos actifs numériques. Nous mettons en place des solutions de sécurité avancées pour protéger vos réseaux, serveurs, et systèmes de stockage contre les menaces internes et externes.',
  },
  {
    title: 'Scalabilité et résilience',
    challenge:
      "L'incapacité d'adapter rapidement l'infrastructure aux nouvelles exigences peut entraîner des perturbations et des interruptions d'activité.",
    description:
      'Nos solutions sont conçues pour évoluer avec votre entreprise. Nous mettons en place des infrastructures qui s’adaptent aux nouvelles exigences et permettent une reprise rapide après un incident, garantissant ainsi la continuité des opérations.',
  },
];

const faqItems = [
  {
    question: 'Pourquoi passer à une infrastructure cloud ?',
    answer: `Le cloud offre une flexibilité inégalée, vous permettant d’adapter vos ressources en fonction des besoins. Cela réduit les coûts d’exploitation tout en garantissant une disponibilité continue et une sécurité renforcée.`,
    initialState: 'open',
  },
  {
    question: "Qu'est-ce que la virtualisation et pourquoi est-elle importante ?",
    answer: `La virtualisation permet de créer plusieurs environnements virtuels sur un même serveur physique, ce qui optimise l’utilisation des ressources, facilite la gestion et réduit les coûts d’infrastructure.`,
  },
  {
    question: 'Comment sécurisez-vous nos infrastructures ??',
    answer: `Nous mettons en place des protocoles de sécurité rigoureux incluant la protection des réseaux, la surveillance des accès, et des systèmes de détection des menaces en temps réel, garantissant ainsi la protection de vos données sensibles.`,
  },
  {
    question: 'Quelle est la différence entre une infrastructure cloud privée et hybride ?',
    answer: `Une infrastructure cloud privée est dédiée à une seule entreprise, garantissant un contrôle total sur les données, tandis qu’une infrastructure hybride combine des éléments privés et publics, offrant une plus grande flexibilité et scalabilité.`,
  },
];

const EnterprisePage = () => (
  <Layout headerClassName="!absolute !bg-transparent">
    <Hero />
    <TestimonialNew
      className="mt-[118px] xl:mt-[80px] lg:mt-[76px]"
      quote="Chez IPS Technologies, nous mettons un point d'honneur à fournir des infrastructures robustes, sécurisées et évolutives, adaptées aux besoins spécifiques de chaque entreprise. Nos solutions garantissent la performance et la résilience, tout en assurant une sécurité optimale pour soutenir la croissance à long terme. "
      name="Cyrille Tsoho"
      position="PDG du groupe Industrial Power Solutions"
      isPriority
    />
    <Features
      title="Pourquoi une infrastructure technologique solide est-elle essentielle ? "
      items={features}
    />
    <Usage />
    <CaseStudies items={caseStudies} />
    <HowJamboHelps tabs={howJamboHelpsTabs} />
    <TestimonialNew
      className="mt-[126px] xl:mt-[106px] lg:mt-[70px] md:mt-[58px]"
      quote="Grâce aux solutions d'infrastructure d'IPS Technologies, nous avons renforcé la sécurité et la résilience de nos systèmes tout en optimisant nos performances. Leur expertise nous a permis de nous concentrer sur notre croissance, en toute sérénité."
      name="PAFIC Sarl "
      position="Indtries Agro-alimentaires"
    />
    <Faq items={faqItems} />
  </Layout>
);

export default EnterprisePage;

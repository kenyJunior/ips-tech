import Button from 'components/shared/button';
import Container from 'components/shared/container/container';
import LINKS from 'constants/links';

const Hero = () => (
  <section className="hero safe-paddings relative overflow-hidden pt-[170px] xl:pt-[150px] lg:pt-28 md:pt-24">
    <Container className="relative z-10 flex flex-col items-center text-center" size="medium">
      <h1 className="mx-auto font-title text-[68px] font-medium leading-[0.9] tracking-extra-tight xl:text-[58px] lg:text-5xl md:px-5 md:text-4xl">
        Solutions d’infrastructures <br className="xs:hidden" /> technologiques robustes et
        sécurisées
      </h1>
      <p className="mt-4 text-lg leading-snug tracking-extra-tight text-gray-new-80 xl:mt-3 lg:mx-auto lg:max-w-[380px] lg:text-base">
        Dans un environnement technologique en constante évolution, disposer d’infrastructures
        robustes est essentiel pour garantir la continuité des activités et la sécurité des données.
        Chez IPS Technologies, nous proposons des solutions d’infrastructure adaptées aux besoins
        spécifiques de chaque entreprise, assurant une performance optimale, une résilience accrue
        et une évolutivité à long terme.
      </p>
      <Button
        className="relative mt-8 h-12 w-[156px] text-base !font-semibold tracking-tight lg:mt-7 lg:h-11 md:mt-6"
        theme="primary"
        to={LINKS.contactSales}
        target="_blank"
      >
        Contact us
      </Button>
    </Container>
  </section>
);

export default Hero;

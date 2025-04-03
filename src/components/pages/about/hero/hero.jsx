import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import LINKS from 'constants/links';

const Hero = () => (
  <section className="hero safe-paddings pt-[194px] xl:pt-[154px] lg:pt-[46px] md:pt-[34px]">
    <Container
      className="flex justify-between xl:max-w-[832px] lg:justify-center lg:gap-x-[60px] md:flex-col md:!px-5"
      size="960"
    >
      <header className="max-w-[510px] grow xl:max-w-[426px] lg:max-w-[356px] md:max-w-none">
        <Heading
          className="text-6xl font-medium leading-[0.9] tracking-extra-tight xl:text-5xl lg:text-4xl md:text-[36px]"
          tag="h1"
          theme="black"
        >
          Partenaire de transformation digitale
        </Heading>
        <div className="mt-7 flex items-center gap-6 lg:mt-6 md:mt-5 md:gap-x-[18px]">
          <Button
            className="h-11 w-[178px] !font-semibold tracking-tighter lg:h-10 md:h-9 md:w-40 md:text-sm"
            theme="primary"
          >
            Contactez-Nous
          </Button>
          <Link
            className="text-[15px] font-medium tracking-tight md:text-sm"
            to={LINKS.careers}
            theme="white"
          >
            Pour tous votre transformation numérique
          </Link>
        </div>
      </header>
      <p className="max-w-sm pt-3 text-lg leading-snug tracking-extra-tight text-gray-new-50 xl:max-w-[352px] xl:pt-1.5 lg:max-w-[288px] lg:pt-1 lg:text-base md:mt-7 md:max-w-none md:pt-0">
        IPS Technologies est plus qu&apos;un fournisseur de technologie - nous sommes les
        architectes de l&apos;avenir numérique de vos entreprises. Avec une compréhension
        approfondie du paysage commercial unique du continent, nous fournissons des solutions
        innovantes et sur mesure qui permettent aux organisations de prospérer dans une économie
        numérique en constante évolution.
      </p>
    </Container>
  </section>
);

export default Hero;

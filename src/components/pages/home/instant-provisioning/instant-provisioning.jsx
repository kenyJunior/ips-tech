import Container from 'components/shared/container';

import ActiveTabContext from './active-tab-context';
import ConnectionString from './connection-string';
import DotsAnimation from './dots-animation';

const InstantProvisioning = () => (
  <section className="instant-provising safe-paddings relative mt-[168px] xl:mt-28 lg:mt-24 sm:mt-20">
    <Container className="flex flex-wrap justify-center gap-x-[58px] xl:gap-x-[29px]" size="1100">
      <ActiveTabContext>
        <div className="w-[384px] xl:w-[352px] lg:w-[256px] md:w-full md:max-w-[580px]">
          <h2 className="font-title text-[68px] font-medium leading-[0.9] tracking-extra-tight text-white xl:text-[56px] lg:text-[44px] sm:text-[32px]">
            Innover aujourd'hui pour l'avenir numérique de votre entreprise
          </h2>
          <p className="mt-[18px] text-xl font-light tracking-extra-tight text-gray-new-70 xl:mt-4 xl:text-lg lg:mt-3 lg:text-base md:mt-2">
            IPS Technologies est une entreprise numérique dédiée à fournir des solutions de pointes
            adaptées. Nous révolutionnons le paysage technologique avec une solide équipe techniques
            pour soutenir votre transformation numérique.
          </p>
        </div>
        <div className="relative flex w-[652px] flex-col pb-[171px] pt-[100px] xl:w-[580px] xl:pb-[148px] xl:pt-[84px] lg:w-[417px] lg:pb-[105px] lg:pt-[61px] md:-mt-4 md:w-full md:max-w-[580px] md:pb-36 md:pt-0 sm:-mt-8 sm:overflow-hidden sm:pt-4">
          <div className="pointer-events-none absolute -left-20 top-32 z-0 h-[133px] w-[205px] rounded-[100%] border border-white bg-[#16182D] opacity-40 blur-3xl md:top-0" />
          <div
            className="pointer-events-none absolute -right-20 top-8 h-[133px] w-[398px] rounded-[100%] bg-[#16182D] opacity-40 blur-3xl"
            aria-hidden
          />
          <ConnectionString url="Industrial Power Solutions Technologies" />
          <DotsAnimation
            className="absolute -bottom-1.5 left-1/2 aspect-[3.49726] w-[640px] -translate-x-1/2 mix-blend-lighten xl:w-[568px] lg:w-[417px] md:bottom-0 md:h-40 md:w-full md:[mask-image:linear-gradient(to_bottom,black,black_calc(100%-40px),transparent)] sm:overflow-hidden"
            src="/animations/pages/home/dots-stack.riv"
            artboard="dots"
            intersectionRootMargin="0px 0px 600px 0px"
            animationRootMargin="0px 0px 300px 0px"
          />
        </div>

        <div className="w-[384px] pt-7 xl:w-[352px] xl:pt-1 lg:w-[256px] lg:pt-0 md:w-full md:max-w-[580px]">
          <h2 className="font-title text-[68px] font-medium leading-[0.9] tracking-extra-tight text-white xl:text-[56px] lg:text-[44px] md:mt-2 sm:text-[32px]">
            Transformer l'avenir avec des {` `}
            <br className="md:hidden" />
            solutions technologiques avancées
          </h2>
          <p className="mt-7 font-light tracking-extra-tight text-gray-new-70 xl:mt-5 xl:max-w-xs xl:text-lg lg:mt-4 lg:text-base md:mt-2.5 md:max-w-none">
            L'innovation technologique est aujourd'hui un levier essentiel pour accélérer la
            transformation des entreprises, des gouvernements et des organisations dans le monde.
            <p>
              IPS Technologies se positionne en tant que partenaire stratégique en intégrant des
              solutions de pointe dans des domaines cruciaux comme l'Intelligence artificielle (IA),
              l'analyse de données, l'automatisation, l'intégration des solutions Iot Intelligente
              et la gestion des projets...
            </p>
          </p>
        </div>
      </ActiveTabContext>
    </Container>
  </section>
);

export default InstantProvisioning;

import clsx from 'clsx';

import Container from 'components/shared/container';
import LINKS from 'constants/links';
import digitImage from 'images/pages/home/trusted/digit.jpg';
import elephantImage from 'images/pages/home/trusted/goat.jpg';
import socMdImage from 'images/pages/home/trusted/goat2.jpg';
import githubImage from 'images/pages/home/trusted/linkedin.png';
import socImage from 'images/pages/home/trusted/soc.jpg';

import Card from './card';

const Trusted = () => (
  <section className="trusted mt-[224px] xl:mt-[70px] lg:mt-20">
    <Container className="xl:max-w-[864px]" size="1152">
      <h2
        className={clsx(
          '-mb-14 bg-white bg-clip-text text-center font-title text-[152px] font-medium leading-none -tracking-[0.05em] text-transparent',
          'bg-[radial-gradient(34.86%_84.21%_at_71.59%_84.21%,_#000_17.9%,_#FFF_64%)]',
          'xl:-mb-[46px] xl:text-[112px] lg:mb-8 lg:bg-none lg:text-[72px] lg:text-white sm:mb-7 sm:text-[40px] sm:leading-[0.95em] sm:tracking-tighter'
        )}
      >
        Trusted By IPS
      </h2>
      <div
        className={clsx(
          'grid grid-cols-[22.22%_27.86%_25%_auto] items-end justify-center gap-x-8 px-0',
          'xl:mt-1.5 xl:gap-6 lg:mx-auto lg:max-w-3xl lg:grid-cols-[1fr_1fr] lg:gap-5 lg:px-8 md:px-0 sm:mx-auto sm:max-w-xs sm:grid-cols-1 sm:gap-3'
        )}
      >
        <Card
          className="aspect-[256/198] justify-center lg:order-3 lg:aspect-[310/220] sm:order-5 sm:aspect-[320/220]"
          borderClassName="border-linear border-image-home-trusted-github-card"
          bgClassName="inset-0 sm:top-auto sm:bottom-[-26%]"
          bgImage={githubImage}
          to={LINKS.linkedin}
        >
          <span className="mx-auto flex items-center font-medium text-white transition-colors duration-200 group-hover:text-green-45">
            ips technologies
          </span>
        </Card>
        <Card
          className="relative z-10 aspect-[321/303] lg:order-1 lg:aspect-[310/220] sm:aspect-[320/220]"
          borderClassName="border-linear border-image-home-trusted-digit-card"
          bgClassName="inset-0"
          bgImage={digitImage}
        >
          <strong className="font-medium text-white">Données Utilisées</strong>{' '}
          <span className="font-light" />
        </Card>
        <Card
          className={clsx(
            'aspect-[288/428] lg:order-2 lg:aspect-[310/220] lg:shadow-none sm:aspect-[320/220]',
            'shadow-[0px_-10px_62px_12px_rgba(0,0,0,0.9),30px_10px_60px_0px_rgba(0,0,0,0.8),-50px_10px_60px_0px_rgba(0,0,0,0.9)]'
          )}
          borderClassName="border-gray-new-10 border"
          bgClassName="w-[510px] left-[-39%] top-[-18%] xl:w-[382px] lg:w-[104%] lg:left-[-3%] lg:top-[-41%] sm:w-full sm:left-0"
          bgImage={elephantImage}
        >
          <strong className="font-medium text-white">Intelligence Artificielle.</strong>
        </Card>
        <Card
          className="aspect-[192/247] lg:order-4 lg:aspect-[310/220] lg:justify-center sm:aspect-[320/220]"
          borderClassName="border-linear border-image-home-trusted-soc-card lg:border-image-home-trusted-soc-card-md"
          bgClassName="top-[-43%] left-[-43%] w-[454px] xl:w-[342px] lg:inset-0 lg:w-full lg:h-full"
          bgImage={socImage}
          mobileBgImage={socMdImage}
        >
          <span className="flex items-end font-medium text-white transition-colors duration-200 group-hover:text-green-45">
            <span>Automatisation</span>
          </span>
        </Card>
      </div>
    </Container>
  </section>
);

export default Trusted;

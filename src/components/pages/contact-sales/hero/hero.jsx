import clsx from 'clsx';

import Container from 'components/shared/container/container';
import Heading from 'components/shared/heading';

import ContactForm from './contact-form';

const Hero = () => (
  <section className="relative z-10 grow overflow-hidden bg-black-pure pb-36 pt-[168px] xl:pb-20 xl:pt-32 lg:py-28 md:py-[100px]">
    <Container className="xl:max-w-5xl lg:max-w-3xl md:px-5" size="1216">
      <div className="flex justify-between lg:mx-auto lg:max-w-xl lg:flex-col lg:gap-14">
        <div className="flex max-w-xl flex-1 flex-col pt-8 xl:max-w-[448px] lg:max-w-full lg:items-center lg:pt-0 lg:text-center">
          <div className="flex max-w-[544px] flex-col xl:max-w-sm lg:max-w-full lg:items-center">
            <Heading
              className="relative w-fit font-title text-[56px] font-medium leading-none tracking-tight text-white xl:text-[48px] lg:text-[40px]"
              tag="h1"
              theme="white"
            >
              Let&apos;s Connect
              <span
                className={clsx(
                  'pointer-events-none absolute left-0 top-0 -z-10 size-[706px] translate-x-[-45%] translate-y-[-40%] rounded-full',
                  'bg-[radial-gradient(50%_50%_at_50%_50%,rgba(30,41,62,.65),transparent)]',
                  'xl:size-[596px] lg:size-[596px] sm:size-[466px]'
                )}
                aria-hidden
              />
            </Heading>
            <p className="mt-4 text-pretty text-xl leading-snug tracking-tight text-gray-new-80 xl:text-lg xl:leading-normal lg:mt-3 md:text-base">
              Nous sommes à votre disposition pour répondre à toutes vos questions concernant nos
              solutions technologiques, nos plans tarifaires, les options de contrat personnalisées
              et l'assistance pour les migrations.
            </p>
          </div>
        </div>
        <div className="relative max-w-xl shrink-0 xl:max-w-[512px] lg:max-w-full">
          <ContactForm />
          <span
            className={clsx(
              'pointer-events-none absolute bottom-0 right-0 size-[725px] translate-x-[30%] translate-y-[35%]',
              'bg-[radial-gradient(50%_50%_at_50%_50%,rgba(30,52,62,.4)_20%,rgba(30,52,62,0))]',
              'xl:size-[580px] lg:translate-y-0 sm:size-[464px]'
            )}
            aria-hidden
          />
        </div>
      </div>
    </Container>
  </section>
);

export default Hero;

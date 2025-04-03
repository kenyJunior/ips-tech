import clsx from 'clsx';

import Container from 'components/shared/container/container';

const Autoscaling = () => (
  <section className="autoscaling safe-paddings pt-40 xl:pt-[136px] lg:pt-[108px] md:pt-20">
    <Container className="flex flex-col items-center" size="960">
      <header className="flex w-full justify-between lg:gap-28 sm:flex-col sm:items-center sm:gap-4 sm:text-center">
        <h2 className="max-w-md font-title text-[48px] font-medium leading-[0.9] tracking-tighter xl:text-[44px] xl:leading-none lg:flex-1 lg:text-4xl sm:max-w-full sm:text-[32px]">
          Pourquoi choisir IPS Technologies pour vos formations ?{' '}
        </h2>
        <p
          className={clsx(
            'mt-1 max-w-md text-lg font-light leading-snug tracking-extra-tight text-gray-new-70 xl:font-normal xl:tracking-extra-tight lg:mt-0 lg:flex-1 lg:text-base sm:max-w-full',
            '[&_a:hover]:border-gray-new-70 [&_a]:border-b [&_a]:border-gray-new-70/40 [&_a]:transition-colors [&_a]:duration-300'
          )}
        >
          Nos formations, conçues par des experts, sont adaptées à chaque secteur d’activité, qu’il
          s’agisse de la finance, de la santé ou de l’énergie. Grâce à des contenus personnalisés et
          une approche pratique, nous vous aidons à acquérir des compétences directement
          applicables. À l’issue de chaque programme, un certificat de réussite reconnu vous est
          délivré.
        </p>
      </header>
    </Container>
  </section>
);

export default Autoscaling;

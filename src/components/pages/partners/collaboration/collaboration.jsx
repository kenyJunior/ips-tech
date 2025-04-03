import Container from 'components/shared/container';
import GradientLabel from 'components/shared/gradient-label';

const Collaboration = () => (
  <section className="collaboration safe-paddings mt-[152px] 2xl:mt-36 lg:mt-28 md:mt-20">
    <Container className="grid-gap-x grid grid-cols-12" size="medium">
      <div className="col-span-8 col-start-3 flex flex-col items-center xl:col-span-10 xl:col-start-2 lg:col-span-full lg:col-start-1">
        <GradientLabel>IPS Tech</GradientLabel>
        <h2 className="mt-4 text-center font-title text-[48px] font-medium leading-none tracking-extra-tight lg:text-4xl sm:text-[36px]">
          IPS Technologies
        </h2>
        <p className="mt-3 text-center text-lg font-light leading-snug sm:text-base">
          Nous sommes toujours prêts à vous accompagner.
        </p>
      </div>
    </Container>
  </section>
);

export default Collaboration;

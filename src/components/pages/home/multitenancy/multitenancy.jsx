import Container from 'components/shared/container';

const Multitenancy = () => (
  <section className="multitenancy safe-paddings mt-8 overflow-hidden xl:-mt-9 lg:-mt-7 md:-mt-2 sm:mt-0">
    <Container className="relative z-10 xl:max-w-[704px] lg:pl-24" size="960">
      <h2 className="font-title text-[68px] font-medium leading-[0.9] tracking-extra-tight text-white xl:text-[56px] lg:text-[44px] sm:text-[32px]">
        Des milliers de solutions
        <br />
        Zéro complexité.
      </h2>
    </Container>
    {/* 
        Video optimization parameters:
        -mp4: -pix_fmt yuv420p -vf scale=3840:-2 -movflags faststart -vcodec libx264 -crf 20
        -webm: -c:v libvpx-vp9 -crf 20 -vf scale=3840:-2 -deadline best -an
    */}
    <Container
      className="relative z-10 mt-14 xl:mt-[50px] xl:max-w-[704px] lg:mt-[42px] lg:pl-24 md:mt-11 sm:mt-[22px]"
      size="960"
    >
      <p className="max-w-[608px] text-xl leading-snug tracking-extra-tight text-gray-new-50 xl:max-w-xl xl:text-lg lg:max-w-[480px] lg:text-base">
        Exploitez notre expertise en transformation digitale, data et IA pour déployer des
        architectures évolutives et automatisées. Passez à l’échelle sans effort et optimisez vos
        coûts grâce à des solutions intelligentes et adaptatives.
      </p>
    </Container>
  </section>
);

export default Multitenancy;

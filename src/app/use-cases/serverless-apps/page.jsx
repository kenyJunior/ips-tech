import Autoscaling from 'components/pages/serverless-apps/autoscaling';
import Features from 'components/pages/serverless-apps/features';
import Hero from 'components/pages/serverless-apps/hero';
import Layout from 'components/shared/layout';
import TestimonialNew from 'components/shared/testimonial-new';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.serverlessApps);

const ServerlessAppsPage = () => (
  <Layout headerWithBorder isHeaderSticky>
    <Hero />
    <Autoscaling />
    <TestimonialNew
      className="pt-40 xl:pt-[136px] lg:pt-[104px] md:pt-20"
      quote="Se former avec nous, c’est acquérir des compétences concrètes et adaptées aux exigences du marché. Nos programmes allient théorie et pratique pour garantir une montée en compétence efficace. Rejoignez-nous et donnez un nouvel élan à votre carrière !"
      name="David David"
      position="Analyste de données IPS Technologies"
    />
    <Features />
  </Layout>
);

export default ServerlessAppsPage;

import Hero from 'components/pages/brand/hero';
import Logos from 'components/pages/brand/logos';
import Layout from 'components/shared/layout';
import getMetadata from 'utils/get-metadata';

const BrandPage = () => (
  <Layout>
    <Hero />
    <Logos />
  </Layout>
);

export const metadata = getMetadata({
  title: 'Jambo Logo + Brand Guidelines',
  description: 'Download the official Jambo Logo and Brand Assets.',
});

export default BrandPage;

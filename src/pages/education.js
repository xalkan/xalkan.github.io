import React from 'react';

import { Layout, SEO } from 'components';
import { About } from 'containers';

const EducationPage = () => (
  <Layout>
    <SEO title='Education' />
    <About />
  </Layout>
);

export default EducationPage;
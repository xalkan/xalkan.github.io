import React from 'react';

import { Layout, SEO } from 'components';
import { Education } from 'containers';

const EducationPage = () => (
  <Layout>
    <SEO title='Education' />
    <Education />
  </Layout>
);

export default EducationPage;
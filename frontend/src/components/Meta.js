import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to ProShop',
  desciption: 'We sell the best urban motorcycle gear',
  keywords: 'motorcycle gear, buy motorcyle gear, urban motorcycle gear',
};

export default Meta;

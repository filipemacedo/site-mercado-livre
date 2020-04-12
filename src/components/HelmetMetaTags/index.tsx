import React from 'react';

import { Helmet } from 'react-helmet';
import applicationConfig from '../../config/application';

export interface HelmetMetaTagsProps {
  title?: string;
  description?: string;
  imagePreview?: string;
}

const HelmetMetaTags: React.FC<HelmetMetaTagsProps> = ({
  title = applicationConfig.name,
  description = '',
  imagePreview = '',
}) => {
  const cleanDescription = description.replace(/\n/g, ' ');
  const url = window.location.href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta content="website" property="og:type" />
      <meta content={url} property="og:url" />
      <meta content={title} property="og:title" />
      <meta content={cleanDescription} property="og:description" />
      <meta content={imagePreview} property="og:image" />

      <meta content={url} property="twitter:url" />
      <meta content={title} property="twitter:title" />
      <meta content={description} property="twitter:description" />
      <meta content={imagePreview} property="twitter:image" />
    </Helmet>
  );
};

export default HelmetMetaTags;

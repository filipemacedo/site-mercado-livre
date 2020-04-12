import React from 'react';
import ErrorBox from '../components/ErrorBox';

export default {
  title: 'ErrorBox',
  component: ErrorBox,
};

export const CustomError = () => <ErrorBox description="Not found" />;

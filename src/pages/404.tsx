import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import { CustomPageProps } from '../types';

function NotFoundPage(props: CustomPageProps) {
  const { location } = props;
  const { state } = location;
  const { t } = useTranslation();
  return (
    <Layout
      contentTitle={`${t('404:page-not-found')} 🤔`}
      currentTheme={state && state.currentTheme}
    />
  );
}

export default NotFoundPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      ...LocaleFragment
    }
  }
`;

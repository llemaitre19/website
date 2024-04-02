import React from 'react';
import { HeadProps, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import { CustomPageProps } from '../types';
import Section from '../components/Section';
import { WxWidgetsLinkIcon } from '../components/LinkIcons';
import SEO, { getLanguageFromHeadData, translateFromHeadData } from '../components/seo';

function CppPage(props: CustomPageProps) {
  const { location } = props;
  const { state } = location;
  const { t } = useTranslation();
  return (
    <Layout contentTitle={t('cpp:content-title')} currentTheme={state && state.currentTheme}>
      <Section id="cpp" title="C++">
        {t('cpp:cpp')}
        <WxWidgetsLinkIcon />
        .
      </Section>
      <Section id="c" title="C">
        {t('cpp:c')}
      </Section>
    </Layout>
  );
}

export default CppPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      ...LocaleFragment
    }
  }
`;

export function Head(props: HeadProps<any>) {
  return (
    <SEO
      description={translateFromHeadData(props, 'cpp', 'content-title')}
      lang={getLanguageFromHeadData(props)}
    />
  );
}

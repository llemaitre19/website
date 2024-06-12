import React from 'react';
import { HeadProps, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import { CustomPageProps } from '../types';
import Section from '../components/Section';
import { DjangoLinkIcon, ReactLinkIcon, WxWidgetsLinkIcon } from '../components/LinkIcons';
import SEO, { getLanguageFromHeadData, translateFromHeadData } from '../components/seo';

function IndexPage(props: CustomPageProps) {
  const { location } = props;
  const { state } = location;
  const { t } = useTranslation();
  return (
    <Layout contentTitle={t('index:content-title')} currentTheme={state && state.currentTheme}>
      <Section id="areas" title={t('index:areas.title')}>
        <ul>
          <li>
            {t('index:areas.web-app')}
          </li>
          <li>
            {t('index:areas.desktop-app')}
          </li>
          <li>
            {t('index:areas.low-level')}
          </li>
        </ul>
      </Section>
      <Section id="skils" title={t('index:skills.title')}>
        <ul>
          <li>
            {t('index:skills.javascript')}
            {' ('}
            <ReactLinkIcon />
            ).
          </li>
          <li>
            {t('index:skills.python')}
            {' ('}
            <DjangoLinkIcon />
            ).
          </li>
          <li>
            {t('index:skills.cpp')}
            {' ('}
            <WxWidgetsLinkIcon />
            ).
          </li>
          <li>
            {t('index:skills.others')}
          </li>
        </ul>
      </Section>
    </Layout>
  );
}

export default IndexPage;

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
      description={translateFromHeadData(props, 'metadata', 'description')}
      lang={getLanguageFromHeadData(props)}
    />
  );
}

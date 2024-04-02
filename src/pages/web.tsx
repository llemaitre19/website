import React from 'react';
import { HeadProps, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import { CustomPageProps } from '../types';
import Section from '../components/Section';
import {
  DjangoLinkIcon, MuiLinkIcon, PostgreSQLLinkIcon, ReactLinkIcon, ReduxLinkIcon,
} from '../components/LinkIcons';
import SEO, { getLanguageFromHeadData, translateFromHeadData } from '../components/seo';

function WebPage(props: CustomPageProps) {
  const { location } = props;
  const { state } = location;
  const { t } = useTranslation();
  return (
    <Layout
      contentTitle={t('web:content-title')}
      contentIntro={t('web:content-intro')}
      currentTheme={state && state.currentTheme}
    >
      <Section id="frontend" title={t('web:frontend.title')}>
        <ul>
          <li>
            <ReactLinkIcon />
            {t('web:frontend.react')}
          </li>
          <li>
            <ReduxLinkIcon />
            {t('web:frontend.redux')}
          </li>
          <li>
            <MuiLinkIcon />
            {t('web:frontend.mui')}
          </li>
        </ul>
      </Section>
      <Section id="backend" title={t('web:backend.title')}>
        <ul>
          <li>
            <DjangoLinkIcon />
            {t('web:backend.django')}
          </li>
          <li>
            <a href="https://www.django-rest-framework.org" aria-label="Django Rest Framework">
              Django Rest Framework
            </a>
            {t('web:backend.drf')}
          </li>
        </ul>
      </Section>
      <Section id="database" title={t('web:database.title')}>
        <PostgreSQLLinkIcon />
        {t('web:database.postgresql')}
      </Section>
    </Layout>
  );
}

export default WebPage;

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
      description={translateFromHeadData(props, 'web', 'content-title')}
      lang={getLanguageFromHeadData(props)}
    />
  );
}

import React from 'react';
import { HeadProps, graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import { CustomPageProps } from '../types';
import Section from '../components/Section';
import SmallInfo from '../components/SmallInfo';
import { DjangoLinkIcon, ReactLinkIcon, WxWidgetsLinkIcon } from '../components/LinkIcons';
import SEO, { getLanguageFromHeadData, translateFromHeadData } from '../components/seo';

function IndexPage(props: CustomPageProps) {
  const { location } = props;
  const { state } = location;
  const { t } = useTranslation();
  return (
    <Layout contentTitle={t('index:content-title')} currentTheme={state && state.currentTheme}>
      <Section id="job" title={t('index:job.title')}>
        <p>
          {t('index:job.intro')}
        </p>
        <ul>
          <li>
            {t('index:job.web-app')}
          </li>
          <li>
            {t('index:job.desktop-app')}
          </li>
          <li>
            {t('index:job.low-level')}
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
      <Section id="services" title={t('index:services.title')}>
        <ul>
          <li>
            {t('index:services.quotation.main')}
            <br />
            <SmallInfo>{t('index:services.quotation.info')}</SmallInfo>
          </li>
          <li>
            {t('index:services.assignment.main')}
            <br />
            <SmallInfo>{t('index:services.assignment.info')}</SmallInfo>
          </li>
          <li>
            {t('index:services.time-spent.main')}
            <br />
            <SmallInfo>{t('index:services.time-spent.info')}</SmallInfo>
          </li>
        </ul>
      </Section>
      <Section id="commitments" title={t('index:commitments.title')}>
        <ul>
          <li>
            {t('index:commitments.specs-respect')}
          </li>
          <li>
            {t('index:commitments.quality-code')}
          </li>
          <li>
            {t('index:commitments.confidentiality')}
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

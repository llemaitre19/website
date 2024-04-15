import React from 'react';
import { HeadProps, graphql } from 'gatsby';
import { useTranslation, Trans } from 'react-i18next';
import Layout from '../components/Layout';
import { CustomPageProps } from '../types';
import Section from '../components/Section';
import {
  EmacsLinkIcon, GatsbyLinkIcon, JtsxLinkIcon, WebsiteLinkIcon, MelpaLinkIcon,
} from '../components/LinkIcons';
import SEO, { getLanguageFromHeadData, translateFromHeadData } from '../components/seo';

function ProjectsPage(props: CustomPageProps) {
  const { location } = props;
  const { state } = location;
  const { t } = useTranslation();
  return (
    <Layout
      contentIntro={t('projects:content-intro')}
      contentTitle={t('projects:content-title')}
      currentTheme={state && state.currentTheme}
    >
      <Section
        id="jtsx"
        title={t('projects:jtsx.title')}
      >
        <ul>
          <li>
            <Trans i18nKey="projects:jtsx.description" components={{ comp: <EmacsLinkIcon /> }} />
          </li>
          <li>
            <Trans i18nKey="projects:jtsx.repository" components={{ comp: <JtsxLinkIcon /> }} />
          </li>
          <li>
            <Trans
              i18nKey="projects:jtsx.package-manager"
              components={{ comp: <MelpaLinkIcon /> }}
            />
          </li>
        </ul>
      </Section>
      <Section id="website" title="Ce site Web">
        <ul>
          <li>
            <Trans i18nKey="projects:website.gatsby" components={{ comp: <GatsbyLinkIcon /> }} />
          </li>
          <li>
            {t('projects:website.pre-rendered')}
          </li>
          <li>
            <Trans
              i18nKey="projects:website.repository"
              components={{ comp: <WebsiteLinkIcon /> }}
            />
          </li>
        </ul>
      </Section>
    </Layout>
  );
}

export default ProjectsPage;

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
      description={translateFromHeadData(props, 'projects', 'content-intro')}
      lang={getLanguageFromHeadData(props)}
      title={translateFromHeadData(props, 'projects', 'content-title')}
    />
  );
}

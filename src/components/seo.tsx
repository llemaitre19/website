import React, { PropsWithChildren } from 'react';
import { HeadProps } from 'gatsby';
import { useSiteMetadata } from '../hooks/use-site-metadata';

type SEOProps = {
  description: string,
  lang: string,
  pathname?: string,
};

export default function SEO(props: PropsWithChildren<SEOProps>) {
  const { description, lang, pathname } = props;
  const {
    author, children, siteUrl, title,
  } = useSiteMetadata();

  return (
    <>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta name="siteUrl" content={`${siteUrl}/${pathname}`} />
      <meta name="title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {children}
    </>
  );
}

SEO.defaultProps = {
  pathname: 'test',
};

// Workaround function to use translated content inside meta tag.
// See https://github.com/gatsbyjs/gatsby/issues/36458
export function translateFromHeadData({ data }: HeadProps<any>, ns: string, key: string) {
  try {
    const dataLanguage = data.locales.edges.find((e: any) => e.node.ns === ns)?.node.data;
    const t = JSON.parse(dataLanguage);
    return t[key];
  } catch (error) {
    return key;
  }
}

export function getLanguageFromHeadData({ data }: HeadProps<any>) {
  try {
    return data.locales.edges[0].node.language;
  } catch (error) {
    return 'fr';
  }
}

import { graphql, useStaticQuery } from 'gatsby';

export function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          siteUrl
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
}

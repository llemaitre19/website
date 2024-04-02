import { graphql } from 'gatsby';

export const query = graphql`
  fragment LocaleFragment on LocaleConnection {
      edges {
        node {
          ns
          data
          language
        }
      }
  }`;

import { PageProps } from 'gatsby';
import { LIGHT_THEME, DARK_THEME } from './constants';

export type ThemeType = typeof LIGHT_THEME | typeof DARK_THEME;
type CustomLocationState = {
  currentTheme: ThemeType,
};
export type CustomPageProps = PageProps<object, object, CustomLocationState>;

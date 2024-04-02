import React from 'react';
module.exports = {
  // this mock makes sure any components using the translate hook can use it without a warning being
  // shown
  useTranslation: jest.fn().mockImplementation(() => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  }),
  initReactI18next: jest.fn().mockImplementation({
    type: '3rdParty',
    init: () => {},
  }),
  Trans: jest.fn().mockImplementation(({ i18nKey, ns, ...rest}) => (
    React.createElement('span', rest, i18nKey)
  )),
}

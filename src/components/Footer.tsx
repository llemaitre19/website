import React, { useState } from 'react';
import {
  faCookie, faCopyright, faEnvelope, faFileContract, faLocationDot, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import {
  alignDotClass, buttonClass, cookiesClass, footerClass, footerContainerClass, leftFooterClass,
  linksClass, rightFooterClass,
} from './Footer.css';
import FaIcon from './FaIcon';
import { iconClass } from './FaIcon.css';
import LegalNotices from './LegalNotices';

function Footer() {
  const { t } = useTranslation();
  const [legalNoticesOpened, setLegalNoticesOpened] = useState(false);

  const showLegalNotices = () => {
    setLegalNoticesOpened(true);
  };

  const hideLegalNotices = () => {
    setLegalNoticesOpened(false);
  };

  return (
    <footer className={footerContainerClass}>
      <div className={footerClass}>
        <div className={leftFooterClass}>
          <div className={linksClass}>
            <a href="https://github.com/llemaitre19" aria-label="Github">
              <FaIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/llemaitre19" aria-label="Linkedin">
              <FaIcon icon={faLinkedin} />
            </a>
          </div>
          <span>
            <FaIcon className={iconClass} icon={faEnvelope} />
            <a href="mailto:loic.lemaitre@develem.fr">loic.lemaitre@develem.fr</a>
          </span>
          <span>
            <FaIcon className={iconClass} icon={faPhone} />
            {t('common:phone-index')}
            6 62 57 43 88
          </span>
          <span>
            <FaIcon className={iconClass} icon={faLocationDot} />
            19500 Collonges-La-Rouge — France
          </span>
        </div>
        <div className={rightFooterClass}>
          <span className={cookiesClass}>
            <FaIcon className={iconClass} icon={faCookie} banned />
            {t('footer:no-cookies')}
          </span>
          <span className={alignDotClass}>
            <button className={buttonClass} type="button" onClick={showLegalNotices}>
              <FaIcon className={iconClass} icon={faFileContract} />
              {t('footer:legal-notice')}
            </button>
            <LegalNotices isOpen={legalNoticesOpened} onClose={hideLegalNotices} />
          </span>
          <span className={alignDotClass}>
            <FaIcon className={iconClass} icon={faCopyright} />
            2024 Develem
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

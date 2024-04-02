import React, { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from './Modal';
import Section from './Section';
import {
  noticeItemClass, noticeItemContentClass, noticeItemTitleClass, noticeSectionClass,
} from './LegalNotices.css';

type NoticeItemProps = {
  title: string,
};

function NoticeItem(props: PropsWithChildren<NoticeItemProps>) {
  const { t } = useTranslation();
  const { title, children } = props;
  return (
    <li className={noticeItemClass}>
      <span className={noticeItemTitleClass}>
        {title}
      </span>
      {t('common:colon')}
      {' '}
      <span className={noticeItemContentClass}>
        {children}
      </span>
    </li>
  );
}

type NoticeSectionProps = {
  title: string,
};

function NoticeSection(props: PropsWithChildren<NoticeSectionProps>) {
  const { title, children } = props;
  return (
    <Section className={noticeSectionClass} title={title}>
      <ul>
        {children}
      </ul>
    </Section>
  );
}

type LegalNoticesProps = {
  isOpen: boolean,
  onClose: () => void,
};

function LegalNotices(props: LegalNoticesProps) {
  const { t } = useTranslation();
  const { isOpen, onClose } = props;
  return (
    <Modal title={t('legal-notices:title')} isOpen={isOpen} onClose={onClose}>
      <NoticeSection title={t('legal-notices:website.title')}>
        <NoticeItem title={t('legal-notices:website.creation')}>Loïc Lemaître</NoticeItem>
        <NoticeItem title={t('legal-notices:website.host')}>Github Pages</NoticeItem>
      </NoticeSection>
      <NoticeSection title="Develem">
        <NoticeItem title={t('legal-notices:develem.siret')}>917 403 370 00013</NoticeItem>
        <NoticeItem title={t('legal-notices:develem.phone')}>
          {t('common:phone-index')}
          6 62 57 34 88
        </NoticeItem>
        <NoticeItem title={t('legal-notices:develem.email')}>develem19@gmail.com</NoticeItem>
        <NoticeItem title={t('legal-notices:develem.address')}>19500 Collonges-La-Rouge — France</NoticeItem>
      </NoticeSection>
    </Modal>
  );
}

export default LegalNotices;

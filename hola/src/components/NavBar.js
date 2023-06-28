import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Navbar() {
  const { t, i18n } = useTranslation();

  function handleClick() {
    const lang = i18n.language === 'en' ? 'fr' : 'en';
    i18next.changeLanguage(lang);
  }

  return (
    <nav>
      <div>
        <a href="/about">{t('About Us')}</a>
        <a href="/donations">{t('Donations')}</a>
        <a href="/bachelors">{t('Bachelors')}</a>
        <a href="/faq">{t('FAQ')}</a>
        <a href="/contact">{t('Contact Us')}</a>
      </div>
      <div>
        <button onClick={handleClick}>
          {i18n.language === 'en' ? 'FR' : 'EN'}
        </button>
      </div>
    </nav>
  );
}

function App() {
  const { t, i18n } = useTranslation();

  function handleClick() {
    const lang = i18n.language === 'en' ? 'fr' : 'en';
    i18next.changeLanguage(lang);
  }

  return (
    <div className="App">
      <Navbar />
      <section>

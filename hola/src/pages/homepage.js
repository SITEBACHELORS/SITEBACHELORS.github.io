import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useHistory } from 'react-router-dom';

const Homepage = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const history = useHistory();

  // Function to handle language change
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    // Store the selected language in local storage
    localStorage.setItem('language', lang);
    // Update the URL query parameter with the selected language
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('lang', lang);
    history.push({ search: searchParams.toString() });
  };

  useEffect(() => {
    // Retrieve the selected language from local storage
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
    // Retrieve the selected language from the URL query parameter
    const searchParams = new URLSearchParams(location.search);
    const queryLanguage = searchParams.get('lang');
    if (queryLanguage && queryLanguage !== storedLanguage) {
      i18n.changeLanguage(queryLanguage);
      // Update local storage with the selected language from the URL query parameter
      localStorage.setItem('language', queryLanguage);
    }
  }, [location.search]);

  return (
    <div>
      <section>
        <h2>{t('Section.AboutUs.Title')}</h2>
        <p>{t('Section.AboutUs.Content')}</p>
      </section>

      <section>
        <h2>{t('Section.FAQ.Title')}</h2>
        <p>{t('Section.FAQ.Content')}</p>
      </section>

      <section>
        <h2>{t('Section.ContactUs.Title')}</h2>
        <p>{t('Section.ContactUs.Content')}</p>
      </section>

      {/* Language selection buttons */}
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>French</button>
      </div>
    </div>
  );
};

export default Homepage;

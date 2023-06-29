import React from 'react';

import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Navbar from "./components/NavBar";


function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <Navbar />
      <section>
        <h2>{t('Section.Title')}</h2>
        <p>{t('Section.Content')}</p>
      </section>
    </div>
  );
}

export default App;

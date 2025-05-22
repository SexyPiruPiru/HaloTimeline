import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './i18n';
import { useTranslation } from 'react-i18next';
import itFlag from './assets/it-flag.svg';
import enFlag from './assets/en-flag.svg';

function App() {
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const currentLang = i18n.language || 'it';
  const flags = {
    it: itFlag,
    en: enFlag
  };
  const languages = [
    { code: 'it', label: 'Italiano', flag: itFlag },
    { code: 'en', label: 'English', flag: enFlag }
  ];

  const handleLangChange = (lng) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

  // Prendi gli eventi tradotti dalla lingua corrente
  const events = t('events', { returnObjects: true });

  return (
    <div className="timeline-container">
      <div className="lang-selector">
        <img
          src={flags[currentLang]}
          alt={currentLang}
          className="lang-flag"
          onClick={() => setShowLangMenu((v) => !v)}
        />
        {showLangMenu && (
          <div className="lang-menu">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className="lang-option"
                onClick={() => handleLangChange(lang.code)}
              >
                <img src={lang.flag} alt={lang.code} className="lang-flag-small" /> {lang.label}
              </div>
            ))}
          </div>
        )}
      </div>
      <h1>{t('title')}</h1>
      <div className="timeline-scroll">
        {Array.isArray(events) ? events.map((event, idx) => (
          <div key={idx} className="timeline-event">
            <div className="event-year">{event.year}</div>
            <div className="event-date">{event.date}</div>
            <div className="event-title">{event.title}</div>
            <div className="event-description">{event.description}</div>
          </div>
        )) : null}
      </div>
    </div>
  );
}

export default App

import { useState, useRef, useEffect } from 'react'
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
  const [showLegend, setShowLegend] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [activeDescIdx, setActiveDescIdx] = useState(null);
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

  // Ordina gli eventi per data (formato DD/MM/YYYY per IT, MM/DD/YYYY per EN)
  function parseDate(dateStr) {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      if (currentLang === 'it') {
        // DD/MM/YYYY
        return new Date(parts[2], parts[1] - 1, parts[0]);
      } else {
        // EN: MM/DD/YYYY
        return new Date(parts[2], parts[0] - 1, parts[1]);
      }
    }
    return new Date(dateStr);
  }

  const events = t('events', { returnObjects: true });
  const sortedEvents = Array.isArray(events)
    ? [...events].sort((a, b) => parseDate(a.date) - parseDate(b.date))
    : [];

  // Mappa delle opere di Halo: solo nome opera, nessun colore specifico
  const haloWorks = [
    'Halo: Combat Evolved',
    'Halo 2',
    'Halo 3',
    'Halo 3: ODST',
    'Halo: Reach',
    'Halo 4',
    'Halo 5: Guardians',
    'Halo Infinite',
    'Halo Wars',
    'Halo Wars 2',
    'Halo: Spartan Assault',
    'Halo: Spartan Strike',
    'Halo: The Fall of Reach',
    'Halo: The Flood',
    'Halo: First Strike',
    'Halo: Ghosts of Onyx',
    'Halo: Contact Harvest',
    'Halo: The Cole Protocol',
    'Halo: Evolutions',
    'Halo: Cryptum',
    'Halo: Primordium',
    'Halo: Silentium',
    'Halo: Glasslands',
    'Halo: The Thursday War',
    'Halo: Mortal Dictata',
    'Halo: Broken Circle',
    'Halo: Hunters in the Dark',
    'Halo: Last Light',
    'Halo: Shadow of Intent',
    'Halo: New Blood',
    'Halo: Smoke and Shadow',
    'Halo: Renegades',
    'Halo: Bad Blood',
    'Halo: Point of Light',
    'Halo: Divine Wind',
    'Halo: Outcasts',
    'Halo: Legacy of Onyx',
    'Halo: Tales from Slipspace',
    'Halo: Uprising',
    'Halo: Helljumper',
    'Halo: Blood Line',
    'Halo: Initiation',
    'Halo: Escalation',
    'Halo: Lone Wolf',
    'Halo: Rise of Atriox',
    'Halo: Fireteam Raven'
  ];

  // Colori centralizzati per i tipi di media
  const mediaTypeColors = {
    game: '#31973d', // Videogiochi
    book: '#0074d9', // Libri
    comic: '#b47cff' // Fumetti
  };

  // Funzione per determinare il colore del titolo in base al media. Si può cambiare colore modificando il colore nella legenda dei media
  function getMediaTypeColor(media) {
    const m = media.toLowerCase();
    if (
      m.includes('halo wars') || m.includes('combat evolved') || m.includes('odst') ||
      m.includes('reach') || m.includes('guardians') || m.includes('infinite') ||
      m.includes('spartan') || m.includes('fireteam raven') || m.includes('halo 2') ||
      m.includes('halo 3') || m.includes('halo 4')
    ) {
      return mediaTypeColors.game;
    } else if (
      m.includes('the fall of reach') || m.includes('the flood') || m.includes('first strike') ||
      m.includes('ghosts of onyx') || m.includes('contact harvest') || m.includes('cole protocol') ||
      m.includes('evolutions') || m.includes('cryptum') || m.includes('primordium') ||
      m.includes('silentium') || m.includes('glasslands') || m.includes('thursday war') ||
      m.includes('mortal dictata') || m.includes('broken circle') || m.includes('hunters in the dark') ||
      m.includes('last light') || m.includes('shadow of intent') || m.includes('new blood') ||
      m.includes('smoke and shadow') || m.includes('renegades') || m.includes('bad blood') ||
      m.includes('point of light') || m.includes('divine wind') || m.includes('outcasts') ||
      m.includes('legacy of onyx')
    ) {
      return mediaTypeColors.book;
    } else if (
      m.includes('tales from slipspace') || m.includes('uprising') || m.includes('helljumper') ||
      m.includes('blood line') || m.includes('initiation') || m.includes('escalation') ||
      m.includes('lone wolf') || m.includes('rise of atriox')
    ) {
      return mediaTypeColors.comic;
    }
    return '#b3b3b3';
  }

  const timelineRef = useRef(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const filteredEvents = selectedTag
    ? sortedEvents.filter(event => event.workTags && event.workTags.includes(selectedTag))
    : sortedEvents;

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
      <div className="media-type-legend media-type-legend--left">
        <span className="media-type-legend-label" style={{ color: mediaTypeColors.game }}>Videogiochi</span>
        <span className="media-type-legend-label" style={{ color: mediaTypeColors.book }}>Libri</span>
        <span className="media-type-legend-label" style={{ color: mediaTypeColors.comic }}>Fumetti</span>
      </div>
      <div className="media-legend-toggle" onClick={() => setShowLegend(v => !v)}>
        Opere
        {showLegend && (
          <div className="media-legend-popup">
            {/* Colora ogni opera in base al media di appartenenza */}
            {haloWorks.map(media => {
              return (
                <div key={media} className="media-legend-item">
                  <span
                    className={`media-legend-label${selectedTag === media ? ' selected' : ''}`}
                    style={{ color: getMediaTypeColor(media), cursor: 'pointer' }}
                    onClick={() => setSelectedTag(selectedTag === media ? null : media)}
                  >
                    {media}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <h1>{t('title')}</h1>
      <div className="timeline-scroll" ref={timelineRef}>
        {filteredEvents.map((event, idx) => {
          // Funzione helper per colore titolo evento in base al mediaType
          const getEventTitleColor = (media) => {
            const m = media.toLowerCase();
            if (
              m.includes('halo wars') || m.includes('combat evolved') || m.includes('odst') ||
              m.includes('reach') || m.includes('guardians') || m.includes('infinite') ||
              m.includes('spartan') || m.includes('fireteam raven') || m.includes('halo 2') ||
              m.includes('halo 3') || m.includes('halo 4')
            ) {
              return mediaTypeColors.game; // Videogiochi
            } else if (
              m.includes('the fall of reach') || m.includes('the flood') || m.includes('first strike') ||
              m.includes('ghosts of onyx') || m.includes('contact harvest') || m.includes('cole protocol') ||
              m.includes('evolutions') || m.includes('cryptum') || m.includes('primordium') ||
              m.includes('silentium') || m.includes('glasslands') || m.includes('thursday war') ||
              m.includes('mortal dictata') || m.includes('broken circle') || m.includes('hunters in the dark') ||
              m.includes('last light') || m.includes('shadow of intent') || m.includes('new blood') ||
              m.includes('smoke and shadow') || m.includes('renegades') || m.includes('bad blood') ||
              m.includes('point of light') || m.includes('divine wind') || m.includes('outcasts') ||
              m.includes('legacy of onyx')
            ) {
              return mediaTypeColors.book; // Libri
            } else if (
              m.includes('tales from slipspace') || m.includes('uprising') || m.includes('helljumper') ||
              m.includes('blood line') || m.includes('initiation') || m.includes('escalation') ||
              m.includes('lone wolf') || m.includes('rise of atriox')
            ) {
              return mediaTypeColors.comic; // Fumetti
            }
            return '#b3b3b3';
          };
          const isActive = activeDescIdx === idx;
          return (
            <div
              key={idx}
              className="timeline-event"
              style={{ borderTop: `6px solid ${getEventTitleColor(event.media)}` }}
              tabIndex={0}
              aria-label={event.title + ' ' + event.year}
              onMouseEnter={() => setActiveDescIdx(idx)}
              onMouseLeave={e => {
                const desc = e.currentTarget.querySelector('.event-description-float');
                if (desc && desc.contains(e.relatedTarget)) {
                  return;
                }
                setActiveDescIdx(null);
              }}
              onFocus={() => setActiveDescIdx(idx)}
              onBlur={e => {
                if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
                  setActiveDescIdx(null);
                }
              }}
              onTouchStart={e => {
                e.stopPropagation();
                setActiveDescIdx(activeDescIdx === idx ? null : idx);
              }}
            >
              <div className="event-title" style={{ color: getEventTitleColor(event.media) }}>
                {event.title}
              </div>
              <div className="event-year" style={{ color: '#fff' }}>{event.year}</div>
              <div className="event-date">
                {event.date.slice(0, 5)}{event.time && (
                  <span className="event-time">&nbsp;&nbsp;&nbsp;H {event.time}</span>
                )}
              </div>
              {/* Tag opera in basso a destra */}
              <div className="event-media-tags">
                {event.workTags && event.workTags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`event-media-tag${selectedTag === tag ? ' selected' : ''}`}
                    style={{ marginRight: 4, cursor: 'pointer' }}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className={`event-description-float${isActive ? ' visible' : ''}`}
                role="tooltip"
                aria-hidden={!isActive}
                onMouseEnter={() => setActiveDescIdx(idx)}
                onMouseLeave={e => {
                  // Se il mouse lascia la descrizione e non torna sulla card, chiudi
                  const parent = e.currentTarget.parentElement;
                  if (parent && parent.contains(e.relatedTarget)) {
                    return;
                  }
                  setActiveDescIdx(null);
                }}
              >
                {event.description}
                <span className="event-description-arrow" />
              </div>
            </div>
          );
        })}
      </div>
      {selectedTag && (
        <button className="clear-tag-filter" onClick={() => setSelectedTag(null)}>
          Mostra tutti gli eventi
        </button>
      )}
    </div>
  );
}

export default App

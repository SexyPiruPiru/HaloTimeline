import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      title: 'Halo Timeline',
      events: [
        {
          year: '2525',
          date: '01/03/2525',
          title: 'Primo contatto Covenant',
          description: 'L’umanità incontra i Covenant per la prima volta.'
        },
        {
          year: '2552',
          date: '30/08/2552',
          title: 'Battaglia di Reach',
          description: 'Uno degli eventi più importanti della guerra contro i Covenant.'
        },
        {
          year: '2557',
          date: '06/11/2557',
          title: 'Halo 4',
          description: 'Master Chief si risveglia e affronta una nuova minaccia.'
        },
        {
          year: '2557',
          date: '07/11/2557',
          title: 'Halo 5',
          description: 'Master Chief affronta nuove sfide e minacce.'
        },
        {
          year: '2557',
          date: '06/11/2557',
          title: 'Halo 4',
          description: 'Master Chief si risveglia e affronta una nuova minaccia.'
        },
        {
          year: '2557',
          date: '06/11/2557',
          title: 'Halo 4',
          description: 'Master Chief si risveglia e affronta una nuova minaccia.'
        },
        {
          year: '2557',
          date: '06/11/2557',
          title: 'Halo 4',
          description: 'Master Chief si risveglia e affronta una nuova minaccia.'
        },
        {
          year: '2557',
          date: '06/11/2557',
          title: 'Halo 4',
          description: 'Master Chief si risveglia e affronta una nuova minaccia.'
        },
        {
          year: '2557',
          date: '06/11/2557',
          title: 'Halo 4',
          description: 'Master Chief si risveglia e affronta una nuova minaccia.'
        }
      ]
    }
  },
  en: {
    translation: {
      title: 'Halo Timeline',
      events: [
        {
          year: '2525',
          date: '03/01/2525',
          title: 'First Contact with the Covenant',
          description: 'Humanity encounters the Covenant for the first time.'
        },
        {
          year: '2552',
          date: '08/30/2552',
          title: 'Battle of Reach',
          description: 'One of the most important events in the war against the Covenant.'
        },
        {
          year: '2557',
          date: '11/06/2557',
          title: 'Halo 4',
          description: 'Master Chief awakens and faces a new threat.'
        },
        {
          year: '2557',
          date: '11/07/2557',
          title: 'Halo 5',
          description: 'Master Chief faces new challenges and threats.'
        },
        {
          year: '2557',
          date: '11/06/2557',
          title: 'Halo 4',
          description: 'Master Chief awakens and faces a new threat.'
        },
        {
          year: '2557',
          date: '11/06/2557',
          title: 'Halo 4',
          description: 'Master Chief awakens and faces a new threat.'
        },
        {
          year: '2557',
          date: '11/06/2557',
          title: 'Halo 4',
          description: 'Master Chief awakens and faces a new threat.'
        },
        {
          year: '2557',
          date: '11/06/2557',
          title: 'Halo 4',
          description: 'Master Chief awakens and faces a new threat.'
        },
        {
          year: '2557',
          date: '11/06/2557',
          title: 'Halo 4',
          description: 'Master Chief awakens and faces a new threat.'
        }
      ]
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

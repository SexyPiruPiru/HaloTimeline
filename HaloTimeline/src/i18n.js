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
          description: 'L’umanità incontra i Covenant per la prima volta.',
          media: 'game',
          workTags: ['Halo: Combat Evolved']
        },
        {
          year: '2552',
          date: '30/08/2552',
          title: 'Battaglia di Reach',
          description: 'Uno degli eventi più importanti della guerra contro i Covenant.',
          media: 'game',
          workTags: ['Halo: Reach', 'Halo: The Fall of Reach']
        },
        {
          year: '2557',
          date: '06/11/2557',
          title: 'Halo 4',
          description: 'Master Chief si risveglia e affronta una nuova minaccia.',
          media: 'game',
          workTags: ['Halo 4']
        },
        {
          year: '2557',
          date: '07/11/2557',
          title: 'Halo 5',
          description: 'Master Chief affronta nuove sfide e minacce.',
          media: 'game',
          workTags: ['Halo 5: Guardians']
        },
        {
          year: '2552',
          date: '19/09/2552',
          title: 'Gli umani scoprono Halo',
          description: "La Pillar of Autumn esce dall'iperspazio nei pressi dell'Installazione 04.",
          media: 'game',
          workTags: ['Halo Combat Evolved']
        },
        {
          year: '2552',
          date: '22/09/2552',
          title: 'Distruzione di Halo',
          description: 'Master Chief distrugge l’Installazione 04 per fermare i Flood e fugge con un caccia Longsword.',
          media: 'game',
          workTags: ['Halo: Combat Evolved']
        },
        {
          year: '2552',
          date: '22/09/2552',
          title: 'Master Chief trova dei superstiti e fugge',
          description: 'Master Chief trova Jhonson, rubano una nave Covenant e si recano verso Reach.',
          media: 'book',
          workTags: ['Halo: First Strike']
        },
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
          description: 'Humanity encounters the Covenant for the first time.',
          media: 'game',
          workTags: ['Halo: Combat Evolved']
        },
        {
          year: '2552',
          date: '08/30/2552',
          title: 'Battle of Reach',
          description: 'One of the most important events in the war against the Covenant.',
          media: 'game',
          workTags: ['Halo: Reach', 'Halo: The Fall of Reach']
        },
        {
          year: '2557',
          date: '11/06/2557',
          title: 'Halo 4',
          description: 'Master Chief awakens and faces a new threat.',
          media: 'game',
          workTags: ['Halo 4']
        },
        {
          year: '2557',
          date: '11/07/2557',
          title: 'Halo 5',
          description: 'Master Chief faces new challenges and threats.',
          media: 'game',
          workTags: ['Halo 5: Guardians']
        },
        {
          year: '2553',
          date: '03/15/2553',
          title: 'The Fall of Reach',
          description: 'Told in the novel "Halo: The Fall of Reach".',
          media: 'book',
          workTags: ['Halo: The Fall of Reach', 'Halo: Reach']
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

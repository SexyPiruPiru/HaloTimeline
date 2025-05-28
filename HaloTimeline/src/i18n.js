import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      title: 'Halo Timeline',
      events: [
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
        {
          year: '2552',
          date: '26/08/2552',
          title: 'Alcuni Spartan si recano su Reach',
          description: 'La Squadra Rossa capitanata da Fred-104 si dirige su Reach in difesa dei cannoni Super MAC.',
          media: 'book',
          workTags: ['Halo: First Strike'],
          time: '06:22',
        },
        {
          year: '2552',
          date: '24/07/2552',
          title: 'I Covenant attaccano Reach',
          description: 'La Squadra Noble va ad indagare circa un ripetitore per comunicazioni disattivato. Scoprono una squadra Covenant sulla superfice.',
          media: 'game',
          workTags: ['Halo Reach'],
          time: '07:28',
        },
        {
          year: '2552',
          date: '26/07/2552',
          title: 'La Squadra Noble viene inviata alla Sword Base',
          description: 'La Dottoressa Halsey informa gli Spartan che i Covenant sono a caccia di un manufatto religioso recentemente scoperto nel sottosuolo.',
          media: 'game',
          workTags: ['Halo Reach'],
          time: '11:26',
        },
        {
          year: '2552',
          date: '12/08/2552',
          title: "Parte la controffensiva dell'UNSC",
          description: "Dopo una missione di ricognizione, l'UNSC attacca i Covenant ma le forze nemiche sono in gran numero.",
          media: 'game',
          workTags: ['Halo Reach'],
          time: '08:00',
        },
      ]
    }
  },
  en: {
    translation: {
      title: 'Halo Timeline',
      events: [
        {
          year: '2552',
          date: '09/19/2552',
          title: 'Humans discover Halo',
          description: "The Pillar of Autumn exits slipspace near Installation 04.",
          media: 'game',
          workTags: ['Halo: Combat Evolved']
        },
        {
          year: '2552',
          date: '09/22/2552',
          title: 'Destruction of Halo',
          description: 'Master Chief destroys Installation 04 to stop the Flood and escapes with a Longsword fighter.',
          media: 'game',
          workTags: ['Halo: Combat Evolved']
        },
        {
          year: '2552',
          date: '09/22/2552',
          title: 'Master Chief finds survivors and escapes',
          description: 'Master Chief finds Johnson, they steal a Covenant ship and head to Reach.',
          media: 'book',
          workTags: ['Halo: First Strike']
        },
        {
          year: '2552',
          date: '08/26/2552',
          title: 'Some Spartans go to Reach',
          description: 'Red Team led by Fred-104 heads to Reach to defend the Super MAC guns.',
          media: 'book',
          workTags: ['Halo: First Strike'],
          time: '06:22',
        },
        {
          year: '2552',
          date: '07/24/2552',
          title: 'The Covenant attack Reach',
          description: 'Noble Team investigates a disabled communications relay. They discover a Covenant squad on the surface.',
          media: 'game',
          workTags: ['Halo: Reach'],
          time: '07:28',
        },
        {
          year: '2552',
          date: '07/26/2552',
          title: 'Noble Team is sent to Sword Base',
          description: 'Dr. Halsey informs the Spartans that the Covenant are hunting a recently discovered religious artifact underground.',
          media: 'game',
          workTags: ['Halo: Reach'],
          time: '11:26',
        },
        {
          year: '2552',
          date: '08/12/2552',
          title: 'The UNSC launches a counteroffensive',
          description: 'After a reconnaissance mission, the UNSC attacks the Covenant but enemy forces are numerous.',
          media: 'game',
          workTags: ['Halo: Reach'],
          time: '08:00',
        },
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

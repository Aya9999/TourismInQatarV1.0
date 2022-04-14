import { useTranslation } from 'react-i18next';
// '@mui
import { enUS, arSD } from '@mui/material/locale';
import useSettings from './useSettings';

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_flag_en.svg',
  },
  {
    label: 'Arabic',
    value: 'ar',
    systemValue: arSD,
    icon: 'https://minimal-assets-api.vercel.app/assets/icons/ic_flag_en.svg',
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const { onChangeDirection } = useSettings();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
    onChangeDirection({ en: "ltr", ar: "rtl" }[newlang])
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}

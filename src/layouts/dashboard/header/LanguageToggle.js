import React from 'react';
// @mui
import { Button } from '@mui/material';
// hooks
import useLocales from '../../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function LanguageToggle() {
  const { translate, currentLang, onChangeLang } = useLocales();

  return (
      <Button
        onClick={() => onChangeLang(currentLang.value === "en" ? "ar" : "en")}
      >
        { translate("header.lang") }
      </Button>
  );
}

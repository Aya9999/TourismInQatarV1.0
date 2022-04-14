import { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';

// ----------------------------------------------------------------------

export default function useSettings() {
    const useSettings = () => useContext(SettingsContext);
    return useSettings
};

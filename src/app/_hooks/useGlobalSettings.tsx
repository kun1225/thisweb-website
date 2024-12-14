import { useContext } from 'react';
import { GlobalSettingsContext } from '../_context/globalSettings';

const useGlobalSettings = () => {
  const context = useContext(GlobalSettingsContext);
  if (!context) {
    throw new Error('useGlobalSettings needs to be used in GlobalSettingsProvide');
  }
  return context;
};

export default useGlobalSettings;

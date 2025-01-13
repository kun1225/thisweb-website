import { groq } from 'next-sanity';

export const querySettingsGeneral = groq`*[_type == "settingsGeneral"][0] {
	siteTitle,
	siteDescription,
	shareGraphic,
}`;

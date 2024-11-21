import { groq } from 'next-sanity';

export const settingsGeneralQuery = groq`*[_type == "settingsGeneral"][0] {
	siteTitle,
	siteDescription,
	shareGraphic,
}`;

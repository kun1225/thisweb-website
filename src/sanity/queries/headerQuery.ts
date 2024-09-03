import { groq } from 'next-sanity';

export const headerQuery = groq`*[_type == "gHeader"]{
	navContents[] {
		_key,
		_type,
		"normalLink": {
			linkText,
			linkUrl,
		},
		"megamenu": {
			buttonText,
			"content": megamenuContent->{
				// For Posts Megamenu Content
				categories[] {
					_key,
					title,
					description,
					"secondLevelCategories": categoryRef->secondLevelCategory[]->{
						title,
						url,
					},
				},
			},
		},
	},
}[0]`;

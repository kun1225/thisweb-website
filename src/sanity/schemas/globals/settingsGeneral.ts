import { defineType } from 'sanity';

export default defineType({
  title: 'General Settings',
  name: 'settingsGeneral',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      type: 'string',
      description: 'The name of your site, usually your company/brand name',
    },
    {
      name: 'siteDescription',
      type: 'text',
      description:
        'A summary of the site. Use no more than 160 characters. It will be active if there is no meta description on the page.',
    },
    // {
    //   name: 'favicon',
    //   type: 'image',
    //   description: '256 x 256px in PNG',
    //   options: {
    //     accept: '.png',
    //   },
    // },
    // {
    //   name: 'faviconLight',
    //   type: 'image',
    //   description:
    //     'For devices in dark mode, use a light color to create contrast with dark backgrounds.',
    //   options: {
    //     accept: '.png',
    //   },
    // },
    {
      name: 'shareGraphic',
      type: 'image',
      description: '1200 x 630px in PNG, JPG, or GIF',
      options: {
        accept: '.jpg,.png,.gif',
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'General Settings',
      };
    },
  },
});

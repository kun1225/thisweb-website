import { defineField, defineType } from 'sanity';
import { customCta } from '../libs/customCta';

export default defineType({
  title: 'Home Page',
  name: 'pHome',
  type: 'document',
  groups: [
    { title: 'Hero', name: 'hero' },
    { title: 'Lead Magnet', name: 'leadMagnet' },
    { title: 'Categories Navigation', name: 'categoriesNav' },
    { title: 'Latest Posts', name: 'latestPosts' },
    { title: 'Site Owner', name: 'siteOwner' },
    { title: 'Recommendation', name: 'recommendation' },
    { title: 'Settings', name: 'settings' },
  ],
  fields: [
    ...basicSettings(),
    heroSection(),
    leadMagnetSection(),
    categoriesNavSection(),
    latestPostsSection(),
    siteOwnerSection(),
    recommendationSection(),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      };
    },
  },
});

function basicSettings() {
  return [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Home page',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'string',
      initialValue: '/',
      readOnly: true,
    }),
  ];
}

function heroSection() {
  return defineField({
    title: 'Hero',
    name: 'hero',
    type: 'object',
    group: 'hero',
    fields: [
      defineField({
        title: 'Heading',
        name: 'heading',
        type: 'text',
      }),
      defineField({
        title: 'Heading ID',
        name: 'headingId',
        type: 'string',
      }),
      defineField({
        title: 'Subheading',
        name: 'subheading',
        type: 'text',
      }),
      defineField({
        title: 'Paragraph',
        name: 'paragraph',
        type: 'text',
      }),
      defineField({
        title: 'Media',
        name: 'media',
        type: 'media',
      }),
      customCta({}),
    ],
  });
}

function leadMagnetSection() {
  return defineField({
    title: 'Lead Magnet',
    name: 'leadMagnet',
    type: 'object',
    group: 'leadMagnet',
    fields: [
      defineField({
        title: 'Heading',
        name: 'heading',
        type: 'string',
      }),
      defineField({
        title: 'Heading ID',
        name: 'headingId',
        type: 'string',
      }),
      defineField({
        title: 'Subheading',
        name: 'subheading',
        type: 'string',
      }),
      defineField({
        title: 'Paragraph',
        name: 'paragraph',
        type: 'simpleBlock',
      }),
      defineField({
        title: 'Media',
        name: 'media',
        type: 'media',
      }),
      defineField({
        title: 'Form ID',
        name: 'formId',
        type: 'string',
      }),
      // defineField({
      //   title: 'Show Name Field',
      //   name: 'isShowNameField',
      //   type: 'boolean',
      //   initialValue: true,
      // }),
      defineField({
        title: 'Button Label',
        name: 'btnLabel',
        type: 'string',
      }),
      defineField({
        title: 'Success Message',
        name: 'successMessage',
        type: 'string',
      }),
    ],
  });
}

function categoriesNavSection() {
  return defineField({
    title: 'Categories Navigation',
    name: 'categoriesNav',
    type: 'object',
    group: 'categoriesNav',
    fields: [
      defineField({
        title: 'Heading',
        name: 'heading',
        type: 'string',
      }),
      defineField({
        title: 'Heading ID',
        name: 'headingId',
        type: 'string',
      }),
      defineField({
        title: 'Subheading',
        name: 'subheading',
        type: 'string',
      }),
      defineField({
        title: 'Categories',
        name: 'categories',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              defineField({ title: 'Title', name: 'title', type: 'string' }),
              defineField({ title: 'Paragraph', name: 'paragraph', type: 'text' }),
              defineField({
                title: 'category',
                name: 'category',
                type: 'reference',
                to: { type: 'category' },
                validation: (Rule) => Rule.required(),
              }),
            ],
          },
        ],
      }),
    ],
  });
}

function latestPostsSection() {
  return defineField({
    title: 'Latest Posts',
    name: 'latestPosts',
    type: 'object',
    group: 'latestPosts',
    fields: [
      defineField({
        title: 'Heading',
        name: 'heading',
        type: 'string',
      }),
      defineField({
        title: 'Heading ID',
        name: 'headingId',
        type: 'string',
      }),
      defineField({
        title: 'Subheading',
        name: 'subheading',
        type: 'string',
      }),
      defineField({
        title: 'Posts Count',
        name: 'postsCount',
        type: 'number',
      }),
    ],
  });
}

function siteOwnerSection() {
  return defineField({
    title: 'Site Owner',
    name: 'siteOwner',
    type: 'object',
    group: 'siteOwner',
    fields: [
      defineField({
        title: 'Heading',
        name: 'heading',
        type: 'string',
      }),
      defineField({
        title: 'Heading ID',
        name: 'headingId',
        type: 'string',
      }),
      defineField({
        title: 'Subheading',
        name: 'subheading',
        type: 'string',
      }),
      defineField({
        title: 'Paragraph',
        name: 'paragraph',
        type: 'simpleBlock',
      }),
      defineField({
        title: 'Media',
        name: 'media',
        type: 'media',
      }),
      defineField({
        title: 'Achievements',
        name: 'achievements',
        type: 'achievements',
      }),
    ],
  });
}

function recommendationSection() {
  return defineField({
    title: 'Recommendation',
    name: 'recommendation',
    type: 'object',
    group: 'recommendation',
    fields: [
      defineField({
        title: 'Heading',
        name: 'heading',
        type: 'string',
      }),
      defineField({
        title: 'Heading ID',
        name: 'headingId',
        type: 'string',
      }),
      defineField({
        title: 'Subheading',
        name: 'subheading',
        type: 'string',
      }),
      defineField({
        title: 'Paragraph',
        name: 'paragraph',
        type: 'text',
      }),
      defineField({
        title: 'Media',
        name: 'media',
        type: 'media',
      }),
      customCta({}),
    ],
  });
}

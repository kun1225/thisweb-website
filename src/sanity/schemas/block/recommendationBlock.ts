import { defineType, defineArrayMember } from 'sanity';
import Highlight from '../../components/Highlight';

export default defineType({
  title: 'Recommendation Block',
  name: 'recommendationBlock',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          {
            title: 'Highlight',
            value: 'highlight',
            component: Highlight,
            icon: () => 'H',
          },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
        ],
      },
    }),
  ],
});

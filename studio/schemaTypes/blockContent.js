import { defineType, defineArrayMember } from 'sanity';

/**
 * To jest definicja schematu dla treści bogatej (rich text),
 * wykorzystywana w polu "Treść wpisu" na blogu.
 */
export default defineType({
  title: 'Treść wpisu',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Blok tekstu',
      type: 'block',
      styles: [
        { title: 'Zwykły tekst', value: 'normal' },
        { title: 'Nagłówek H1', value: 'h1' },
        { title: 'Nagłówek H2', value: 'h2' },
        { title: 'Nagłówek H3', value: 'h3' },
        { title: 'Nagłówek H4', value: 'h4' },
        { title: 'Cytat', value: 'blockquote' },
      ],
      lists: [{ title: 'Lista punktowana', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Pogrubienie', value: 'strong' },
          { title: 'Kursywa', value: 'em' },
        ],
        annotations: [
          {
            title: 'Link URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Adres URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});

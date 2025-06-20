import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Wpis na bloga',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Adres URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Zajawka (krótki opis)',
      type: 'text',
      description: 'Krótki opis wpisu wyświetlany w widoku listy postów',
    }),
    defineField({
      name: 'date',
      title: 'Data publikacji',
      type: 'datetime',
    }),
    defineField({
      name: 'tags',
      title: 'Tagi',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Obraz główny',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Treść wpisu',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});

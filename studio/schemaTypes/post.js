import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Wpisy na bloga',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł bloga',
      description: 'Podaj tytuł wpisu – będzie widoczny jako nagłówek artykułu i używany do wygenerowania linku.',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Link do wpisu (adres URL zakładki)',
      description: 'Generuje się automatycznie na podstawie tytułu – kliknij "Generate".',
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
      description: 'Opis widoczny na karcie bloga. Najlepiej 1–2 zdania zachęcające do kliknięcia.',
    }),
    defineField({
      name: 'date',
      title: 'Data publikacji',
      description: 'Data dodania posta (ustawiana automatycznie).',
      type: 'date',
      readOnly: true,
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'tags',
      title: 'Tagi',
      description:
        'Podaj słowa-klucze związane z wpisem. Ułatwiają filtrowanie i wyszukiwanie postów na blogu. Wpisz tag i naciśnij ENTER, aby dodać.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'image',
      title: 'Obraz główny',
      description: 'Dodaj zdjęcie wyróżniające dla wpisu. Będzie wyświetlane na liście postów oraz na górze wpisu.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Treść wpisu',
      description: 'Tutaj wpisz pełną treść posta blogowego. Możesz korzystać z dostępnych narzędzi edytora (np. nagłówki, listy, linki, pogrubienia), aby sformatować tekst. Po zakończeniu wpisu kliknij przycisk „Publish” (Opublikuj) w prawym dolnym rogu.',
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

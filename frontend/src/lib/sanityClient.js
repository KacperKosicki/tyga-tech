// src/lib/sanityClient.js
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'tuptbpae',
  dataset: 'production',
  apiVersion: '2023-06-01',
  useCdn: true,
});

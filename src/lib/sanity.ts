import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID, // pakai prefix PUBLIC_ biar bisa diakses di browser
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: true,
});

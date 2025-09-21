// src/lib/sanity.js

import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'nfclqqvk', 
  dataset: 'production',
  apiVersion: '2023-05-03', // Gunakan tanggal hari ini atau versi lain
  useCdn: true, // Gunakan CDN untuk performa lebih baik di production
});
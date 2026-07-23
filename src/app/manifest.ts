import { defaultMessages } from '@/i18n/messages';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultMessages.Metadata.name,
    short_name: 'Sea of Sword Wiki',
    description: defaultMessages.Metadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#07131b',
    theme_color: '#d8b060',
    icons: [
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}

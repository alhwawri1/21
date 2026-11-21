import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.alhawari.masareef',
  appName: 'Masareef',
  webDir: 'www',
  server: {
    iosScheme: 'capacitor',
    hostname: 'localhost'
  },
  ios: {
    contentInset: 'automatic',
    scheme: 'masareef',
    allowsLinkPreview: false
  }
};

export default config;

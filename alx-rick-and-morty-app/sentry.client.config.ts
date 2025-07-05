import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://482519be66830160be204ac9471e1b39@o4509617310924800.ingest.de.sentry.io/4509617314136144',
  tracesSampleRate: 1.0, // Adjust this value in production as needed0
});

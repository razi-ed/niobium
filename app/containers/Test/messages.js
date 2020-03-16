/*
 * Test Messages
 *
 * This contains all the text for the Test container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Test';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Test container!',
  },
});

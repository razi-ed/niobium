/*
 * Card Messages
 *
 * This contains all the text for the Card component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Card';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Card component!',
  },
});

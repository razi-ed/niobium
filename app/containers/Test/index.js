/**
 *
 * Test
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function Test() {
  return (
    <div>
      <Helmet>
        <title>Test</title>
        <meta name="description" content="Description of Test" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default memo(Test);

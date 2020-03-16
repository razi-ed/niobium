/**
 *
 * Card
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Card() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Card.propTypes = {};

export default memo(Card);

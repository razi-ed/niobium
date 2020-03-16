/**
 *
 * Dashboard
 *
 */

import React, { memo } from 'react';

import { Helmet } from 'react-helmet';


export function Dashboard() {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Description of Dashboard" />
      </Helmet>
    </div>
  );
}






export default memo(Dashboard);

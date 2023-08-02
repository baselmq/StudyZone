import React from 'react';
import Header from './Header';
import AnalyticsSection from './AnalyticsSection';
import BlockGridSection from './BlockGridSection';
const MainContent = () => {
  return (
<div className="main-content">
<Header />
  <main>
  <AnalyticsSection />
  {/* <BlockGridSection /> */}
  </main>
</div>
  );
};

export default MainContent;

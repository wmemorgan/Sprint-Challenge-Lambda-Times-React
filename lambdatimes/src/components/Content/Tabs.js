import React from 'react';
import PropTypes from 'prop-types'
import Tab from './Tab';
const Tabs = props => {
  const { tabs, selectedTab, selectTabHandler } = props
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {
          tabs.map((tab, index) => (
            <Tab
              key={`${tab.headline}-${index}`}
              selectTabHandler={selectTabHandler}
              selectedTab={selectedTab}
              tab={tab}
            />
          ))  
        }
 
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  selectedTab: PropTypes.string
}

Tabs.defaultProps = {
  tabs: []
}

export default Tabs;

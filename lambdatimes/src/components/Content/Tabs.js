import React from 'react';
import PropTypes from 'prop-types'
import Tab from './Tab';
import { TabsContainer, Topics, Title } from './TabStyles'

const Tabs = props => {
  const { tabs, selectedTab, selectTabHandler } = props
  return (
    <TabsContainer>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {
          tabs.map((tab, index) => (
            <Tab
              key={index}
              selectTabHandler={selectTabHandler}
              selectedTab={selectedTab}
              tab={tab}
            />
          ))  
        }
      </Topics>
    </TabsContainer>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string
}

Tabs.defaultProps = {
  tabs: []
}

export default Tabs;

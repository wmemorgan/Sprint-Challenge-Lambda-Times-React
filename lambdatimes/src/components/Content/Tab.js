import React from 'react';
import PropTypes from 'prop-types'
import { TabContainer } from './TabStyles'

const Tab = props => {
  const { selectTabHandler, selectedTab, tab } = props

  return (
    <TabContainer 
      onClick={() => selectTabHandler(tab)}
      activeTab={selectedTab === tab}>
      {tab.toUpperCase()}
    </TabContainer>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string
}

export default Tab;

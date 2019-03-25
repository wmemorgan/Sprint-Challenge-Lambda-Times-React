import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  const { selectTabHandler, selectedTab, tab } = props
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab' */
  return (
    <div
      className={selectedTab === tab ? 'tab active-tab' : 'tab'}
      /* Replace this dummy click handler function with your selectTabHandler function from props
  you'll need to pass the `tab` in as an argument to this handler. */
      onClick={() => selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string
}

export default Tab;

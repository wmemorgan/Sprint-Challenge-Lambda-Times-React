import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    // Load data into state
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({selected: tab})
  };

  filterCards = () => {
   if (this.state.selected === 'all') {
    /* if the selected tab is 'all' it should return all
    of the items from cardData. */
    this.setState({cards: cardData})
     return this.state.cards;
   } else { /* else, it should only return those cards whose 'tab' matched this.state.selected. */
     this.setState(() => {
       // filter cards array based on tab selection
       let filteredCards = cardData.filter(card => card.tab === this.state.selected)
       return { cards: filteredCards }
     })
     return this.state.cards
   }
    
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected !== this.state.selected) {
      this.filterCards()
    }
  }

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected}/>
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

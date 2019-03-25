import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selection: 0
    }
  }
  // Load carousel data into state
  componentDidMount() {
    this.setState({ data: carouselData })
  }
  // Go back to previous hero image
  leftClick = () => {
    this.setState(prevState => (
      {
        selection: prevState.selection - 1 < 0 ? 
        prevState.data.length - 1 : 
        prevState.selection - 1
      }
    ))
  }
 // Advance to next hero image
  rightClick = () => {
    this.setState(prevState => (
      {
        selection: prevState.selection + 1 >= prevState.data.length ?
        0 : prevState.selection + 1
      }
    ))
  }

  // Display hero image
  selectedImage = () => {
    const { data, selection } = this.state
    return <img src={data[selection]} alt='hero banner' style={{ display: 'block' }} />
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selection !== this.state.selection) {
      this.selectedImage()
    }
  }

  render() {
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
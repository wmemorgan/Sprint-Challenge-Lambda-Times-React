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
  componentDidMount() {
    this.setState({ data: carouselData })
  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    const { data, selection } = this.state
    return <img src={data[selection]} style={{ display: 'block' }} />
  }

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
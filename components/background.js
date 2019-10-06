import React, { Component, Fragment } from 'react';
import Immutable from 'immutable';

class Background extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const circleIds = Immutable.List([
      'circle1',
      'circle2',
      'circle3',
      'circle4',
      'circle5',
      'circle6'
    ]);

    let circles =  Immutable.Map();

    circleIds.map((id) => {
      const circleSize = this.getRandomisedNumber(150, 450);
      circles = circles
        .setIn([id, 'width'], `${circleSize}px`)
        .setIn([id, 'height'], `${circleSize}px`)
        .setIn([id, 'top'], `${this.getRandomisedNumber(-50, 200)}px`)
        .setIn([id, 'left'], `${this.getRandomisedNumber(150, 450)}px`)
        .setIn([id, 'colour'], `${this.getRandomisedNumber(0, 360)}`);
    });

    this.state = {
      circles,
      circleIds,
    }
  }

  componentDidMount() {
    let { circles, circleIds } = this.state;

    this.setState({ circles, circleIds });
  }

  getRandomisedNumber(min, max) {
    let randomNumber = 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  }

  renderCircle = (id) => {
    const idClassName = `${id} circle`;

    return (
      <div key={id} className={idClassName} />
    )
  }

  render() {
    const { circles, circleIds } = this.state;
    console.log('circles in render', circles);
    return (circleIds.map((id) => this.renderCircle(id)));
  }
}

export default Background;

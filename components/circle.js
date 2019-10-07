import React, { Component } from 'react';
import Immutable from 'immutable';

class Circle extends Component {

render() {
  const { id, width, height, top, left, colour } = this.props;
  const idClassName = `${id} circle`;

  const backgroundGradient =
    `radial-gradient(
      hsla(${colour}, 100%, 80%),
      hsla(${colour}, 100%, 0%),
      hsla(${colour}, 100%, 0%))`;

    return (
      <div key={id} className={idClassName}>
        <style jsx="jsx">{`
          div {
            width: ${width};
            height: ${height};
            top: ${top};
            left: ${left};
            background: ${backgroundGradient};
          }
        `}</style>
      </div>
    )
  }
}

export default Circle;

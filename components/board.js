import React, { Component } from 'react';
import Letter from '../components/Letter';
import MousePointer from '../components/MousePointer';

class Board extends React.Component {
  componentWillMount() {
    this.setState({ x: 0, y: 0 });
  }

  _onMouseMove(e) {
    const boardOffset = (window.innerWidth - 800) / 2;
    const boardMousePosX = e.screenX - boardOffset;
    this.setState({ x: boardMousePosX, y: e.screenY });
  }
  // TODO - Create Circle component to map through array of objects
  // with randomised of shape, size & colour
  render() {
    const letterArray = ['t', 'o', 'g', 'e', 't', 'h', 'e', 'r'];
    const { x, y } = this.state;
    return (
      <div className="board" onMouseMove={this._onMouseMove.bind(this)}>

        <div className="circle1 circle" />
        <div className="circle2 circle" />
        <div className="circle3 circle" />
        <div className="circle4 circle" />
        <div className="circle5 circle" />
        <div className="circle6 circle" />
        {letterArray.map((char, index) => (
          <Letter
            key={index}
            char={char}
            xPos={index}
            yPos={200}
            mouseXPos={x}
            mouseYPos={y}
          />
        ))}
        <MousePointer
          xPos={x}
          yPos={y}
        />
        <style jsx>{`
          .board {
            margin: 0 auto;
            cursor: none;
            width: 800px;
            height: 400px;
            position: relative;
            z-index:0;
          }
          .circle {
            border-radius: 50%;
            position: absolute;
          }
          .circle1 {
            width: 400px;
            height: 400px;
            top: 100px;
            left: 250px;
            background-image: radial-gradient(rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0), rgba(0, 255, 0, 0));
          }
          .circle2 {
            width: 300px;
            height: 300px;
            top: 50px;
            left: 200px;
            background-image: radial-gradient(rgba(255, 255, 0, 0.8), rgba(255, 255, 0, 0), rgba(255, 255, 0, 0));
          }
          .circle3 {
            width: 250px;
            height: 250px;
            top: 100px;
            left: 450px;
            background-image: radial-gradient(rgba(125, 0, 255, 0.8), rgba(125, 0, 255, 0), rgba(125, 0, 255, 0));
          }
          .circle4 {
            width: 350px;
            height: 350px;
            top: 0px;
            left: 300px;
            background-image: radial-gradient(rgba(0, 125, 255, 0.8), rgba(0, 125, 255, 0), rgba(0, 125, 255, 0));
          }
          .circle5 {
            width: 200px;
            height: 200px;
            top: 200px;
            left: 150px;
            background-image: radial-gradient(rgba(255, 0, 220, 0.8), rgba(255, 0, 220, 0), rgba(255, 0, 220, 0));
          }
          .circle6 {
            width: 200px;
            height: 200px;
            top: -50px;
            left: 450px;
            background-image: radial-gradient(rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0), rgba(255, 0, 0, 0));
          }
        `}</style>
      </div>
    );
  }
}

export default Board;

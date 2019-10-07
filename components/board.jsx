import React, { Component } from 'react';
import Background from '../components/Background';
import Letter from '../components/Letter';
import MousePointer from '../components/MousePointer';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  // TODO board offset seems to have stopped working :(
  _onMouseMove(e) {
    const boardOffset = (window.innerWidth - 800) / 2;
    const boardMousePosX = e.screenX - boardOffset;
    console.log('boardMousePosX', boardMousePosX, 'boardOffset', boardOffset, e.screenX);
    this.setState({ x: boardMousePosX, y: e.screenY });
  }

  render() {
    const letterArray = ['t', 'o', 'g', 'e', 't', 'h', 'e', 'r'];
    const { x, y } = this.state;
    return (
      <div className="board" onMouseMove={this._onMouseMove.bind(this)}>
        <Background />
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

            width: 800px;
            height: 400px;
            position: relative;
            z-index:0;
            border: 1px solid black;
          }
        `}</style>
      </div>
    );
  }
}
//cursor: none;
export default Board;

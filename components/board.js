import React, { Component } from 'react';
import Background from '../components/Background';
import Letter from '../components/Letter';
import MousePointer from '../components/MousePointer';

class Board extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    const boardOffset = (window.innerWidth - 800) / 2;
    const boardMousePosX = e.screenX - boardOffset;
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
            cursor: none;
            width: 800px;
            height: 400px;
            position: relative;
            z-index:0;
          }
        `}</style>
      </div>
    );
  }
}

export default Board;

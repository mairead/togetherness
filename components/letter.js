import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MousePointer from '../components/MousePointer';

class Letter extends Component {
  static propTypes = {
    char: PropTypes.string.required,
    xPos: PropTypes.number.required,
    yPos: PropTypes.number.required,
    mouseXPos: PropTypes.number.required,
    mouseYPos: PropTypes.number.required,
  }

  getFontColour = (boardXPos) => {
    const { mouseXPos, mouseYPos } = this.props;
    let fontColour = 'black';
    const mousePosAdjusted = mouseXPos-35;
    const centerOfLetter = boardXPos + 50;

    let distanceFromCenter = 0;

    if (mousePosAdjusted <= centerOfLetter) {
      distanceFromCenter = centerOfLetter - mousePosAdjusted;
    } else if (mousePosAdjusted >= centerOfLetter) {
      distanceFromCenter = mousePosAdjusted - centerOfLetter;
    };

    const hue = (360 / 50) * distanceFromCenter;

    if (mousePosAdjusted >= boardXPos && mousePosAdjusted <= (boardXPos+100)) {
      fontColour = `hsl(${hue}, 100%, 50%)`;
    }

    return fontColour;
  }

  render () {
    const { char, xPos, mouseXPos } = this.props;
    const boardXPos = (100 * xPos);
    const translateXPos = `${boardXPos}px`;
    const fontColour = this.getFontColour(boardXPos);

    return (
      <p>
        {char}
        <style jsx>{`
          @import url(//db.onlinewebfonts.com/c/4b76b99051d6848168d9f187b7eeb9c1?family=RosewoodW01-Regular);
          @font-face {font-family: "RosewoodW01-Regular";
            src: url("//db.onlinewebfonts.com/t/4b76b99051d6848168d9f187b7eeb9c1.woff") format("woff"),
          }
          p {
            color: ${fontColour};
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateX(${translateXPos});
            font-size: 150px;
            text-transform: uppercase;
            font-family: "RosewoodW01-Regular"
          }
        `}</style>
      </p>
    );
  }
}

export default Letter;

import React from 'react';

const MousePointer = ({ xPos, yPos }) => {
  return (
    <div>
      <style jsx>{`
        div{
          position: absolute;
          display: block;
          top: ${yPos-162}px;
          left: ${xPos-125}px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-image: radial-gradient(rgba(255, 125, 0, 0.8), rgba(255, 125, 0, 0), rgba(255, 125, 0, 0));
        }
      `}</style>
    </div>
  )

}

export default MousePointer;
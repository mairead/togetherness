const MousePointer = ({ xPos, yPos }) => {
  return (
    <div>
    <style jsx>{`
      div{
        position: absolute;
        display: block;
        top: ${yPos-162}px;
        left: ${xPos-50}px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        border: 2px solid orange;
      }
    `}</style>
    </div>
  )

}

export default MousePointer;
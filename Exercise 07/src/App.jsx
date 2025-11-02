import { useState, useEffect } from "react";

const mousePositonTracker = () => {

  const [mousePositon, setMousePostion] = useState({x : 0, y : 0});
  useEffect(() => {
    const handleMouseMove = (dhacdo) => {
      setMousePostion({x: dhacdo.clientX, y: dhacdo.clientY});
    }
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  return (
      <div>
        <p>Mouse X:{mousePositon.x}</p>
        <p>Mouse Y:{mousePositon.y}</p>
      </div>
  );
}

export default mousePositonTracker;
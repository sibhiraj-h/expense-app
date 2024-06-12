
import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', updateSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return {
    width: size[0],
    height: size[1]
  };
};

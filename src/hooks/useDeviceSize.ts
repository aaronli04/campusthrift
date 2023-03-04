import React, { useEffect } from 'react'

const useDeviceSize = () => {

    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)
  
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  
    useEffect(() => {
      // component is mounted and window is available
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      // unsubscribe from the event on component unmount
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  
    return [width, height]
  
  }
  
  export default useDeviceSize
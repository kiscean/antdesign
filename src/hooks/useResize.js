import React from 'react';

const useResize = () => {
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const getSize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    getSize();

    window.addEventListener('resize', getSize);
    return () => window.removeEventListener('resize', getSize);
  }, []);

  return size;
};

export default useResize;

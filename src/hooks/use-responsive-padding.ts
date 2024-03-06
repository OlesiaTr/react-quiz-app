import { useEffect, useState } from 'react';

export const useResponsivePadding = (
  defaultPadding: string,
  breakpoint: number
) => {
  const [padding, setPadding] = useState(defaultPadding);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth =
        window.innerWidth || document.documentElement.clientWidth;
      setPadding(screenWidth > breakpoint ? '0' : defaultPadding);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [defaultPadding, breakpoint]);

  return padding;
};

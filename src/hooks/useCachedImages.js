import { useEffect, useState } from "react";

const useCachedImages = (srcArray) => {
  const [isLoading, setIsLoading] = useState(true);

  const cacheImages = async () => {
    const promises = await srcArray.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  useEffect(() => {
    cacheImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading;
};

export default useCachedImages;

import { useRef, useState, useEffect } from "react";

export const useScrollAnimation = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    };

    const options = { threshold: 0.35 };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { isInViewport, ref };
};

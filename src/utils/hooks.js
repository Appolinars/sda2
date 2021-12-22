import { useEffect, useState, useRef } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

//   if (isOnScreen) {
//     observerRef.current.disconnect(); 
//   }
    useEffect(() => {
      observerRef.current = new IntersectionObserver(([entry]) =>
        setIsOnScreen(entry.isIntersecting)
      );
    }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};

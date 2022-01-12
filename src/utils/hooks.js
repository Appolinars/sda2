import { useEffect, useState, useRef } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  // play once
  if (isOnScreen) {
    observerRef.current.disconnect();
  }

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
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

export const useCloseOnDomClick = (targetRef, isActive, setIsActive) => {
  useEffect(() => {
    const onDomClick = (e) => {
      if (targetRef.current) {
        if (isActive && !targetRef.current.contains(e.target)) {
          setIsActive(false);
        }
      }
    };
    document.addEventListener("click", onDomClick);
    return () => document.removeEventListener("click", onDomClick);
  }, [isActive]);
};
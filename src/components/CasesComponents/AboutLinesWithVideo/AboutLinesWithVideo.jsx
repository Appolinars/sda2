import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./AboutLinesWithVideo.module.scss";

const AboutLinesWithVideo = () => {
  const line_1 = useRef(null);
  const path_1 = useRef(null);
  const pathAnimate_1 = useRef(null);
  const isLine1OnScreen = useOnScreen(line_1);

  const line_2 = useRef(null);
  const path_2 = useRef(null);
  const pathAnimate_2 = useRef(null);
  const isLine2OnScreen = useOnScreen(line_2);

  useEffect(() => {
    if (isLine1OnScreen && pathAnimate_1.current) {
      pathAnimate_1.current.beginElement();
    }
  }, [isLine1OnScreen]);

  return (
    <>
      <svg
        width="1042"
        height="123"
        viewBox="0 0 1042 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine1OnScreen ? `${styles.line_1} ${styles.active}` : `${styles.line_1}`}
        ref={line_1}
      >
        <rect
          x="7.07104"
          y="108"
          width="10"
          height="10"
          transform="rotate(45 7.07104 108)"
          fill="#899198"
        />
        <path
          d="M1040.5 0V0C1040.5 36.9978 1010.5 66.9855 973.5 66.9676L50.5 66.521C26.479 66.5094 7 85.979 7 110V110"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_1.current && path_1.current.getTotalLength()}
          strokeDashoffset={path_1.current && path_1.current.getTotalLength()}
          ref={path_1}
        >
          <animate
            ref={pathAnimate_1}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_1.current && path_1.current.getTotalLength()}`}
            to="0"
            dur="2.5s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
            id="pathAnimate_1"
          />
        </path>
      </svg>

      <svg
        width="339"
        height="830"
        viewBox="0 0 339 830"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine2OnScreen ? `${styles.line_2} ${styles.active}` : `${styles.line_2}`}
        ref={line_2}
      >
        <rect x="7.07104" width="10" height="10" transform="rotate(45 7.07104 0)" fill="#899198" />
        <path
          d="M7 7V662.155C7 717.384 51.7715 762.155 107 762.155H270.155C307.625 762.155 338 792.53 338 830V830"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_2.current && path_2.current.getTotalLength()}
          strokeDashoffset={path_2.current && path_2.current.getTotalLength()}
          ref={path_2}
        >
          <animate
            ref={pathAnimate_2}
            attributeName="stroke-dashoffset"
            begin="pathAnimate_1.end"
            from={`${path_2.current && path_2.current.getTotalLength()}`}
            to="0"
            dur="2.5s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
            id="pathAnimate_2"
          />
        </path>
      </svg>
    </>
  );
};

export default AboutLinesWithVideo;

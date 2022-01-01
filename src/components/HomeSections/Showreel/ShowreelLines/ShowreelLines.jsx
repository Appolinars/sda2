import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./ShowreelLines.module.scss";

const IntroLines = () => {
  const line_1 = useRef(null);
  const path_1 = useRef(null);
  const pathAnimate_1 = useRef(null);
  const isLine1OnScreen = useOnScreen(line_1);

  useEffect(() => {
    if (isLine1OnScreen && pathAnimate_1.current) {
      pathAnimate_1.current.beginElement();
    }
  }, [isLine1OnScreen]);

  return (
    <>
      <svg
        width="2"
        height="1023"
        viewBox="0 0 2 1023"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_1}
        ref={line_1}
      >
        <line
          x1="1"
          y1="-4.37113e-08"
          x2="1"
          y2="1023"
          stroke="white"
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
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </line>
      </svg>
    </>
  );
};

export default IntroLines;

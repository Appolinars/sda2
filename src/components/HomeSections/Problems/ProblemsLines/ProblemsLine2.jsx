import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./ProblemsLines.module.scss";

const ProblemsLine2 = () => {

  const line_2 = useRef(null);
  const path_2 = useRef(null);
  const pathAnimate_2 = useRef(null);
  const isLine2OnScreen = useOnScreen(line_2);

  useEffect(() => {
    if (isLine2OnScreen && pathAnimate_2.current) {
      pathAnimate_2.current.beginElement();
    }
  }, [isLine2OnScreen]);

  return (
    <>
      <svg
        width="15"
        height="51"
        viewBox="0 0 15 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine2OnScreen ? `${styles.line} ${styles.active}` : `${styles.line}`}
        ref={line_2}
      >
        <path
          d="M7 7.11719L7 43.0655"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_2.current && path_2.current.getTotalLength()}
          strokeDashoffset={path_2.current && path_2.current.getTotalLength()}
          ref={path_2}
        >
          <animate
            ref={pathAnimate_2}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_2.current && path_2.current.getTotalLength()}`}
            to="0"
            dur="1s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          width="9.99285"
          height="9.99285"
          transform="matrix(0.707614 0.7066 0.707613 -0.7066 0 7.18848)"
          fill="#899198"
        />
        <rect
          width="9.99283"
          height="9.99283"
          transform="matrix(0.707615 0.706598 0.707615 -0.706598 0 43.1377)"
          fill="#899198"
        />
      </svg>
    </>
  );
};

export default ProblemsLine2;

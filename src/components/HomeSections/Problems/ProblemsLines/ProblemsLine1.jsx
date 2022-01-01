import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./ProblemsLines.module.scss";

const ProblemsLine1 = () => {
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
        width="15"
        height="51"
        viewBox="0 0 15 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine1OnScreen ? `${styles.line} ${styles.active}` : `${styles.line}`}
        ref={line_1}
      >
        <path
          d="M7 7.50098L7 43.4492"
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
            dur="1s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          width="9.99283"
          height="9.99283"
          transform="matrix(0.707615 0.706598 0.707615 -0.706598 0 7.57227)"
          fill="#899198"
        />
        <rect
          width="9.99284"
          height="9.99284"
          transform="matrix(0.707614 0.706599 0.707614 -0.706599 0 43.5215)"
          fill="#899198"
        />
      </svg>
    </>
  );
};

export default ProblemsLine1;

import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./ProblemsLines.module.scss";

const ProblemsLine4 = () => {
  const line_4 = useRef(null);
  const path_4 = useRef(null);
  const pathAnimate_4 = useRef(null);
  const isLine4OnScreen = useOnScreen(line_4);

  useEffect(() => {
    if (isLine4OnScreen && pathAnimate_4.current) {
      pathAnimate_4.current.beginElement();
    }
  }, [isLine4OnScreen]);

  return (
    <>
      <svg
        width="15"
        height="100"
        viewBox="0 0 15 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_4}
        ref={line_4}
      >
        <path
          d="M7 7L7 100"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_4.current && path_4.current.getTotalLength()}
          strokeDashoffset={path_4.current && path_4.current.getTotalLength()}
          ref={path_4}
        >
          <animate
            ref={pathAnimate_4}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_4.current && path_4.current.getTotalLength()}`}
            to="0"
            dur="1s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          width="9.99281"
          height="9.99281"
          transform="matrix(0.707617 0.706596 0.707616 -0.706597 0 7.06055)"
          fill="#899198"
        />
      </svg>
    </>
  );
};

export default ProblemsLine4;

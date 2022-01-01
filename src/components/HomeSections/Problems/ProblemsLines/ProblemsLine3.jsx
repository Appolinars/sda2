import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./ProblemsLines.module.scss";

const ProblemsLine3 = () => {
  const line_3 = useRef(null);
  const path_3 = useRef(null);
  const pathAnimate_3 = useRef(null);
  const isLine3OnScreen = useOnScreen(line_3);

  useEffect(() => {
    if (isLine3OnScreen && pathAnimate_3.current) {
      pathAnimate_3.current.beginElement();
    }
  }, [isLine3OnScreen]);

  return (
    <>
      <svg
        width="15"
        height="51"
        viewBox="0 0 15 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine3OnScreen ? `${styles.line} ${styles.active}` : `${styles.line}`}
        ref={line_3}
      >
        <path
          d="M7 7.51953L7 43.4678"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_3.current && path_3.current.getTotalLength()}
          strokeDashoffset={path_3.current && path_3.current.getTotalLength()}
          ref={path_3}
        >
          <animate
            ref={pathAnimate_3}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_3.current && path_3.current.getTotalLength()}`}
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
          transform="matrix(0.707617 0.706596 0.707616 -0.706597 0 7.59082)"
          fill="#899198"
        />
        <rect
          width="9.99278"
          height="9.99278"
          transform="matrix(0.707618 0.706595 0.707618 -0.706595 0 43.54)"
          fill="#899198"
        />
      </svg>
    </>
  );
};

export default ProblemsLine3;

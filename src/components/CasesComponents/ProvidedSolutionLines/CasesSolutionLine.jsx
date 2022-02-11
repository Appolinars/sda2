import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./CasesSolutionLine.module.scss";

const CasesSolutionLine = () => {
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
        width="799"
        height="128"
        viewBox="0 0 799 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine1OnScreen ? `${styles.line_1} ${styles.active}` : `${styles.line_1}`}
        ref={line_1}
      >
        <rect
          x="7.07104"
          y="113"
          width="10"
          height="10"
          transform="rotate(45 7.07104 113)"
          fill="#899198"
        />
        <path
          d="M798 1L791.904 10.5797C773.548 39.4251 741.728 56.8932 707.537 56.8932H79.5733C44.7654 56.8932 14.6133 81.0349 7 115V115"
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
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
            id="pathAnimate_solution1"
          />
        </path>
      </svg>

      <svg
        width="15"
        height="119"
        viewBox="0 0 15 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine2OnScreen ? `${styles.line_2} ${styles.active}` : `${styles.line_2}`}
        ref={line_2}
      >
        <rect x="7.07104" width="10" height="10" transform="rotate(45 7.07104 0)" fill="#899198" />
        <path
          d="M7 13V119"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_2.current && path_2.current.getTotalLength()}
          strokeDashoffset={path_2.current && path_2.current.getTotalLength()}
          ref={path_2}
        >
          <animate
            ref={pathAnimate_2}
            attributeName="stroke-dashoffset"
            begin="pathAnimate_solution1.end"
            from={`${path_2.current && path_2.current.getTotalLength()}`}
            to="0"
            dur="1s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>
    </>
  );
};

export default CasesSolutionLine;

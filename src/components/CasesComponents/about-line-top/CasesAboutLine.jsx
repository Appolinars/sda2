import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./CasesAboutLine.module.scss";

const CasesAboutLine = () => {
  const line = useRef(null);
  const path = useRef(null);
  const pathAnimate = useRef(null);
  const isLineOnScreen = useOnScreen(line);

  useEffect(() => {
    if (isLineOnScreen && pathAnimate.current) {
      pathAnimate.current.beginElement();
    }
  }, [isLineOnScreen]);

  return (
    <>
      <svg
        width="1042"
        height="123"
        viewBox="0 0 1042 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLineOnScreen ? `${styles.line} ${styles.active}` : `${styles.line}`}
        ref={line}
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
          strokeDasharray={path.current && path.current.getTotalLength()}
          strokeDashoffset={path.current && path.current.getTotalLength()}
          ref={path}
        >
          <animate
            ref={pathAnimate}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path.current && path.current.getTotalLength()}`}
            to="0"
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>
    </>
  );
};

export default CasesAboutLine;

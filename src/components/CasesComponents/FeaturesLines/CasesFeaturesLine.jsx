import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./CasesFeaturesLine.module.scss";

const CasesFeaturesLine = () => {
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
        width="15"
        height="119"
        viewBox="0 0 15 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLineOnScreen ? `${styles.line} ${styles.active}` : `${styles.line}`}
        ref={line}
      >
        <rect
          x="7.07104"
          y="104"
          width="10"
          height="10"
          transform="rotate(45 7.07104 104)"
          fill="#899198"
        />
        <path
          d="M7 0V105.5"
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
            to="0"
            from={`${path.current && path.current.getTotalLength()}`}
            dur="1.5s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>
    </>
  );
};

export default CasesFeaturesLine;

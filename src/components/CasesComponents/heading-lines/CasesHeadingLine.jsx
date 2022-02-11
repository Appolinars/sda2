import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./CasesHeadingLines.module.scss";

const CasesHeadingLine = () => {
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
        width="289"
        height="222"
        viewBox="0 0 289 222"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line}
        ref={line}
      >
        <rect x="7.07104" width="10" height="10" transform="rotate(45 7.07104 0)" fill="#899198" />
        <path
          d="M13 7H188C243.228 7 288 51.7715 288 107V222"
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

export default CasesHeadingLine;

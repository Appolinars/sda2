import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./CasesBtnNextLine.module.scss";

const CasesBtnNextLine = () => {
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
        width="944"
        height="307"
        viewBox="0 0 944 307"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line}
        ref={line}
      >
        <path
          d="M7 7V7C7 84.3605 69.713 147.074 147.074 147.074H793C875.843 147.074 943 214.231 943 297.074V307"
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
        <rect x="7.07104" width="10" height="10" transform="rotate(45 7.07104 0)" fill="#899198" />
      </svg>
    </>
  );
};

export default CasesBtnNextLine;

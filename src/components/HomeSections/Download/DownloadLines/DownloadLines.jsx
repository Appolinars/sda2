import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./DownloadLines.module.scss";

const DownloadLines = () => {
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

  useEffect(() => {
    if (isLine2OnScreen && pathAnimate_2.current) {
      pathAnimate_2.current.beginElement();
    }
  }, [isLine2OnScreen]);

  return (
    <>
      <svg
        width="709"
        height="312"
        viewBox="0 0 709 312"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine1OnScreen ? `${styles.line_1} ${styles.active}` : `${styles.line_1}`}
        ref={line_1}
      >
        <path
          d="M701 299V273.118C701 190.275 633.843 123.118 551 123.118H124.118C56.1217 123.118 1 67.996 1 -9.53674e-06V-9.53674e-06"
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
            to={`${path_1.current && path_1.current.getTotalLength() * 2}`}
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          x="708.142"
          y="304.071"
          width="10"
          height="10"
          transform="rotate(135 708.142 304.071)"
          fill="white"
        />
      </svg>
      <svg
        width="15"
        height="312"
        viewBox="0 0 15 312"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_2}
        ref={line_2}
      >
        <path
          d="M7 7V312"
          stroke="white"
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
          x="14.1422"
          y="7.07129"
          width="10"
          height="10"
          transform="rotate(135 14.1422 7.07129)"
          fill="white"
        />
      </svg>
    </>
  );
};

export default DownloadLines;

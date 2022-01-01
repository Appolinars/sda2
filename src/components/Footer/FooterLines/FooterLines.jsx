import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./FooterLines.module.scss";

const FooterLines = () => {
  const line_1 = useRef(null);
  const path_1 = useRef(null);
  const pathAnimate_1 = useRef(null);
  const isLine1OnScreen = useOnScreen(line_1);

  useEffect(() => {
    if (isLine1OnScreen && pathAnimate_1.current) {
      pathAnimate_1.current.beginElement();
    }
  }, [isLine1OnScreen]);

  // Middle

  const line_md_1 = useRef(null);
  const path_md_1 = useRef(null);
  const pathAnimate_md_1 = useRef(null);
  const isLine1OnScreen_md = useOnScreen(line_md_1);

  useEffect(() => {
    if (isLine1OnScreen_md && pathAnimate_md_1.current) {
      pathAnimate_md_1.current.beginElement();
    }
  }, [isLine1OnScreen_md]);

  return (
    <>
      <svg
        width="401"
        height="150"
        viewBox="0 0 401 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine1OnScreen ? `${styles.line_1} ${styles.active}` : `${styles.line_1}`}
        ref={line_1}
      >
        <path
          d="M400 -5.35951e-07V-5.35951e-07C400 78.4244 336.424 142 258 142H13"
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
            to="0"
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <path d="M0 142.071L7.07107 149.142L14.1421 142.071L7.07107 135L0 142.071Z" fill="white" />
      </svg>

      <svg
        width="15"
        height="76"
        viewBox="0 0 15 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine1OnScreen_md ? `${styles.line_md_1} ${styles.active}` : `${styles.line_md_1}`
        }
        ref={line_md_1}
      >
        <path
          d="M7 0.000132522L7 68.1006"
          stroke="white"
          strokeWidth="2"
          strokeDasharray={path_md_1.current && path_md_1.current.getTotalLength()}
          strokeDashoffset={path_md_1.current && path_md_1.current.getTotalLength()}
          ref={path_md_1}
        >
          <animate
            ref={pathAnimate_md_1}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_md_1.current && path_md_1.current.getTotalLength()}`}
            to="0"
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          width="10"
          height="10.0001"
          transform="matrix(0.707107 0.707107 -0.70166 0.712512 7.01666 61)"
          fill="white"
        />
      </svg>
    </>
  );
};

export default FooterLines;

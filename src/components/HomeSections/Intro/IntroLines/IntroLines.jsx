import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./IntroLines.module.scss";

const IntroLines = () => {
  // Large

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

  // Middle

  const line_md_1 = useRef(null);
  const path_md_1 = useRef(null);
  const pathAnimate_md_1 = useRef(null);
  const isLine1OnScreen_md = useOnScreen(line_md_1);

  const line_md_2 = useRef(null);
  const path_md_2 = useRef(null);
  const pathAnimate_md_2 = useRef(null);
  const isLine2OnScreen_md = useOnScreen(line_md_2);

  useEffect(() => {
    if (isLine1OnScreen_md && pathAnimate_md_1.current) {
      pathAnimate_md_1.current.beginElement();
    }
  }, [isLine1OnScreen_md]);

  // Small

  const line_sm_1 = useRef(null);
  const path_sm_1 = useRef(null);
  const pathAnimate_sm_1 = useRef(null);
  const isLine1OnScreen_sm = useOnScreen(line_sm_1);

  const line_sm_2 = useRef(null);
  const path_sm_2 = useRef(null);
  const pathAnimate_sm_2 = useRef(null);
  const isLine2OnScreen_sm = useOnScreen(line_sm_2);

  useEffect(() => {
    if (isLine1OnScreen_sm && pathAnimate_sm_1.current) {
      pathAnimate_sm_1.current.beginElement();
    }
  }, [isLine1OnScreen_sm]);

  return (
    <>
      <svg
        width="575"
        height="420"
        viewBox="0 0 575 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine1OnScreen ? `${styles.line_1} ${styles.active}` : `${styles.line_1}`}
        ref={line_1}
      >
        <path
          d="M68.2882 7H424.001C506.844 7 574.001 74.1573 574.001 157V262C574.001 344.843 506.844 412 424.001 412H12.001"
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
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
            id="pathAnimate_1"
          />
        </path>
        <rect x="63.0723" width="10" height="10" transform="rotate(45 63.0723 0)" fill="#899198" />
        <rect
          x="7.07178"
          y="405"
          width="10"
          height="10"
          transform="rotate(45 7.07178 405)"
          fill="#899198"
        />
      </svg>

      <svg
        width="529"
        height="129"
        viewBox="0 0 529 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine2OnScreen ? `${styles.line_2} ${styles.active}` : `${styles.line_2}`}
        ref={line_2}
      >
        <rect
          width="9.91526"
          height="9.91526"
          transform="matrix(0.701012 0.71315 -0.701012 0.71315 522.049 0)"
          fill="#899198"
        />
        <path
          d="M517.064 7H123C55.6213 7 1 61.6213 1 129V129"
          stroke="#899198"
          strokeWidth="2"
          ref={path_2}
          strokeDasharray={path_2.current && path_2.current.getTotalLength()}
          strokeDashoffset={path_2.current && path_2.current.getTotalLength()}
        >
          <animate
            ref={pathAnimate_2}
            attributeName="stroke-dashoffset"
            begin="pathAnimate_1.end"
            from={`${path_2.current && path_2.current.getTotalLength()}`}
            to="0"
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>

      <svg
        width="137"
        height="306"
        viewBox="0 0 137 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine1OnScreen_md ? `${styles.line_md_1} ${styles.active}` : `${styles.line_md_1}`
        }
        ref={line_md_1}
      >
        <path
          d="M24.4193 7H66C104.66 7 136 38.3401 136 77V228C136 266.66 104.66 298 66 298H12"
          stroke="#899198"
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
            id="pathAnimate_md_1"
          />
        </path>
        <rect x="19.0713" width="10" height="10" transform="rotate(45 19.0713 0)" fill="#899198" />
        <rect
          x="7.07129"
          y="291"
          width="10"
          height="10"
          transform="rotate(45 7.07129 291)"
          fill="#899198"
        />
      </svg>
      <svg
        width="168"
        height="129"
        viewBox="0 0 168 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine2OnScreen_md ? `${styles.line_md_2} ${styles.active}` : `${styles.line_md_2}`
        }
        ref={line_md_2}
      >
        <path
          d="M157 7H123C55.6213 7 1 61.6213 1 129V129"
          stroke="#899198"
          strokeWidth="2"
          ref={path_md_2}
          strokeDasharray={path_md_2.current && path_md_2.current.getTotalLength()}
          strokeDashoffset={path_md_2.current && path_md_2.current.getTotalLength()}
        >
          <animate
            ref={pathAnimate_md_2}
            attributeName="stroke-dashoffset"
            begin="pathAnimate_md_1.end"
            from={`${path_md_2.current && path_md_2.current.getTotalLength()}`}
            to="0"
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          width="9.91526"
          height="9.91526"
          transform="matrix(0.701012 0.71315 -0.701012 0.71315 160.951 0)"
          fill="#899198"
        />
      </svg>

      <svg
        width="61"
        height="292"
        viewBox="0 0 61 292"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine1OnScreen_sm ? `${styles.line_sm_1} ${styles.active}` : `${styles.line_sm_1}`
        }
        ref={line_sm_1}
      >
        <path
          d="M11 7H46.2902V7C53.8619 7 60 13.1381 60 20.7097V270.29C60 277.862 53.8619 284 46.2902 284V284H18.4029"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_sm_1.current && path_sm_1.current.getTotalLength()}
          strokeDashoffset={path_sm_1.current && path_sm_1.current.getTotalLength()}
          ref={path_sm_1}
        >
          <animate
            ref={pathAnimate_sm_1}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_sm_1.current && path_sm_1.current.getTotalLength()}`}
            to="0"
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
            id="pathAnimate_sm_1"
          />
        </path>
        <rect
          width="10"
          height="10"
          transform="matrix(0.694253 0.719731 -0.694253 0.719731 6.94244 0)"
          fill="#899198"
        />
        <rect
          width="10"
          height="10"
          transform="matrix(0.695186 0.71883 -0.695186 0.71883 14.9518 277)"
          fill="#899198"
        />
      </svg>
      <svg
        width="62"
        height="94"
        viewBox="0 0 62 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine2OnScreen_sm ? `${styles.line_sm_2} ${styles.active}` : `${styles.line_sm_2}`
        }
        ref={line_sm_2}
      >
        <path
          d="M51 7H15.1631V7C7.34103 7 1 13.341 1 21.1631V94"
          stroke="#899198"
          strokeWidth="2"
          ref={path_sm_2}
          strokeDasharray={path_sm_2.current && path_sm_2.current.getTotalLength()}
          strokeDashoffset={path_sm_2.current && path_sm_2.current.getTotalLength()}
        >
          <animate
            ref={pathAnimate_sm_2}
            attributeName="stroke-dashoffset"
            begin="pathAnimate_sm_1.end"
            from={`${path_sm_2.current && path_sm_2.current.getTotalLength()}`}
            to="0"
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          width="10"
          height="10"
          transform="matrix(0.706702 0.707512 -0.706702 0.707512 54.067 0)"
          fill="#899198"
        />
      </svg>
    </>
  );
};

export default IntroLines;

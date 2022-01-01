import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./WorkLines.module.scss";

const WorkLine1 = () => {
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

  // Small

  const line_sm_1 = useRef(null);
  const path_sm_1 = useRef(null);
  const pathAnimate_sm_1 = useRef(null);
  const isLine1OnScreen_sm = useOnScreen(line_sm_1);

  useEffect(() => {
    if (isLine1OnScreen_sm && pathAnimate_sm_1.current) {
      pathAnimate_sm_1.current.beginElement();
    }
  }, [isLine1OnScreen_sm]);

  return (
    <>
      <svg
        width="1031"
        height="621"
        viewBox="0 0 1031 621"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_1}
        ref={line_1}
      >
        <path
          d="M1030 0L1030 470C1030 552.843 962.843 620 880 620L-2.71011e-05 620"
          stroke="#B62519"
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
          />
        </path>
      </svg>

      <svg
        width="228"
        height="628"
        viewBox="0 0 228 628"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_md_1}
        ref={line_md_1}
      >
        <path
          d="M227 0L227 470C227 552.843 159.843 620 77 620L9 620"
          stroke="#B62519"
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
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          x="14.1421"
          y="620.071"
          width="10"
          height="10"
          transform="rotate(135 14.1421 620.071)"
          fill="#B62519"
        />
      </svg>

      <svg
        width="164"
        height="536"
        viewBox="0 0 164 536"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_sm_1}
        ref={line_sm_1}
      >
        <path
          d="M1 0V0C1 28.1665 23.8335 51 52 51L71 51L120.291 51V51C143.879 51 163 70.1215 163 93.7091L163 492.291C163 515.878 143.878 535 120.291 535V535L22 535"
          stroke="#B62519"
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
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>
    </>
  );
};

export default WorkLine1;


import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./ProjectsLines.module.scss";

const ProjectsLine1 = () => {
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

  const line_sm_2 = useRef(null);
  const path_sm_2 = useRef(null);
  const pathAnimate_sm_2 = useRef(null);
  const isLine2OnScreen_sm = useOnScreen(line_sm_2);

  useEffect(() => {
    if (isLine2OnScreen_sm && pathAnimate_sm_2.current) {
      pathAnimate_sm_2.current.beginElement();
    }
  }, [isLine2OnScreen_sm]);

  return (
    <>
      <svg
        width="336"
        height="306"
        viewBox="0 0 336 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine1OnScreen_md ? `${styles.line_md_1} ${styles.active}` : `${styles.line_md_1}`
        }
        ref={line_md_1}
      >
        <path
          d="M10 7H268C301.137 7 328 33.8629 328 67V298"
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
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          x="14.1422"
          y="7.07104"
          width="10"
          height="10"
          transform="rotate(135 14.1422 7.07104)"
          fill="#899198"
        />
        <rect
          x="335.142"
          y="298.071"
          width="10"
          height="10"
          transform="rotate(135 335.142 298.071)"
          fill="#899198"
        />
      </svg>

      <svg
        width="15"
        height="129"
        viewBox="0 0 15 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_sm_1}
        ref={line_sm_1}
      >
        <path
          d="M6.99999 129L7 7"
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
            to={`${path_sm_1.current && path_sm_1.current.getTotalLength() * 2}`}
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          width="10"
          height="10.0001"
          transform="matrix(0.707107 -0.707107 -0.70166 -0.712512 7.01666 14.1963)"
          fill="#899198"
        />
      </svg>

      <svg
        width="15"
        height="165"
        viewBox="0 0 15 165"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine2OnScreen_sm ? `${styles.line_sm_2} ${styles.active}` : `${styles.line_sm_2}`
        }
        ref={line_sm_2}
      >
        <path
          d="M7.00037 0V152"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_sm_2.current && path_sm_2.current.getTotalLength()}
          strokeDashoffset={path_sm_2.current && path_sm_2.current.getTotalLength()}
          ref={path_sm_2}
        >
          <animate
            ref={pathAnimate_sm_2}
            attributeName="stroke-dashoffset"
            begin="indefinite"
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
          height="10.0001"
          transform="matrix(0.707107 -0.707107 -0.70166 -0.712512 7.0166 164.196)"
          fill="#899198"
        />
      </svg>
    </>
  );
};

export default ProjectsLine1;

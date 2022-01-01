import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./ProjectsLines.module.scss";

const ProjectsLine3 = () => {
  const line_3 = useRef(null);
  const path_3 = useRef(null);
  const pathAnimate_3 = useRef(null);
  const isLine3OnScreen = useOnScreen(line_3);

  useEffect(() => {
    if (isLine3OnScreen && pathAnimate_3.current) {
      pathAnimate_3.current.beginElement();
    }
  }, [isLine3OnScreen]);

  // Middle

  const line_md_3 = useRef(null);
  const path_md_3 = useRef(null);
  const pathAnimate_md_3 = useRef(null);
  const isLine3OnScreen_md = useOnScreen(line_md_3);

  useEffect(() => {
    if (isLine3OnScreen_md && pathAnimate_md_3.current) {
      pathAnimate_md_3.current.beginElement();
    }
  }, [isLine3OnScreen_md]);

  return (
    <>
      <svg
        width="383"
        height="791"
        viewBox="0 0 383 791"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_3}
        ref={line_3}
      >
        <path
          d="M382 3.49283e-05L382 640C382 722.843 314.843 790 232 790L-2.13853e-05 790"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_3.current && path_3.current.getTotalLength()}
          strokeDashoffset={path_3.current && path_3.current.getTotalLength()}
          ref={path_3}
        >
          <animate
            ref={pathAnimate_3}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_3.current && path_3.current.getTotalLength()}`}
            to="0"
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>

      <svg
        width="16"
        height="394"
        viewBox="0 0 16 394"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine3OnScreen_md ? `${styles.line_md_3} ${styles.active}` : `${styles.line_md_3}`
        }
        ref={line_md_3}
      >
        <path
          d="M8.25 7.49854V382.002"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_md_3.current && path_md_3.current.getTotalLength()}
          strokeDashoffset={path_md_3.current && path_md_3.current.getTotalLength()}
          ref={path_md_3}
        >
          <animate
            ref={pathAnimate_md_3}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_md_3.current && path_md_3.current.getTotalLength()}`}
            to="0"
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          y="7.12134"
          width="10"
          height="10"
          transform="rotate(-45.4097 0 7.12134)"
          fill="#899198"
        />
        <rect
          x="1"
          y="386.122"
          width="10"
          height="10"
          transform="rotate(-45.4097 1 386.122)"
          fill="#899198"
        />
      </svg>
    </>
  );
};

export default ProjectsLine3;

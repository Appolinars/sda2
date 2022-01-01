import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./ProjectsLines.module.scss";

const ProjectsLine4 = () => {

  const line_4 = useRef(null);
  const path_4 = useRef(null);
  const pathAnimate_4 = useRef(null);
  const isLine4OnScreen = useOnScreen(line_4);

  useEffect(() => {
    if (isLine4OnScreen && pathAnimate_4.current) {
      pathAnimate_4.current.beginElement();
    }
  }, [isLine4OnScreen]);

  // Middle

  const line_md_4 = useRef(null);
  const path_md_4 = useRef(null);
  const pathAnimate_md_4 = useRef(null);
  const isLine4OnScreen_md = useOnScreen(line_md_4);

  useEffect(() => {
    if (isLine4OnScreen_md && pathAnimate_md_4.current) {
      pathAnimate_md_4.current.beginElement();
    }
  }, [isLine4OnScreen_md]);

  return (
    <>
      <svg
        width="647"
        height="306"
        viewBox="0 0 647 306"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_4}
        ref={line_4}
      >
        <path
          d="M646 306L646 151C646 68.1573 578.843 1 496 1.00001L-1.44614e-06 1.00003"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_4.current && path_4.current.getTotalLength()}
          strokeDashoffset={path_4.current && path_4.current.getTotalLength()}
          ref={path_4}
        >
          <animate
            ref={pathAnimate_4}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_4.current && path_4.current.getTotalLength()}`}
            to={`${path_4.current && path_4.current.getTotalLength() * 2}`}
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>

      <svg
        width="181"
        height="312"
        viewBox="0 0 181 312"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_md_4}
        ref={line_md_4}
      >
        <path
          d="M180 312L180 157C180 74.1573 112.843 7 30 7.00001L11 7.00001"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_md_4.current && path_md_4.current.getTotalLength()}
          strokeDashoffset={path_md_4.current && path_md_4.current.getTotalLength()}
          ref={path_md_4}
        >
          <animate
            ref={pathAnimate_md_4}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_md_4.current && path_md_4.current.getTotalLength()}`}
            to={`${path_md_4.current && path_md_4.current.getTotalLength() * 2}`}
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          y="7.12158"
          width="10"
          height="10"
          transform="rotate(-45.4097 0 7.12158)"
          fill="#899198"
        />
      </svg>
    </>
  );
};

export default ProjectsLine4;

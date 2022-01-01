import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./ProjectsLines.module.scss";

const ProjectsLine2 = () => {

  const line_2 = useRef(null);
  const path_2 = useRef(null);
  const pathAnimate_2 = useRef(null);
  const isLine2OnScreen = useOnScreen(line_2);

  useEffect(() => {
    if (isLine2OnScreen && pathAnimate_2.current) {
      pathAnimate_2.current.beginElement();
    }
  }, [isLine2OnScreen]);

  // Middle

  const line_md_2 = useRef(null);
  const path_md_2 = useRef(null);
  const pathAnimate_md_2 = useRef(null);
  const isLine2OnScreen_md = useOnScreen(line_md_2);

  useEffect(() => {
    if (isLine2OnScreen_md && pathAnimate_md_2.current) {
      pathAnimate_md_2.current.beginElement();
    }
  }, [isLine2OnScreen_md]);

  return (
    <>
      <svg
        width="390"
        height="820"
        viewBox="0 0 390 820"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_2}
        ref={line_2}
      >
        <path
          d="M0.999964 2.34842e-05L0.999993 669C0.999997 751.843 68.1573 819 151 819L390 819"
          stroke="#899198"
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
          isLine2OnScreen_md ? `${styles.line_md_2} ${styles.active}` : `${styles.line_md_2}`
        }
        ref={line_md_2}
      >
        <path
          d="M8.25 7.49854V382.002"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_md_2.current && path_md_2.current.getTotalLength()}
          strokeDashoffset={path_md_2.current && path_md_2.current.getTotalLength()}
          ref={path_md_2}
        >
          <animate
            ref={pathAnimate_md_2}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_md_2.current && path_md_2.current.getTotalLength()}`}
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

export default ProjectsLine2;

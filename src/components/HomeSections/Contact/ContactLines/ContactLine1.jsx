import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./ContactLines.module.scss";

const ContactLine1 = () => {
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
        width="189"
        height="158"
        viewBox="0 0 189 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine1OnScreen ? `${styles.line_1} ${styles.active}` : `${styles.line_1}`}
        ref={line_1}
      >
        <path
          d="M1 6.90738e-07V6.90738e-07C1 82.8427 68.1573 150 151 150H177"
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
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          x="188.142"
          y="150.071"
          width="10"
          height="10"
          transform="rotate(135 188.142 150.071)"
          fill="#899198"
        />
      </svg>

      <svg
        width="67"
        height="157"
        viewBox="0 0 67 157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine1OnScreen_md ? `${styles.line_md_1} ${styles.active}` : `${styles.line_md_1}`
        }
        ref={line_md_1}
      >
        <path
          d="M1 0.5V109C1 131.091 18.9086 149 41 149H55"
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
          />
        </path>
        <rect
          x="66.1421"
          y="149.071"
          width="10"
          height="10"
          transform="rotate(135 66.1421 149.071)"
          fill="#899198"
        />
      </svg>

      <svg
        width="15"
        height="76"
        viewBox="0 0 15 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine1OnScreen_sm ? `${styles.line_sm_1} ${styles.active}` : `${styles.line_sm_1}`
        }
        ref={line_sm_1}
      >
        <path
          d="M7 -0.00046224L7 67.9893"
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
          />
        </path>
        <rect
          width="10"
          height="10.0001"
          transform="matrix(0.707107 0.707107 -0.70166 0.712512 7.01666 61)"
          fill="#899198"
        />
      </svg>
    </>
  );
};

export default ContactLine1;

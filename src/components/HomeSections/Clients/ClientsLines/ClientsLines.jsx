import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./ClientsLines.module.scss";

const ClientsLines = () => {
  const line_1 = useRef(null);
  const path_1 = useRef(null);
  const pathAnimate_1 = useRef(null);
  const isLine1OnScreen = useOnScreen(line_1);

  const line_2 = useRef(null);
  const path_2 = useRef(null);
  const pathAnimate_2 = useRef(null);
  const isLine2OnScreen = useOnScreen(line_2);

  const line_3 = useRef(null);
  const path_3 = useRef(null);
  const pathAnimate_3 = useRef(null);
  const isLine3OnScreen = useOnScreen(line_3);

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

  useEffect(() => {
    if (isLine3OnScreen && pathAnimate_3.current) {
      pathAnimate_3.current.beginElement();
    }
  }, [isLine3OnScreen]);

  // Middle

  const line_md_2 = useRef(null);
  const path_md_2 = useRef(null);
  const pathAnimate_md_2 = useRef(null);
  const isLine2OnScreen_md = useOnScreen(line_md_2);

  const line_md_3 = useRef(null);
  const path_md_3 = useRef(null);
  const pathAnimate_md_3 = useRef(null);
  const isLine3OnScreen_md = useOnScreen(line_md_3);

  useEffect(() => {
    if (isLine2OnScreen_md && pathAnimate_md_2.current) {
      pathAnimate_md_2.current.beginElement();
    }
  }, [isLine2OnScreen_md]);

  useEffect(() => {
    if (isLine3OnScreen_md && pathAnimate_md_3.current) {
      pathAnimate_md_3.current.beginElement();
    }
  }, [isLine3OnScreen_md]);

  // Small

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
        width="15"
        height="104"
        viewBox="0 0 15 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine1OnScreen ? `${styles.line_1} ${styles.active}` : `${styles.line_1}`}
        ref={line_1}
      >
        <rect
          x="7.07104"
          y="89"
          width="10"
          height="10"
          transform="rotate(45 7.07104 89)"
          fill="#899198"
        />
        <path
          d="M7 0L7 97"
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
            dur="1.5s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>
      <svg
        width="1096"
        height="163"
        viewBox="0 0 1096 163"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_2}
        ref={line_2}
      >
        <path
          d="M1095 163V163C1095 102.404 1045.88 53.281 985.281 53.281H53.281C27.7207 53.281 6.99999 32.5603 6.99999 7V7"
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
            to={`${path_2.current && path_2.current.getTotalLength() * 2}`}
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          x="14.1421"
          y="7.07104"
          width="10"
          height="10"
          transform="rotate(135 14.1421 7.07104)"
          fill="#899198"
        />
      </svg>
      <svg
        width="945"
        height="227"
        viewBox="0 0 945 227"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine3OnScreen ? `${styles.line_3} ${styles.active}` : `${styles.line_3}`}
        ref={line_3}
      >
        <rect
          width="10.0222"
          height="10.0222"
          transform="matrix(-0.705538 0.708672 -0.705538 -0.708672 14.1422 219.04)"
          fill="#899198"
        />
        <path
          d="M944 0V0C944 62.4082 893.408 113 831 113H106.946C51.1951 113 6.00006 158.195 6.00006 213.946V213.946"
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
        width="480"
        height="54"
        viewBox="0 0 480 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine2OnScreen_md ? `${styles.line_md_2} ${styles.active}` : `${styles.line_md_2}`
        }
        ref={line_md_2}
      >
        <rect
          x="14.1421"
          y="7.07104"
          width="10"
          height="10"
          transform="rotate(135 14.1421 7.07104)"
          fill="#899198"
        />
        <rect
          x="479.142"
          y="46.071"
          width="10"
          height="10"
          transform="rotate(135 479.142 46.071)"
          fill="#899198"
        />
        <path
          d="M7 7V7C7 28.8152 24.6848 46.5 46.5 46.5H474"
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
            dur="1.5s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>
      <svg
        width="15"
        height="78"
        viewBox="0 0 15 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine3OnScreen_md ? `${styles.line_md_3} ${styles.active}` : `${styles.line_md_3}`
        }
        ref={line_md_3}
      >
        <path
          d="M7 -9.7878e-07L7 70"
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
            dur="1.5s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect
          width="10"
          height="10.0001"
          transform="matrix(0.707107 0.707107 -0.70166 0.712512 7.01666 63)"
          fill="#899198"
        />
      </svg>

      <svg
        width="207"
        height="84"
        viewBox="0 0 207 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          isLine2OnScreen_sm ? `${styles.line_sm_2} ${styles.active}` : `${styles.line_sm_2}`
        }
        ref={line_sm_2}
      >
        <path
          d="M7 7H191C199.284 7 206 13.7157 206 22V61C206 69.2843 199.284 76 191 76H154.573"
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
          x="14.1421"
          y="7.07104"
          width="10"
          height="10"
          transform="rotate(135 14.1421 7.07104)"
          fill="#899198"
        />
        <rect
          x="158.142"
          y="76.071"
          width="10"
          height="10"
          transform="rotate(135 158.142 76.071)"
          fill="#899198"
        />
      </svg>
    </>
  );
};

export default ClientsLines;

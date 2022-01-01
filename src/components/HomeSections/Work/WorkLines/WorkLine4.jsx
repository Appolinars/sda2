import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./WorkLines.module.scss";

const WorkLine4 = () => {
  const line_4 = useRef(null);
  const path_4 = useRef(null);
  const pathAnimate_4 = useRef(null);
  const isLine4OnScreen = useOnScreen(line_4);

  useEffect(() => {
    if (isLine4OnScreen && pathAnimate_4.current) {
      pathAnimate_4.current.beginElement();
    }
  }, [isLine4OnScreen]);

  // Small

   const line_sm_4 = useRef(null);
   const path_sm_4 = useRef(null);
   const pathAnimate_sm_4 = useRef(null);
   const isLine4OnScreen_sm = useOnScreen(line_sm_4);

   useEffect(() => {
     if (isLine4OnScreen_sm && pathAnimate_sm_4.current) {
       pathAnimate_sm_4.current.beginElement();
     }
   }, [isLine4OnScreen_sm]);

  return (
    <>
      <svg
        width="56"
        height="575"
        viewBox="0 0 56 575"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_4}
        ref={line_4}
      >
        <path
          d="M56 0.999997V0.999997C25.6243 0.999997 1.00001 25.6243 1.00001 56L1.00001 575"
          stroke="#FFBF60"
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
            to="0"
            dur="2s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>

      <svg
        width="194"
        height="713"
        viewBox="0 0 194 713"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_sm_4}
        ref={line_sm_4}
      >
        <path
          d="M28.335 0.999986L15.9569 0.999985V0.999985C7.69642 0.999984 0.999983 7.69642 0.999979 15.9569L0.99988 233.043C0.999876 241.304 7.69631 248 15.9568 248V248L169.075 248V248C182.288 248 193 258.711 193 271.925L193 274.298L193 640.622L193 650.15C193 663.363 182.288 674.075 169.075 674.075V674.075L83 674.074V674.074C70.3215 674.074 60.0436 684.352 60.0436 697.031L60.0436 713"
          stroke="#FFBF60"
          strokeWidth="2"
          strokeDasharray={path_sm_4.current && path_sm_4.current.getTotalLength()}
          strokeDashoffset={path_sm_4.current && path_sm_4.current.getTotalLength()}
          ref={path_sm_4}
        >
          <animate
            ref={pathAnimate_sm_4}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_sm_4.current && path_sm_4.current.getTotalLength()}`}
            to="0"
            dur="4s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>
    </>
  );
};

export default WorkLine4;

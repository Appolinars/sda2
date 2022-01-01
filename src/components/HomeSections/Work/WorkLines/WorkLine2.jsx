import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./WorkLines.module.scss";

const WorkLine2 = () => {
  const line_2 = useRef(null);
  const path_2 = useRef(null);
  const pathAnimate_2 = useRef(null);
  const isLine2OnScreen = useOnScreen(line_2);

  useEffect(() => {
    if (isLine2OnScreen && pathAnimate_2.current) {
      pathAnimate_2.current.beginElement();
    }
  }, [isLine2OnScreen]);

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
        width="56"
        height="545"
        viewBox="0 0 56 545"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_2}
        ref={line_2}
      >
        <path
          d="M56 543.999V543.999C25.6243 543.999 1.00001 519.375 1.00001 488.999L1.00001 55.999C1.00001 25.6234 25.6243 0.999036 56 0.999037V0.999037"
          stroke="#B62519"
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
      </svg>

      <svg
        width="327"
        height="689"
        viewBox="0 0 327 689"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_sm_2}
        ref={line_sm_2}
      >
        <path
          d="M27.0498 0.999978L15.2537 0.999977V0.999977C7.38159 0.999976 0.999999 7.38157 0.999999 15.2537L1 265.031C1.00001 272.903 7.3816 279.285 15.2537 279.285V279.285L179.803 279.285C185.852 279.285 190.755 284.188 190.755 290.237V290.237L190.755 602.775C190.755 616.3 201.72 627.265 215.245 627.265V627.265L298.5 627.265L301.607 627.265C315.079 627.265 326 638.186 326 651.658V651.658L326 661.117V661.117C326 675.964 313.964 688 299.117 688L283 688L220 688"
          stroke="#B62519"
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
            dur="5s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>
    </>
  );
};

export default WorkLine2;

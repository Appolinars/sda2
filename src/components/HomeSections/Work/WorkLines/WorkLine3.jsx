import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./WorkLines.module.scss";

const WorkLine3 = () => {
  const line_3 = useRef(null);
  const path_3 = useRef(null);
  const path_3_line = useRef(null);
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

  // Small

  const line_sm_3 = useRef(null);
  const path_sm_3 = useRef(null);
  const pathAnimate_sm_3 = useRef(null);
  const isLine3OnScreen_sm = useOnScreen(line_sm_3);

  useEffect(() => {
    if (isLine3OnScreen_sm && pathAnimate_sm_3.current) {
      pathAnimate_sm_3.current.beginElement();
    }
  }, [isLine3OnScreen_sm]);

  return (
    <>
      <svg
        width="1071"
        height="573"
        viewBox="0 0 1071 573"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_3}
        ref={line_3}
      >
        <path
          d="M735 572L920 572C1002.84 572 1070 504.843 1070 422L1070 151C1070 68.1573 1002.84 0.999986 920 0.999987L124 0.999996"
          stroke="#1E4D7D"
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
            to={`${path_3.current && path_3.current.getTotalLength() * 2}`}
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
            id="pathAnimate_3"
          />
        </path>
        <line
          x1="772"
          y1="572"
          x2="-8.74228e-08"
          y2="572"
          stroke="#1E4D7D"
          strokeWidth="2"
          ref={path_3_line}
          strokeDasharray={path_3_line.current && path_3_line.current.getTotalLength()}
          strokeDashoffset={path_3_line.current && path_3_line.current.getTotalLength()}
        >
          <animate
            attributeName="stroke-dashoffset"
            from={`${path_3_line.current && path_3_line.current.getTotalLength()}`}
            to="0"
            dur="1s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
            begin="pathAnimate_3.end"
          />
        </line>
      </svg>

      <svg
        width="272"
        height="573"
        viewBox="0 0 272 573"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_md_3}
        ref={line_md_3}
      >
        <path
          d="M175.033 572V572C228.034 572 271 529.034 271 476.033L271 151C271 68.1573 203.843 0.999986 121 0.999987L-2.75599e-06 0.999988"
          stroke="#1E4D7D"
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
            to={`${path_md_3.current && path_md_3.current.getTotalLength() * 2}`}
            dur="3s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
      </svg>

      <svg
        width="327"
        height="822"
        viewBox="0 0 327 822"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_sm_3}
        ref={line_sm_3}
      >
        <path
          d="M28.0833 0.999974L15.8192 0.999973V0.999973C7.63479 0.999972 1.00001 7.63475 1.00001 15.8192L1.00001 328.846C1.00001 337.03 7.63479 343.665 15.8192 343.665V343.665L183.54 343.665C189.43 343.665 194.204 348.44 194.204 354.33V354.33L194.204 725.806C194.204 743.586 208.618 758 226.398 758V758L300 758V758C314.359 758 326 769.641 326 784V789.25C326 806.509 312.009 820.5 294.75 820.5L200 820.5L167 820.5"
          stroke="#1E4D7D"
          strokeWidth="2"
          strokeDasharray={path_sm_3.current && path_sm_3.current.getTotalLength()}
          strokeDashoffset={path_sm_3.current && path_sm_3.current.getTotalLength()}
          ref={path_sm_3}
        >
          <animate
            ref={pathAnimate_sm_3}
            attributeName="stroke-dashoffset"
            begin="indefinite"
            from={`${path_sm_3.current && path_sm_3.current.getTotalLength()}`}
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

export default WorkLine3;

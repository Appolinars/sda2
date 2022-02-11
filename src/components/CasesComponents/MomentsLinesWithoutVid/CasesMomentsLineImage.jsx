import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./MomentsLinesWithoutVideo.module.scss";

const CasesMomentsLineImage = () => {
  //line 3
  const line_3 = useRef(null);
  const path_3 = useRef(null);
  const pathAnimate_3 = useRef(null);
  const isLine3OnScreen = useOnScreen(line_3);

  useEffect(() => {
    if (isLine3OnScreen && pathAnimate_3.current) {
      pathAnimate_3.current.beginElement();
    }
  }, [isLine3OnScreen]);

  return (
    <>
      <svg
        width="421"
        height="50"
        viewBox="0 0 421 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.line_3}
        ref={line_3}
      >
        <path
          d="M0 1H334.366C367.142 1 397.837 17.0615 416.523 43.989L420 49"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_3.current && path_3.current.getTotalLength()}
          strokeDashoffset={path_3.current && path_3.current.getTotalLength()}
          ref={path_3}
        >
          <animate
            ref={pathAnimate_3}
            attributeName="stroke-dashoffset"
            begin="pathAnimate_moment_without_video_2.end"
            from={`${path_3.current && path_3.current.getTotalLength()}`}
            to="0"
            dur="1s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
            id="pathAnimate_moment_without_video_3"
          />
        </path>
      </svg>
    </>
  );
};

export default CasesMomentsLineImage;

import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./CasesMomentsLinesWithVideo.module.scss";

const CasesMomentsLinesWithVideo = () => {
  //line 1
  const line_1 = useRef(null);
  const path_1 = useRef(null);
  const pathAnimate_1 = useRef(null);
  const isLine1OnScreen = useOnScreen(line_1);

  //line 2
  const line_2 = useRef(null);
  const path_2 = useRef(null);
  const pathAnimate_2 = useRef(null);
  const isLine2OnScreen = useOnScreen(line_2);

  useEffect(() => {
    if (isLine1OnScreen && pathAnimate_1.current) {
      pathAnimate_1.current.beginElement();
    }
  }, [isLine1OnScreen]);

  return (
    <>
      <svg
        width="359"
        height="120"
        viewBox="0 0 359 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine1OnScreen ? `${styles.line_1} ${styles.active}` : `${styles.line_1}`}
        ref={line_1}
      >
        <path
          d="M358 0V0C358 40.9548 324.8 74.1552 283.845 74.1552H44.8449C23.9437 74.1552 7 91.0989 7 112V112"
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
            id="pathAnimate_moment_with_video_1"
          />
        </path>
        <rect
          x="7.07104"
          y="105"
          width="10"
          height="10"
          transform="rotate(45 7.07104 105)"
          fill="#899198"
        />
      </svg>

      <svg
        width="15"
        height="69"
        viewBox="0 0 15 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine2OnScreen ? `${styles.line_2} ${styles.active}` : `${styles.line_2}`}
        ref={line_2}
      >
        <path
          d="M7 12V69"
          stroke="#899198"
          strokeWidth="2"
          strokeDasharray={path_2.current && path_2.current.getTotalLength()}
          strokeDashoffset={path_2.current && path_2.current.getTotalLength()}
          ref={path_2}
        >
          <animate
            ref={pathAnimate_2}
            attributeName="stroke-dashoffset"
            begin="pathAnimate_moment_with_video_1.end"
            from={`${path_2.current && path_2.current.getTotalLength()}`}
            to="0"
            dur="1s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
          />
        </path>
        <rect x="7.07104" width="10" height="10" transform="rotate(45 7.07104 0)" fill="#899198" />
      </svg>
    </>
  );
};

export default CasesMomentsLinesWithVideo;

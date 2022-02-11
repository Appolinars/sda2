import { useEffect, useRef } from "react";
import { useOnScreen } from "src/utils/hooks";

import styles from "./MomentsLinesWithoutVideo.module.scss";

const MomentsLinesWithoutVideo = () => {
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
        width="355"
        height="393"
        viewBox="0 0 355 393"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isLine1OnScreen ? `${styles.line_1} ${styles.active}` : `${styles.line_1}`}
        ref={line_1}
      >
        <path
          d="M24 13V108.5C24 163.728 68.7715 208.5 124 208.5H282C321.488 208.5 353.5 240.512 353.5 280V280C353.5 319.488 321.488 351.5 282 351.5H35.5C19.7599 351.5 7 364.26 7 380V380"
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
            id="pathAnimate_moment_without_video_1"
          />
        </path>

        <path
          d="M24.0713 0L31.1424 7.07107L24.0713 14.1421L17.0002 7.07107L24.0713 0Z"
          fill="#899198"
        />
        <path
          d="M7.07129 377.929L14.1424 385L7.07129 392.071L0.000221451 385L7.07129 377.929Z"
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
            begin="pathAnimate_moment_without_video_1.end"
            from={`${path_2.current && path_2.current.getTotalLength()}`}
            to="0"
            dur=".5s"
            repeatCount="1"
            fill="freeze"
            calcMode="linear"
            id="pathAnimate_moment_without_video_2"
          />
        </path>
        <rect x="7.07104" width="10" height="10" transform="rotate(45 7.07104 0)" fill="#899198" />
      </svg>
    </>
  );
};

export default MomentsLinesWithoutVideo;

const Loader = ({ size = "30", color = "#000", duration = "1s", className }) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="20 37 55 30"
      enablebbackground="new 0 0 0 0"
      className={className}
    >
      <path
        fill={color}
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur={duration}
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Loader;

import * as React from "react";
import { useSpring, animated, config } from "react-spring";

const useHover = (props) => {
  const [hover, setHover] = React.useState(false);
  const springProps = Object.entries(props).reduce(
    (acc, entry) => {
      const key = entry[0];
      const value = entry[1];
      if (key === "animationConfig") {
        if (typeof value === "string") {
          return {
            ...acc,
            config: config[value],
          };
        }
        if (typeof value === "object") {
          return {
            ...acc,
            config: value,
          };
        }
      }
      const hasTwoValues = value?.initial && value?.onHover && true;
      if (!hasTwoValues) return acc;
      return {
        ...acc,
        [key]: hover ? value?.onHover : value?.initial,
      };
    },
    {
      transform: hover ? "scale(0.95)" : "scale(1)",
      opacity: hover ? "0.6" : "1",
    }
  );
  const spring = useSpring(springProps);

  return {
    spring,
    animated,
    setHover,
  };
};

export default useHover;

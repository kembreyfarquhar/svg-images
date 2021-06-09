import AnimatedBasketBall from "../components/AnimatedBasketball";
import AnimationWrapper from "../components/AnimationWrapper";
import Basketball from "../assets/icons/Basketball.svg";

const IconList = () => {
  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
    >
      <AnimationWrapper style={{ cursor: "pointer", height: 128, width: 128 }}>
        <img src={Basketball} alt="basketball icon" />
      </AnimationWrapper>
      <AnimatedBasketBall size={128} />
    </div>
  );
};

export default IconList;

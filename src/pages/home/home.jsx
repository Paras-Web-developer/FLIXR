import "./style.scss";
import Herobanner from "./heroBanner/Herobanner";
import Tranding from "./Tranding/Tranding";
import Popular from "./popular/Popular";
const home = () => {
  return (
    <>
      <div className="homepage">
        <Herobanner />
        <Tranding />
        <Popular/>
        <div style={{ height: 1000 }}></div>
      </div>
    </>
  );
};

export default home;

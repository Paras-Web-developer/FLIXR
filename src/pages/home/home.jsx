import "./style.scss";
import Herobanner from "./heroBanner/Herobanner";
import Tranding from "./Tranding/Tranding";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
const home = () => {
  return (
    <>
      <div className="homepage">
        <Herobanner />
        <Tranding />
        <Popular/>
        <TopRated/>
      </div>
    </>
  );
};

export default home;

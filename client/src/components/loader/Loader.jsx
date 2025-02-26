import { ScaleLoader } from "react-spinners";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <ScaleLoader color="#41893d" />
    </div>
  );
};

export default Loader;

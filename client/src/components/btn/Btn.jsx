import "./Btn.scss";
const Btn = ({ type, text }) => {
  return <button className={type ? type : null}>{text || "Click Me"}</button>;
};

export default Btn;

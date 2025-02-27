import "./Btn.scss";
const Btn = ({ type, text, handleclick = null }) => {
  return (
    <button onClick={handleclick} className={type ? type : null}>
      {text || "Click Me"}
    </button>
  );
};

export default Btn;

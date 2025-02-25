import "./Card.scss";

const Card = ({ imgUrl, imgName }) => {
  return (
    <div className="card">
      <img src={`${imgUrl}`} alt={imgName} loading="lazy" />
      <div className="img_overlay"></div>
      <p>{imgName}</p>
    </div>
  );
};

export default Card;

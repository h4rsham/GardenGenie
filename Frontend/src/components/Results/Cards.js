function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
      <div className="card-body">
        <h3 className="card-title">{props.plantName}</h3>
      </div>
    </div>
  );
}

export default Card;

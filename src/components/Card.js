function Card({ name, link, _id }) {
  return (
    <li className="card" id={_id}>
      <button
        className="card__delete"
        type="button"
        aria-label="удалить"
      ></button>
      <img className="card__image" src={link} alt={name} />
      <div className="card__wrap">
        <h2 className="card__text">{name}</h2>
        <div>
          <button
            className="card__like-btn"
            type="button"
            aria-label="нравится"
          ></button>
          <p className="card__like-amount"></p>
        </div>
      </div>
    </li>
  );
}

export default Card;

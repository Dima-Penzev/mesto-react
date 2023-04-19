function Card({ name, link, likes, onCardClick }) {
  function handleClick() {
    onCardClick({ name, link });
  }

  return (
    <li className="card">
      <button
        className="card__delete"
        type="button"
        aria-label="удалить"
      ></button>
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <div className="card__wrap">
        <h2 className="card__text">{name}</h2>
        <div>
          <button
            className="card__like-btn"
            type="button"
            aria-label="нравится"
          ></button>
          <p className="card__like-amount">{likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;

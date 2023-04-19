function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_image ${
        props.card.link ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__close"
          type="button"
          aria-label="закрыть"
          onClick={props.onClose}
        ></button>
        <figure className="module">
          <img
            className="module__image"
            src={props.card.link}
            alt={props.card.name}
          />
          <figcaption className="module__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;

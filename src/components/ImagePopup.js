function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__close"
          type="button"
          aria-label="закрыть"
        ></button>
        <figure className="module">
          <img className="module__image" src="#" alt="#" />
          <figcaption className="module__caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;

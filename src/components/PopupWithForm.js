function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="закрыть"
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          id="form-profile"
          name={props.name}
          noValidate
        >
          <div className="popup__input-container">
            <input
              className="popup__input"
              id="name-input"
              type="text"
              name="username"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error name-input-error"></span>
          </div>
          <div className="popup__input-container">
            <input
              className="popup__input"
              id="activity-input"
              type="text"
              name="activity"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error activity-input-error"></span>
          </div>
          <button className="popup__button" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

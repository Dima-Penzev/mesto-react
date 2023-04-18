import React from "react";

function Main(props) {
  // const [popupState, setPopupState] = React.useState(false);

  return (
    <main className="content root__content">
      <section className="user">
        <div className="user__photo-wrap">
          <img className="user__photo" src="#" alt="Фото пользователя" />
          <button
            className="user__photo-edit"
            type="button"
            aria-label="заменить фото пользователя"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="user__edit-wrap">
          <h1 className="user__name"></h1>
          <button
            className="user__edit"
            type="button"
            aria-label="редактировать"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <p className="user__activity"></p>
        <button
          className="user__add-card"
          type="button"
          aria-label="добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="cards-container"></ul>
      </section>
    </main>
  );
}

export default Main;

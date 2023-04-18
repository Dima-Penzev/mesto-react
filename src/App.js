import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  function handleEditAvatarClick() {
    document
      .querySelector(".popup_type_photo-editor")
      .classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document.querySelector(".popup_type_profile").classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document
      .querySelector(".popup_type_card-editor")
      .classList.add("popup_opened");
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <div className="popup popup_type_profile">
        <div className="popup__container">
          <button
            className="popup__close"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form"
            id="form-profile"
            name="profile-data"
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
      <div className="popup popup_type_card-editor">
        <div className="popup__container">
          <button
            className="popup__close"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form"
            id="form-card-editor"
            name="card-data"
            noValidate
          >
            <div className="popup__input-container">
              <input
                className="popup__input"
                id="card-title-input"
                type="text"
                name="name"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="popup__error card-title-input-error"></span>
            </div>
            <div className="popup__input-container">
              <input
                className="popup__input"
                id="card-link-input"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__error card-link-input-error"></span>
            </div>
            <button className="popup__button" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_photo-editor">
        <div className="popup__container">
          <button
            className="popup__close"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="popup__form"
            id="form-photo-editor"
            name="photo-data"
            noValidate
          >
            <div className="popup__input-container">
              <input
                className="popup__input"
                id="photo-link-input"
                type="url"
                name="link"
                placeholder="Ссылка на фото"
                required
              />
              <span className="popup__error photo-link-input-error"></span>
            </div>
            <button className="popup__button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

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
      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <button
            className="popup__close"
            type="button"
            aria-label="закрыть"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__button" type="submit">
            Да
          </button>
        </div>
      </div>
      <template id="card">
        <li className="card">
          <button
            className="card__delete"
            type="button"
            aria-label="удалить"
          ></button>
          <img className="card__image" src="#" alt="#" />
          <div className="card__wrap">
            <h2 className="card__text"></h2>
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
      </template>
    </div>
  );
}

export default App;

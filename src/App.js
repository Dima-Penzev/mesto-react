import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function closeAllPopups() {}

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={setIsEditProfilePopupOpen}
      >
        <form
          className="popup__form"
          id="form-profile"
          name="profile"
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
      </PopupWithForm>
      <PopupWithForm
        name="card-editor"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={setIsAddPlacePopupOpen}
      >
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
      </PopupWithForm>
      <PopupWithForm
        name="photo-editor"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={setIsEditAvatarPopupOpen}
      >
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
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?">
        <button className="popup__button" type="submit">
          Да
        </button>
      </PopupWithForm>
    </div>
  );
}

export default App;

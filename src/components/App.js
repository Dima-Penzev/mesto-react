import { useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <>
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
        </>
      </PopupWithForm>
      <PopupWithForm
        name="card-editor"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
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
        </>
      </PopupWithForm>
      <PopupWithForm
        name="photo-editor"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;

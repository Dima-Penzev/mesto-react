import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
    </PopupWithForm>
  );
}

export default EditProfilePopup;

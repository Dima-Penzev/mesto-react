import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatart }) {
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatart({
      avatar: document.getElementById("photo-link-input").value,
    });
  }

  return (
    <PopupWithForm
      name="photo-editor"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
  );
}

export default EditAvatarPopup;

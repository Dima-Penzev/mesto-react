import { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({ name: "", about: "" });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((response) => setCurrentUser(response))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((response) => {
        setCards(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(likes, cardId) {
    const isLiked = likes.some((i) => i._id === currentUser._id);

    api
      .toggleLikeState(cardId, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === cardId ? newCard : c)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(cardId) {
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardId));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser({ name, about }) {
    api
      .setUserInfo({ username: name, activity: about })
      .then((response) => {
        setCurrentUser(response);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .setUserPhoto(avatar)
      .then((response) => {
        setCurrentUser(response);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(newCard) {
    api
      .addNewCard(newCard)
      .then((response) => {
        setCards([response, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={setIsEditProfilePopupOpen}
          onAddPlace={setIsAddPlacePopupOpen}
          onEditAvatar={setIsEditAvatarPopupOpen}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatart={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

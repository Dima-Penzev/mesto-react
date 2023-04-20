import { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cardsResponse]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);

        if (!cards.length) {
          setCards(cardsResponse);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName, userDescription, userAvatar, cards]);

  return (
    <main className="content root__content">
      <section className="user">
        <div className="user__photo-wrap">
          <img
            className="user__photo"
            src={userAvatar}
            alt="Фото пользователя"
          />
          <button
            className="user__photo-edit"
            type="button"
            aria-label="заменить фото пользователя"
            onClick={onEditAvatar}
          ></button>
        </div>
        <div className="user__edit-wrap">
          <h1 className="user__name">{userName}</h1>
          <button
            className="user__edit"
            type="button"
            aria-label="редактировать"
            onClick={onEditProfile}
          ></button>
        </div>
        <p className="user__activity">{userDescription}</p>
        <button
          className="user__add-card"
          type="button"
          aria-label="добавить"
          onClick={onAddPlace}
        ></button>
      </section>
      <section>
        <ul className="cards-container">
          {cards.map(({ name, link, likes, _id }) => (
            <Card
              name={name}
              link={link}
              likes={likes.length}
              key={_id}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
